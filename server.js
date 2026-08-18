import 'dotenv/config';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = Number(process.env.PORT || 3000);
const PUBLIC_BASE_URL = (process.env.PUBLIC_BASE_URL || `http://localhost:${PORT}`).replace(/\/$/, '');
const ORDERS_FILE = path.join(__dirname, 'data', 'orders.json');
const DEMO_PAYMENT = String(process.env.DEMO_PAYMENT || '').toLowerCase() === 'true';

const FALLBACK_PRODUCTS = [
  { id:'blush', name:'Blush', price:220, category:'love', description:'Пудровые сезонные цветы', image:'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=900&q=82', active:true, sort:10 },
  { id:'wild-garden', name:'Wild Garden', price:280, category:'everyday', description:'Свободный садовый букет', image:'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=82', active:true, sort:20 },
  { id:'romance', name:'Romance', price:320, category:'love', description:'Нежный букет в мягких тонах', image:'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?auto=format&fit=crop&w=900&q=82', active:true, sort:30 },
  { id:'pure', name:'Pure', price:240, category:'everyday', description:'Белые цветы и зелень', image:'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=82', active:true, sort:40 },
  { id:'soft-morning', name:'Soft Morning', price:260, category:'everyday', description:'Светлый воздушный микс', image:'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=82', active:true, sort:50 },
  { id:'celebration', name:'Celebration', price:350, category:'event', description:'Выразительный праздничный букет', image:'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=82', active:true, sort:60 },
  { id:'tender', name:'Tender', price:290, category:'love', description:'Розы и сезонные акценты', image:'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=82', active:true, sort:70 },
  { id:'event-flowers', name:'Event Flowers', price:420, category:'event', description:'Композиция для особого события', image:'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=900&q=82', active:true, sort:80 }
];

const CATALOG_URL = String(process.env.GOOGLE_CATALOG_URL || '').trim();
const CATALOG_CACHE_MS = Math.max(10_000, Number(process.env.CATALOG_CACHE_SECONDS || 60) * 1000);
const CATALOG_TIMEOUT_MS = Math.max(5_000, Number(process.env.CATALOG_TIMEOUT_MS || 20_000));
let catalogCache = { products: FALLBACK_PRODUCTS, expiresAt: 0, source: 'fallback' };

function parseSheetBoolean(value, defaultValue = false) {
  if (typeof value === 'boolean') return value;
  if (value === undefined || value === null || value === '') return defaultValue;
  const normalized = String(value).trim().toLowerCase();
  if (['true', '1', 'yes', 'да', 'כן', 'on', 'active'].includes(normalized)) return true;
  if (['false', '0', 'no', 'нет', 'לא', 'off', 'inactive'].includes(normalized)) return false;
  return defaultValue;
}

function sanitizeProduct(row = {}) {
  const id = cleanText(row.id ?? row.ID, 80).toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
  const name = cleanText(row.name ?? row.Name ?? row['Название'], 120);
  const rawPrice = String(row.price ?? row.Price ?? row['Цена'] ?? '').replace(/\s/g, '').replace(',', '.').replace(/[^0-9.]/g, '');
  const price = Number(rawPrice);
  if (!id || !name || !Number.isFinite(price) || price <= 0) return null;

  const activeValue = row['is-active'] ?? row.active ?? row['Активен'];
  const imageValue = row.photo ?? row.image ?? row['Фото URL'];
  const sortValue = row.order ?? row.sort ?? row['Порядок'];
  const featuredValue = row.featured ?? row['Рекомендуемый'];

  return {
    id,
    name,
    price: Math.round(price * 100) / 100,
    category: cleanText(row.category ?? row.Category ?? row['Категория'] ?? 'everyday', 40).toLowerCase() || 'everyday',
    description: cleanText(row.description ?? row.Description ?? row['Описание'], 260),
    image: cleanText(imageValue, 1200),
    active: parseSheetBoolean(activeValue, true),
    sort: Number.isFinite(Number(sortValue)) ? Number(sortValue) : 9999,
    featured: parseSheetBoolean(featuredValue, false)
  };
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === '"') {
      if (quoted && next === '"') {
        field += '"';
        i += 1;
      } else {
        quoted = !quoted;
      }
      continue;
    }

    if (char === ',' && !quoted) {
      row.push(field);
      field = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i += 1;
      row.push(field);
      field = '';
      if (row.some(value => String(value).trim() !== '')) rows.push(row);
      row = [];
      continue;
    }

    field += char;
  }

  row.push(field);
  if (row.some(value => String(value).trim() !== '')) rows.push(row);
  if (!rows.length) return [];

  const headers = rows.shift().map((value, index) => {
    const cleaned = String(value).replace(/^\uFEFF/, '').trim();
    return cleaned || `column-${index + 1}`;
  });

  return rows.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])));
}

