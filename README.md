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

Ogni push sul branch `master` esegue il build e pubblica esclusivamente `dist/` sull'hosting SFTP tramite GitHub Actions.
