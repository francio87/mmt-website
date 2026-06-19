# AGENTS.md

## Contesto

Sito statico `marmittedeigiganti.com`, dedicato alle Marmitte dei Giganti di San Lazzaro, Fossombrone.

Stack: HTML, CSS e JavaScript vanilla. Nessun framework e nessun build step.

## Struttura essenziale

- `index.html`: pagina principale.
- `styles.css`: stile globale, responsive layout, animazioni e componenti UI.
- `script.js`: interazioni client-side.
- `cookie-policy.html`: cookie policy.
- `assets/`: immagini, favicon e asset pubblici necessari al sito.
- `robots.txt`, `sitemap.xml`, `llms.txt`, `humans.txt`, `site.webmanifest`: file SEO/PWA/metadata.
- `.htaccess`: configurazione Apache, se usata in produzione.
- `audit/`: output generato dai test visuali, ignorato da Git.

## Regole operative

- Mantenere il sito statico, leggero e senza dipendenze salvo richiesta esplicita.
- Preferire modifiche piccole, leggibili e reversibili.
- Prima di modificare una sezione, leggere il file o la parte rilevante.
- Non riscrivere interi file quando basta una modifica mirata.
- Usare HTML semantico e preservare accessibilità, SEO e performance.
- Preservare testi, alt text, crediti fotografici e metadati salvo richiesta esplicita.
- Non modificare o rimuovere immagini in `assets/` senza conferma.
- Non inserire segreti o nuove API key in chiaro.
- Tenere aggiornato questo file quando cambiano struttura, workflow, direttive di test o componenti importanti.

## Stile e contenuti

- Approccio mobile first.
- Tono italiano, descrittivo, naturalistico, sobrio: evitare claim generici o troppo pubblicitari.
- Palette calda/naturale: sabbia, verde, acqua, terra.
- Tipografia: `Manrope` per testo, `Cormorant Garamond` per titoli.
- Riutilizzare variabili CSS esistenti (`--color-*`, `--radius-*`, `--shadow-*`).
- Conservare struttura heading coerente: un solo `h1`, sezioni principali con `h2`.
- Aggiornare metadata, JSON-LD o sitemap solo se cambiano URL, contenuti principali o informazioni del luogo.

## JavaScript

`script.js` deve restare vanilla JS.

Quando si aggiungono interazioni:

- usare attributi `data-*` per agganciare comportamenti;
- controllare sempre l'esistenza degli elementi prima di usarli;
- mantenere listener passivi dove utile per lo scroll;
- evitare librerie esterne;
- preservare gestione tastiera/focus per menu e lightbox.

## Accessibilità

- Mantenere `aria-label`, `aria-expanded`, `aria-hidden` e focus management dove necessari.
- Ogni bottone deve avere testo visibile o label accessibile.
- Immagini informative con `alt` descrittivo; immagini decorative con `alt=""`.
- Non rompere lo skip link verso `#main`.
- Rispettare `prefers-reduced-motion`.

## Test obbligatori UI/UX

Ogni modifica che impatta layout, stile, contenuti visibili o interazioni deve essere verificata con Playwright su mobile, tablet e desktop.

Usare sempre Playwright tramite:

```bash
npx --yes playwright
```

Server locale consigliato:

```bash
python3 -m http.server 8000
```

Viewport minime da testare:

- mobile: `390x844`;
- tablet: `768x1024`;
- desktop: `1440x900`.

Controllare:

- assenza di overflow orizzontale;
- elementi non tagliati;
- tap target adeguati;
- leggibilità e contrasto;
- funzionamento touch/tastiera;
- menu mobile;
- scroll/header;
- pulsante torna in cima;
- lightbox;
- mappa o fallback mappa.

Se Playwright evidenzia problemi di UX, layout, accessibilità o rendering nella parte modificata, correggerli automaticamente prima di concludere, salvo decisioni ambigue o di prodotto da confermare con l'utente.