async function fetchCatalogCsv() {
  let lastError;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await fetch(CATALOG_URL, {
        redirect: 'follow',
        headers: { accept: 'text/csv,text/plain,*/*', 'cache-control': 'no-cache' },
        signal: AbortSignal.timeout(CATALOG_TIMEOUT_MS)
      });
      if (!response.ok) throw new Error(`Google Sheets CSV HTTP ${response.status}`);
      return { csv: await response.text(), contentType: response.headers.get('content-type') || '' };
    } catch (error) {
      lastError = error;
      if (attempt < 2) await new Promise(resolve => setTimeout(resolve, 650));
    }
  }
  throw lastError;
}

async function getCatalog({ force = false } = {}) {
  if (!CATALOG_URL) return { products: FALLBACK_PRODUCTS, source: 'fallback' };
  if (!force && Date.now() < catalogCache.expiresAt) return catalogCache;
  try {
    const { csv, contentType } = await fetchCatalogCsv();
    if (/text\/html/i.test(contentType) || /^\s*<!doctype html/i.test(csv)) {
      throw new Error('Google Sheets вернул HTML вместо CSV');
    }

    const rows = parseCsv(csv);
    const products = rows
      .map(sanitizeProduct)
      .filter(Boolean)
      .filter(product => product.active)
      .sort((a, b) => a.sort - b.sort || a.name.localeCompare(b.name));

    if (!products.length) throw new Error('В публичной Google Таблице нет активных товаров');
    catalogCache = { products, source: 'google-csv', expiresAt: Date.now() + CATALOG_CACHE_MS };
    return catalogCache;
  } catch (error) {
    console.error('Catalog sync failed:', error.message);
    if (String(catalogCache.source).startsWith('google') && catalogCache.products.length) {
      return { ...catalogCache, source: 'google-csv-stale' };
    }
    return { products: FALLBACK_PRODUCTS, source: 'fallback-error' };
  }
}

app.set('trust proxy', 1);
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: false, limit: '100kb' }));
app.use('/api', rateLimit({ windowMs: 60_000, limit: 60, standardHeaders: 'draft-8', legacyHeaders: false }));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

