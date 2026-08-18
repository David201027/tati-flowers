'use strict';

let bouquets = [];

const savedCart = readStorage('tati-cart-v2', {});
const state = {
  filter: 'all',
  cart: new Map(Object.entries(savedCart).map(([id, qty]) => [id, Number(qty) || 1])),
  favorites: new Set(readStorage('tati-favorites', []))
};

const $ = selector => document.querySelector(selector);
const el = {
  products: $('#products'), categories: $('.categories'), bagCount: $('#bagCount'), openCart: $('#openCart'), closeCart: $('#closeCart'),
  cartDrawer: $('#cartDrawer'), cartBackdrop: $('#cartBackdrop'), cartItems: $('#cartItems'), cartEmpty: $('#cartEmpty'), cartFooter: $('#cartFooter'),
  cartTotal: $('#cartTotal'), checkoutBtn: $('#checkoutBtn'), menuButton: $('.menu-btn'), nav: $('.nav'), toast: $('#toast'), contactForm: $('#contactForm'),
  checkoutBackdrop: $('#checkoutBackdrop'), checkoutModal: $('#checkoutModal'), closeCheckout: $('#closeCheckout'), checkoutForm: $('#checkoutForm'),
  checkoutTotal: $('#checkoutTotal'), checkoutButtonTotal: $('#checkoutButtonTotal'), checkoutStatus: $('#checkoutStatus')
};
let toastTimer;

function readStorage(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function saveState() {
  try {
    localStorage.setItem('tati-cart-v2', JSON.stringify(Object.fromEntries(state.cart)));
    localStorage.setItem('tati-favorites', JSON.stringify([...state.favorites]));
  } catch {}
}
function getBouquet(id) { return bouquets.find(b => b.id === id); }
function money(value) { return `₪${Number(value).toLocaleString('he-IL')}`; }
function cartCount() { return [...state.cart.values()].reduce((sum, q) => sum + q, 0); }
function cartTotal() { return [...state.cart].reduce((sum, [id, q]) => sum + (getBouquet(id)?.price || 0) * q, 0); }
function cartPayload() { return [...state.cart].map(([id, quantity]) => ({ id, quantity })); }

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
}
function safeImage(value) {
  const url = String(value || '').trim();
  return /^https?:\/\//i.test(url) ? url.replace(/['"()\\]/g, encodeURIComponent) : '';
}
const CATEGORY_LABELS = {
  everyday: 'На каждый день',
  love: 'Любовь',
  event: 'События',
  wedding: 'Свадебные',
  wedding_bouquet: 'Свадебные',
  composition: 'Композиции',
  gift: 'Подарки'
};
function categoryLabel(category) {
  const key = String(category || '').toLowerCase();
  if (CATEGORY_LABELS[key]) return CATEGORY_LABELS[key];
  return key ? key.replace(/[-_]+/g, ' ').replace(/^./, c => c.toUpperCase()) : 'Другое';
}
function renderCategories() {
  if (!el.categories) return;
  const categories = [...new Set(bouquets.map(b => b.category).filter(Boolean))];
  const valid = state.filter === 'all' || categories.includes(state.filter);
  if (!valid) state.filter = 'all';
  el.categories.innerHTML = [
    `<button data-filter="all" class="${state.filter === 'all' ? 'active' : ''}">Все</button>`,
    ...categories.map(category => `<button data-filter="${escapeHtml(category)}" class="${state.filter === category ? 'active' : ''}">${escapeHtml(categoryLabel(category))}</button>`)
  ].join('');
}
function productTemplate(b) {
  const fav = state.favorites.has(b.id), qty = state.cart.get(b.id) || 0;
  const image = safeImage(b.image);
  const imageStyle = image ? ` style="background-image:url('${image}')"` : '';
  return `<article class="product-card${b.featured ? ' is-featured' : ''}" data-product-id="${escapeHtml(b.id)}">
    <div class="product-image${image ? '' : ' no-image'}"${imageStyle} role="img" aria-label="Букет ${escapeHtml(b.name)}">
      ${b.featured ? '<span class="featured-badge">Выбор TATI</span>' : ''}
      <button class="heart${fav?' is-active':''}" type="button" data-action="favorite" data-id="${escapeHtml(b.id)}" aria-pressed="${fav}">${fav?'♥':'♡'}</button>
    </div>
    <h3>${escapeHtml(b.name)}</h3><p>${escapeHtml(b.description || 'Сезонный букет, собранный вручную.')}</p>
    <div class="product-row"><span class="price">от ${money(b.price)}</span><button class="add${qty?' is-added':''}" type="button" data-action="cart" data-id="${escapeHtml(b.id)}">${qty ? `В корзине · ${qty}` : 'В корзину'}</button></div>
  </article>`;
}
function renderProducts(message = '') {
  renderCategories();
  if (message && !bouquets.length) {
    el.products.innerHTML = `<div class="catalog-status"><h3>Каталог обновляется</h3><p>${escapeHtml(message)}</p></div>`;
    return;
  }
  const items = bouquets.filter(b => state.filter === 'all' || b.category === state.filter);
  el.products.innerHTML = items.length ? items.map(productTemplate).join('') : '<div class="catalog-empty"><p>В этой категории пока нет букетов.</p></div>';
}
function renderCart() {
  const items = [...state.cart].map(([id, quantity]) => ({ ...getBouquet(id), quantity })).filter(i => i.id);
  el.cartItems.innerHTML = items.map(b => `<article class="cart-item">
    <img src="${safeImage(b.image) || 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23f2e7e1%22/%3E%3C/svg%3E'}" alt="${escapeHtml(b.name)}"><div><h3>${b.name}</h3><p>${b.description}</p><strong>${money(b.price * b.quantity)}</strong>
    <div class="qty"><button data-qty="-1" data-id="${b.id}" aria-label="Уменьшить">−</button><span>${b.quantity}</span><button data-qty="1" data-id="${b.id}" aria-label="Увеличить">+</button></div></div>
    <button class="cart-remove" data-remove="${b.id}" aria-label="Удалить ${b.name}">×</button></article>`).join('');
  const empty = items.length === 0;
  el.cartEmpty.hidden = !empty; el.cartFooter.hidden = empty;
  el.cartTotal.textContent = money(cartTotal()); el.bagCount.textContent = String(cartCount());
  if (el.checkoutTotal) el.checkoutTotal.textContent = money(cartTotal());
  if (el.checkoutButtonTotal) el.checkoutButtonTotal.textContent = money(cartTotal());
}
function toast(message) {
  clearTimeout(toastTimer); el.toast.textContent = message; el.toast.classList.add('show');
  toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2200);
}
function setCart(id, nextQty) {
  if (!getBouquet(id)) return;
  if (nextQty <= 0) state.cart.delete(id); else state.cart.set(id, Math.min(20, nextQty));
  saveState(); renderProducts(); renderCart();
}
function openCart() {
  renderCart(); el.cartBackdrop.hidden = false; requestAnimationFrame(() => el.cartBackdrop.classList.add('show'));
  el.cartDrawer.classList.add('open'); el.cartDrawer.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}
