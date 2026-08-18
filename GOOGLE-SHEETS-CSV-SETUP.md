# TATI Flowers — Google Sheets CSV catalog

The site now reads the product catalog from a Google Sheet published as CSV. Apps Script is not required.

## Sheet columns

Keep these headers in row 1:

`id | name | price | category | description | photo | is-active | order | featured`

Each bouquet is one row. Use `yes` / `no` for `is-active` and `featured`.

## Publishing

In Google Sheets: File → Share → Publish to web → select the product sheet → CSV → Publish.

The published URL is stored in `.env` as `GOOGLE_CATALOG_URL`.

## Updating products

Edit the Google Sheet, then refresh the site. The server cache is 30 seconds by default (`CATALOG_CACHE_SECONDS=30`). Checkout re-fetches the catalog so prices are verified server-side.