function cleanText(value, max = 300) {
  return String(value ?? '').replace(/[<>]/g, '').trim().slice(0, max);
}
function isValidPhone(value) {
  return /^[+\d][\d\s()\-]{7,19}$/.test(String(value || '').trim());
}
function isValidEmail(value) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}
function newOrderId() {
  return `TATI-${new Date().toISOString().slice(0,10).replaceAll('-', '')}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
}
async function readOrders() {
  try { return JSON.parse(await fs.readFile(ORDERS_FILE, 'utf8')); }
  catch { return []; }
}
async function writeOrders(orders) {
  await fs.mkdir(path.dirname(ORDERS_FILE), { recursive: true });
  const tmp = `${ORDERS_FILE}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(orders, null, 2));
  await fs.rename(tmp, ORDERS_FILE);
}
async function saveOrder(order) {
  const orders = await readOrders();
  orders.unshift(order);
  await writeOrders(orders.slice(0, 5000));
}
async function updateOrder(orderId, patch) {
  const orders = await readOrders();
  const index = orders.findIndex(o => o.id === orderId);
  if (index < 0) return null;
  orders[index] = { ...orders[index], ...patch, updatedAt: new Date().toISOString() };
  await writeOrders(orders);
  return orders[index];
}
async function normalizeCart(rawCart) {
  if (!Array.isArray(rawCart) || rawCart.length === 0 || rawCart.length > 30) throw new Error('Корзина пуста');
  const { products } = await getCatalog({ force: true });
  const productMap = new Map(products.map(product => [product.id, product]));
  const items = rawCart.map(row => {
    const id = cleanText(row?.id, 80);
    const product = productMap.get(id);
    const quantity = Math.max(1, Math.min(20, Number.parseInt(row?.quantity, 10) || 1));
    if (!product) throw new Error('Один из букетов больше недоступен. Обновите страницу и проверьте корзину.');
    return { id, name: product.name, price: product.price, quantity, lineTotal: product.price * quantity };
  });
  const total = items.reduce((sum, item) => sum + item.lineTotal, 0);
  return { items, total };
}
function normalizeCustomer(raw = {}) {
  const customer = {
    name: cleanText(raw.name, 100),
    phone: cleanText(raw.phone, 30),
    email: cleanText(raw.email, 120),
    city: cleanText(raw.city, 100),
    address: cleanText(raw.address, 220),
    deliveryDate: cleanText(raw.deliveryDate, 30),
    deliveryTime: cleanText(raw.deliveryTime, 60),
    note: cleanText(raw.note, 600)
  };
  if (customer.name.length < 2) throw new Error('Укажите имя');
  if (!isValidPhone(customer.phone)) throw new Error('Проверьте номер телефона');
  if (!isValidEmail(customer.email)) throw new Error('Проверьте email');
  if (customer.city.length < 2) throw new Error('Укажите город');
  if (customer.address.length < 4) throw new Error('Укажите адрес доставки');
  return customer;
}
function formatMoney(value) {
  return new Intl.NumberFormat('he-IL', { maximumFractionDigits: 2 }).format(Number(value || 0));
}
function formatIsraelDate(iso) {
  try {
    return new Intl.DateTimeFormat('ru-RU', {
      timeZone: 'Asia/Jerusalem', day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    }).format(new Date(iso));
  } catch { return iso || ''; }
}
function orderStatusLabel(status) {
  return ({
    awaiting_payment: 'Ожидает оплату', paid: 'Оплачен', payment_failed: 'Оплата не прошла',
    payment_configuration_error: 'Оплата не настроена'
  })[status] || status;
}
function formatOrderMessage(order, title = '🌸 Новый заказ TATI Flowers') {
  const lines = order.items.map((i, index) => `${index + 1}. ${i.name}\n   ${i.quantity} × ₪${formatMoney(i.price)} = ₪${formatMoney(i.lineTotal)}`);
  return [
    title,
    `№ ${order.id}`,
    `Статус: ${orderStatusLabel(order.status)}`,
    `Создан: ${formatIsraelDate(order.createdAt)}`,
    '',
    '🛍 СОСТАВ ЗАКАЗА',
    ...lines,
    '',
    `💰 ИТОГО: ₪${formatMoney(order.total)}`,
    '',
    '👤 КЛИЕНТ',
    `${order.customer.name}`,
    `📞 ${order.customer.phone}`,
    order.customer.email ? `✉️ ${order.customer.email}` : null,
    '',
    '🚚 ДОСТАВКА',
    `📍 ${order.customer.city}, ${order.customer.address}`,
    order.customer.deliveryDate ? `📅 ${order.customer.deliveryDate}` : null,
    order.customer.deliveryTime ? `🕒 ${order.customer.deliveryTime}` : null,
    order.customer.note ? `📝 ${order.customer.note}` : null
  ].filter(Boolean).join('\n');
}
async function sendTelegram(text) {
  const token = String(process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = String(process.env.TELEGRAM_CHAT_ID || '').trim();
  if (!token || !chatId) return { skipped: true, reason: 'Telegram is not configured' };
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    signal: AbortSignal.timeout(10_000),
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true })
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok || body.ok === false) throw new Error(body.description || `Telegram HTTP ${response.status}`);
  return body;
}
function payPlusConfigured() {
  return Boolean(process.env.PAYPLUS_API_KEY && process.env.PAYPLUS_SECRET_KEY && process.env.PAYPLUS_PAYMENT_PAGE_UID);
}
async function createPayPlusPayment(order) {
  const response = await fetch(`${process.env.PAYPLUS_API_URL || 'https://restapi.payplus.co.il/api/v1.0'}/PaymentPages/generateLink`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'api-key': process.env.PAYPLUS_API_KEY,
      'secret-key': process.env.PAYPLUS_SECRET_KEY
    },
    body: JSON.stringify({
      payment_page_uid: process.env.PAYPLUS_PAYMENT_PAGE_UID,
      charge_method: 1,
      language_code: 'he',
      amount: order.total,
      currency_code: 'ILS',
      sendEmailApproval: true,
      sendEmailFailure: false,
      refURL_success: `${PUBLIC_BASE_URL}/payment/success?order=${encodeURIComponent(order.id)}`,
      refURL_failure: `${PUBLIC_BASE_URL}/payment/failure?order=${encodeURIComponent(order.id)}`,
      refURL_cancel: `${PUBLIC_BASE_URL}/payment/cancel?order=${encodeURIComponent(order.id)}`,
      refURL_callback: `${PUBLIC_BASE_URL}/api/payplus/callback`,
      send_failure_callback: true,
      more_info: order.id,
      more_info_1: order.customer.phone,
      more_info_2: order.customer.name
    })
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok || !body?.data?.payment_page_link) {
    throw new Error(body?.results?.description || 'PayPlus не вернул ссылку на оплату');
  }
  return { url: body.data.payment_page_link, pageRequestUid: body.data.page_request_uid || '' };
}
function verifyPayPlusRequest(req) {
  if (!process.env.PAYPLUS_SECRET_KEY) return false;
  const ua = String(req.headers['user-agent'] || '');
  const hash = String(req.headers.hash || '');
  if (ua !== 'PayPlus' || !hash) return false;
  const message = JSON.stringify(req.body || {});
  const expected = crypto.createHmac('sha256', process.env.PAYPLUS_SECRET_KEY).update(message).digest('base64');
  const a = Buffer.from(expected);
  const b = Buffer.from(hash);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
function getOrderIdFromPayPlus(body = {}) {
  return cleanText(body.more_info || body?.data?.more_info || body?.transaction?.more_info || body?.transaction?.more_info_1, 100);
}

app.get('/api/products', async (req, res) => {
  const force = req.query.refresh === '1';
  const catalog = await getCatalog({ force });
  res.set('Cache-Control', 'no-store');
  res.json({ ok: true, products: catalog.products, source: catalog.source, synced: String(catalog.source).startsWith('google-csv') });
});

app.get('/api/config', (_req, res) => {
  res.json({ paymentMode: DEMO_PAYMENT ? 'demo' : 'payplus', telegramConfigured: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) });
});