function closeCart() {
  el.cartDrawer.classList.remove('open'); el.cartDrawer.setAttribute('aria-hidden','true'); el.cartBackdrop.classList.remove('show');
  setTimeout(() => { el.cartBackdrop.hidden = true; if (!el.checkoutModal.classList.contains('open')) document.body.classList.remove('modal-open'); }, 320);
}
function openCheckout() {
  if (!state.cart.size) return toast('Корзина пока пустая');
  closeCart(); renderCart(); el.checkoutStatus.textContent = ''; el.checkoutBackdrop.hidden = false;
  requestAnimationFrame(() => el.checkoutBackdrop.classList.add('show'));
  el.checkoutModal.classList.add('open'); el.checkoutModal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
  setTimeout(() => el.checkoutForm.elements.name?.focus(), 350);
}
function closeCheckout() {
  el.checkoutModal.classList.remove('open'); el.checkoutModal.setAttribute('aria-hidden','true'); el.checkoutBackdrop.classList.remove('show');
  setTimeout(() => { el.checkoutBackdrop.hidden = true; document.body.classList.remove('modal-open'); }, 320);
}

el.categories?.addEventListener('click', e => {
  const button = e.target.closest('[data-filter]'); if (!button) return;
  state.filter = button.dataset.filter; el.categories.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === button)); renderProducts();
});
el.products?.addEventListener('click', e => {
  const button = e.target.closest('button[data-action]'); if (!button) return;
  const { id, action } = button.dataset;
  if (action === 'favorite') { state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id); saveState(); renderProducts(); toast(state.favorites.has(id) ? 'Добавлено в избранное' : 'Убрано из избранного'); }
  if (action === 'cart') { setCart(id, (state.cart.get(id) || 0) + 1); toast('Букет добавлен в корзину'); }
});
el.cartItems?.addEventListener('click', e => {
  const remove = e.target.closest('[data-remove]'); if (remove) return setCart(remove.dataset.remove, 0);
  const qty = e.target.closest('[data-qty]'); if (qty) setCart(qty.dataset.id, (state.cart.get(qty.dataset.id) || 0) + Number(qty.dataset.qty));
});
el.openCart?.addEventListener('click', openCart); el.closeCart?.addEventListener('click', closeCart); el.cartBackdrop?.addEventListener('click', closeCart);
el.checkoutBtn?.addEventListener('click', openCheckout); el.closeCheckout?.addEventListener('click', closeCheckout); el.checkoutBackdrop?.addEventListener('click', closeCheckout);

