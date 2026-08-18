import 'dotenv/config';

const token = String(process.env.TELEGRAM_BOT_TOKEN || '').trim();
const chatId = String(process.env.TELEGRAM_CHAT_ID || '').trim();
if (!token || !chatId) {
  console.error('Нужны TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env');
  process.exit(1);
}
const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
  method: 'POST', headers: { 'content-type': 'application/json' }, signal: AbortSignal.timeout(10000),
  body: JSON.stringify({ chat_id: chatId, text: '🌸 TATI Flowers\nTelegram подключён. Тестовое сообщение с сайта.' })
});
const body = await response.json().catch(() => ({}));
if (!response.ok || body.ok === false) {
  console.error(body.description || `Telegram HTTP ${response.status}`);
  process.exit(1);
}
console.log('Готово: тестовое сообщение отправлено в Telegram.');