app.post('/api/checkout', async (req, res) => {
  try {
    const { items, total } = await normalizeCart(req.body.cart);
    const customer = normalizeCustomer(req.body.customer);
    const order = {
      id: newOrderId(), items, total, customer,
      status: 'awaiting_payment',
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
    };
    await saveOrder(order);

    // Send a useful pending notification too; a second message is sent after confirmed payment.
    sendTelegram(formatOrderMessage(order, '🕒 НОВЫЙ ЗАКАЗ — ожидает оплату'))
      .then(result => { if (!result?.skipped) console.log(`Telegram: order ${order.id} sent`); })
      .catch(error => console.error('Telegram order notification failed:', error.message));

    if (DEMO_PAYMENT) {
      return res.json({ ok: true, orderId: order.id, paymentUrl: `${PUBLIC_BASE_URL}/demo-payment?order=${encodeURIComponent(order.id)}` });
    }
    if (!payPlusConfigured()) {
      await updateOrder(order.id, { status: 'payment_configuration_error' });
      return res.status(503).json({ ok: false, error: 'Оплата ещё не подключена: добавьте PayPlus credentials в .env' });
    }
    const payment = await createPayPlusPayment(order);
    await updateOrder(order.id, { payPlusPageRequestUid: payment.pageRequestUid });
    res.json({ ok: true, orderId: order.id, paymentUrl: payment.url });
  } catch (error) {
    console.error(error);
    res.status(400).json({ ok: false, error: error.message || 'Не удалось оформить заказ' });
  }
});