el.menuButton?.addEventListener('click', () => { const open = el.nav.classList.toggle('open'); el.menuButton.setAttribute('aria-expanded', String(open)); });
el.nav?.addEventListener('click', e => { if (e.target.matches('a')) { el.nav.classList.remove('open'); el.menuButton?.setAttribute('aria-expanded','false'); } });

document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeCart(); closeCheckout(); } });

el.checkoutForm?.addEventListener('submit', async e => {
  e.preventDefault();
  const submit = el.checkoutForm.querySelector('[type="submit"]');
  const data = Object.fromEntries(new FormData(el.checkoutForm));
  submit.disabled = true; submit.classList.add('loading'); el.checkoutStatus.textContent = 'Создаём заказ и безопасную ссылку на оплату…';
  try {
    const response = await fetch('/api/checkout', { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify({ cart:cartPayload(), customer:data }) });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.error || 'Не удалось оформить заказ');
    localStorage.setItem('tati-last-order', result.orderId);
    window.location.href = result.paymentUrl;
  } catch (error) {
    el.checkoutStatus.textContent = error.message; submit.disabled = false; submit.classList.remove('loading');
  }
});

el.contactForm?.addEventListener('submit', async e => {
  e.preventDefault(); const status = el.contactForm.querySelector('.form-status'); const submit = el.contactForm.querySelector('button');
  submit.disabled = true; status.textContent = 'Отправляем…';
  try {
    const data = Object.fromEntries(new FormData(el.contactForm));
    const response = await fetch('/api/contact', { method:'POST', headers:{'content-type':'application/json'}, body:JSON.stringify(data) });
    const result = await response.json(); if (!response.ok || !result.ok) throw new Error(result.error || 'Ошибка отправки');
    status.textContent = 'Спасибо! Заявка отправлена 🌿'; el.contactForm.reset();
  } catch (error) { status.textContent = error.message; }
  finally { submit.disabled = false; }
});

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold:.12 }) : null;
document.querySelectorAll('.reveal').forEach(node => observer ? observer.observe(node) : node.classList.add('visible'));

function handlePaymentReturn() {
  const params = new URLSearchParams(location.search); const status = params.get('payment'); const order = params.get('order'); if (!status) return;
  if (status === 'success') { state.cart.clear(); saveState(); renderProducts(); renderCart(); toast(`Оплата прошла. Спасибо! ${order || ''}`); }
  if (status === 'failure') toast('Оплата не прошла. Попробуйте ещё раз.');
  if (status === 'cancel') toast('Оплата отменена — корзина сохранена.');
  history.replaceState({}, '', location.pathname + location.hash);
}

async function loadCatalog() {
  renderProducts('Загружаем актуальные букеты из Google Sheets…');
  try {
    const response = await fetch(`/api/products?refresh=1&t=${Date.now()}`, { cache: 'no-store' });
    const result = await response.json();
    if (!response.ok || !result.ok || !Array.isArray(result.products)) throw new Error(result.error || 'Каталог недоступен');

    // Не показываем старый резервный каталог как будто это данные Google Sheets.
    if (String(result.source || '').startsWith('fallback')) {
      throw new Error('Сервер пока не смог прочитать опубликованный CSV Google Sheets. Проверьте, что таблица опубликована в интернете в формате CSV, и обновите страницу.');
    }

    bouquets = result.products
      .filter(item => item && item.id && item.name && Number(item.price) > 0)
      .sort((a, b) => Number(b.featured || 0) - Number(a.featured || 0) || Number(a.sort || 9999) - Number(b.sort || 9999));

    const validIds = new Set(bouquets.map(item => item.id));
    [...state.cart.keys()].forEach(id => { if (!validIds.has(id)) state.cart.delete(id); });
    [...state.favorites].forEach(id => { if (!validIds.has(id)) state.favorites.delete(id); });
    saveState();
    renderProducts();
    renderCart();
  } catch (error) {
    console.warn('Не удалось загрузить Google Sheets:', error);
    bouquets = [];
    state.cart.clear();
    saveState();
    renderProducts(error.message || 'Не удалось загрузить каталог.');
    renderCart();
  }
  handlePaymentReturn();
}

loadCatalog();
