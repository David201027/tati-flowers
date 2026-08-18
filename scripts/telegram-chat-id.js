import 'dotenv/config';

const token = String(process.env.TELEGRAM_BOT_TOKEN || '').trim();
if (!token) {
  console.error('Добавь TELEGRAM_BOT_TOKEN в .env, затем снова выполни npm run telegram:chat-id');
  process.exit(1);
}

const response = await fetch(`https://api.telegram.org/bot${token}/getUpdates`, { signal: AbortSignal.timeout(10000) });
const body = await response.json();
if (!response.ok || !body.ok) {
  console.error(body.description || `Telegram HTTP ${response.status}`);
  process.exit(1);
}
const chats = new Map();
for (const update of body.result || []) {
  const message = update.message || update.edited_message || update.channel_post || update.my_chat_member;
  const chat = message?.chat;
  if (chat?.id) chats.set(String(chat.id), chat);
}
if (!chats.size) {
  console.log('Пока нет сообщений. Мама должна открыть бота в Telegram и нажать START или отправить /start, потом повтори команду.');
  process.exit(0);
}
console.log('Найденные чаты:');
for (const [id, chat] of chats) console.log(`TELEGRAM_CHAT_ID=${id}   ${chat.first_name || chat.title || chat.username || ''}`);