app.post('/api/payplus/callback', async (req, res) => {
  try {
    if (!verifyPayPlusRequest(req)) return res.status(401).json({ ok: false });
    const orderId = getOrderIdFromPayPlus(req.body);
    if (!orderId) return res.status(400).json({ ok: false, error: 'Missing order id' });

    // PayPlus sends successful callbacks automatically when refURL_callback is configured.
    // If send_failure_callback=true, failures can arrive too, so reject known failure markers.
    const raw = JSON.stringify(req.body).toLowerCase();
    const looksFailed = /"status"\s*:\s*"?(failed|failure|declined|cancel)/.test(raw) || /"status_code"\s*:\s*"?[1-9]/.test(raw);
    const order = await updateOrder(orderId, { status: looksFailed ? 'payment_failed' : 'paid', paymentCallback: req.body });
    if (order && !looksFailed) await sendTelegram(formatOrderMessage(order, '✅ ЗАКАЗ ОПЛАЧЕН')); 
    res.json({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false });
  }
});

app.get('/payment/success', (req, res) => res.redirect(`/?payment=success&order=${encodeURIComponent(cleanText(req.query.order, 100))}`));
app.get('/payment/failure', (req, res) => res.redirect(`/?payment=failure&order=${encodeURIComponent(cleanText(req.query.order, 100))}`));
app.get('/payment/cancel', (req, res) => res.redirect(`/?payment=cancel&order=${encodeURIComponent(cleanText(req.query.order, 100))}`));

app.get('/demo-payment', async (req, res) => {
  if (!DEMO_PAYMENT) return res.status(404).send('Not found');
  const orderId = cleanText(req.query.order, 100);
  const orders = await readOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return res.status(404).send('Order not found');
  res.type('html').send(`<!doctype html><html lang="ru"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Demo payment</title><style>body{font-family:system-ui;background:#f7f1ec;color:#29231f;display:grid;place-items:center;min-height:100vh;margin:0}.box{width:min(420px,90vw);background:white;padding:32px;border-radius:28px;box-shadow:0 20px 60px #0001}button{width:100%;padding:15px;border:0;border-radius:999px;background:#29231f;color:white;font-weight:700;cursor:pointer}small{opacity:.6}</style><div class="box"><small>DEMO MODE · карта не списывается</small><h1>Оплата ₪${order.total}</h1><p>Заказ ${order.id}</p><form method="post" action="/api/demo-payment/confirm"><input type="hidden" name="order" value="${order.id}"><button>Имитировать успешную оплату</button></form></div></html>`);
});
app.post('/api/demo-payment/confirm', async (req, res) => {
  if (!DEMO_PAYMENT) return res.status(404).send('Not found');
  const orderId = cleanText(req.body.order, 100);
  const order = await updateOrder(orderId, { status: 'paid', paymentProvider: 'demo' });
  if (order) await sendTelegram(formatOrderMessage(order, '✅ DEMO: ЗАКАЗ ОПЛАЧЕН')).catch(error => console.error('Telegram paid notification failed:', error.message));
  res.redirect(`/?payment=success&order=${encodeURIComponent(orderId)}`);
});

app.post('/api/contact', async (req, res) => {
  try {
    const name = cleanText(req.body.name, 100);
    const phone = cleanText(req.body.phone, 30);
    const message = cleanText(req.body.message, 800);
    if (name.length < 2 || !isValidPhone(phone)) throw new Error('Проверьте имя и телефон');
    await sendTelegram(`💌 Заявка с сайта TATI Flowers\nИмя: ${name}\nТелефон: ${phone}\n${message ? `Сообщение: ${message}` : ''}`);
    res.json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, error: error.message || 'Не удалось отправить заявку' });
  }
});

app.get('*splat', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(PORT, () => console.log(`TATI Flowers: ${PUBLIC_BASE_URL}`));
