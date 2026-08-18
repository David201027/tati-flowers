# TATI Flowers — live Google Sheets catalog

Эта версия уже подключена к текущему Google Apps Script `/exec`.

## Запуск

Нужен Node.js 20+.

```bash
npm install
npm start
```

Открой `http://localhost:3000`.

## Как мама управляет товарами

В Google Sheets первая строка:

`id | name | price | category | description | photo | is-active | order | featured`

- одна строка = один товар;
- `price` — цена в ₪;
- `photo` — публичный URL картинки;
- `is-active`: `yes` показывает товар, `no` скрывает;
- `order`: порядок карточек;
- `featured`: `yes` добавляет метку «Выбор TATI» и поднимает товар выше.

Сайт получает каталог через сервер `/api/products`. При оформлении заказа сервер повторно получает актуальный каталог, поэтому цена из браузера не считается доверенной.

Изменения в таблице могут появляться с небольшой задержкой из-за кэша Apps Script и сервера. В этой сборке серверный кэш выставлен на 30 секунд.

## Оплата и Telegram

Пока `DEMO_PAYMENT=true`, можно проверить полный путь заказа без списания карты. Для реальных платежей заполните PayPlus-переменные и переключите `DEMO_PAYMENT=false`.

Для уведомлений о заказах заполните `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в `.env`.
