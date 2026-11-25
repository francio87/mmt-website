# Marmitte dei Giganti

Sito statico informativo dedicato alle Marmitte dei Giganti di San Lazzaro, Fossombrone.

## Sviluppo

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

Il sito generato si trova in `dist/`.

## Deploy

Il sito è servito da Cloudflare Workers (static assets, piano gratuito), configurato in `wrangler.jsonc`.
Il workflow `.github/workflows/cloudflare.yml` esegue build e test Playwright a ogni push:

- `master`: deploy in produzione;
- altri branch: versione di anteprima su `https://<branch>-mmt-website.francio87.workers.dev`, linkata nella PR.

Richiede il secret `CLOUDFLARE_API_TOKEN` (permesso Account → Workers Scripts → Edit).
