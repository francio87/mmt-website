import { translations } from './translations.js';

const it = {
  nav: [['luogo', 'Il luogo'], ['geologia', 'Geologia'], ['visita', 'La visita'], ['galleria', 'Foto'], ['mappa', 'Come arrivare'], ['territorio', 'Nei dintorni'], ['faq', 'Domande frequenti'], ['social', 'Seguici']],
  hero: {
    eyebrow: 'San Lazzaro · Fossombrone · Marche',
    title: 'Marmitte dei Giganti',
    lead: 'A San Lazzaro, vicino a Fossombrone, il fiume Metauro ha scavato nella roccia calcarea grandi cavità tondeggianti: sono le Marmitte dei Giganti. Dal vicino Ponte dei Saltelli si guarda dall’alto la Forra di San Lazzaro, tra acqua, pareti chiare e vegetazione.',
    primary: 'Scopri il luogo', secondary: 'Guarda le immagini', credit: 'Foto: Davide Tonelli'
  },
  intro: {
    kicker: 'Dove si trovano', title: 'La Forra di San Lazzaro: il canyon del Metauro a Fossombrone',
    paragraphs: ['Le Marmitte dei Giganti sono a San Lazzaro, frazione di Fossombrone, in provincia di Pesaro e Urbino. Qui il Metauro entra nella Forra di San Lazzaro, una gola calcarea lunga circa 500 metri. In alcuni tratti le pareti raggiungono i 30 metri d’altezza e le rive arrivano a distare appena un metro e mezzo.', 'È un luogo raccolto, fatto di roccia chiara, acqua e vegetazione di sponda. Le cavità levigate si osservano dall’alto, nei pressi del Ponte dei Saltelli, e dove l’accesso è consentito anche dai sentieri che scendono verso il fiume.'],
    caption: 'Dal Ponte dei Saltelli la forra si apre tra pareti calcaree, vegetazione e acqua verde del Metauro.', alt: 'Vista dal Ponte dei Saltelli verso la valle e il fiume Metauro'
  },
  story: {
    kicker: 'Roccia, acqua, tempo', title: 'Acqua, roccia e silenzio tra pareti scolpite',
    paragraphs: ['Qui il paesaggio non si rivela tutto insieme. Prima si percepisce il rumore dell’acqua, poi il taglio verticale della gola, infine le superfici arrotondate che danno il nome al luogo. Le marmitte non sono semplici buche nella roccia: sono la traccia visibile di una corrente che ha lavorato sempre negli stessi punti.', 'Nei periodi di maggiore energia il fiume trasporta ghiaia e ciottoli. Quando questi materiali restano intrappolati in piccoli vortici, ruotano sul fondo e sulle pareti come abrasivi naturali. Così una concavità appena accennata può allargarsi, approfondirsi e diventare una cavità stabile.'],
    facts: ['La forra di San Lazzaro si sviluppa per circa 500 metri.', 'Il substrato è formato da calcari compatti della Maiolica.', 'Le cavità maggiori raggiungono dimensioni dell’ordine di alcuni metri.'], alt: 'Veduta delle Marmitte dei Giganti dal lato valle con canoa sul fiume Metauro'
  },
  geology: {
    kicker: 'Geologia', title: 'La forza dell’acqua, il tempo della roccia', description: 'Le Marmitte dei Giganti sono il risultato di un lavoro lento e continuo. In questo tratto stretto della gola, l’acqua del Metauro e i sedimenti trasportati dalla corrente hanno scavato, levigato e arrotondato il calcare.',
    cards: [
      ['Il calcare che conserva le forme', 'Nel settore di San Lazzaro il Metauro attraversa calcari della Formazione della Maiolica. Sono rocce dure, compatte, spesso con selce, adatte a conservare nel tempo incisioni e superfici levigate.'],
      ['Quando i ciottoli scavano la roccia', 'Quando la portata cresce, l’acqua accelera e genera moti circolari. I ciottoli trascinati dalla corrente restano talvolta in rotazione e consumano il calcare per abrasione.'],
      ['Il vecchio cammino del Metauro', 'Le ricostruzioni geologiche indicano la presenza di un antico solco fluviale oggi nascosto dai depositi alluvionali. È una traccia del modo in cui il Metauro ha cambiato assetto nel tempo.'],
      ['Le forme lasciate dal fiume nel tempo', 'Alcune concavità poste più in alto sulle pareti non sono più raggiunte dalla corrente ordinaria. Raccontano fasi precedenti dell’incisione e aiutano a leggere l’evoluzione della gola.']
    ]
  },
  visit: {
    kicker: 'Come visitarlo', title: 'Prima di arrivare: cosa sapere',
    cards: [
      { label: 'Affaccio principale', title: 'Ponte dei Saltelli', text: 'Il Ponte dei Saltelli attraversa la Forra di San Lazzaro ed è il punto più comodo per osservarla dall’alto. Il suo nome richiama i piccoli salti d’acqua che un tempo caratterizzavano questo tratto del Metauro.', facts: ['Origine antica, non documentata con certezza', 'Ricostruito nel dopoguerra dopo la distruzione del 1944', 'Affaccio sulle pareti calcaree e sulle cavità'] },
      { label: 'Visita responsabile', title: 'Un ambiente naturale fragile', text: 'La forra è un ambiente fluviale: l’acqua può cambiare livello e le rocce bagnate sono scivolose. Per godersi il luogo in sicurezza servono attenzione e buon senso.', facts: ['Segui la segnaletica presente sul posto', 'Usa scarpe adatte se scendi verso il fiume', 'Evita il letto del fiume in caso di piena o maltempo'], wide: true },
      { label: 'Località', title: 'San Lazzaro', text: 'Il sito è poco fuori Fossombrone, vicino all’antica direttrice della Flaminia. Può essere una sosta durante un itinerario nella valle del Metauro, verso la Cesana o la Gola del Furlo.', facts: ['Località: San Lazzaro', 'Comune: Fossombrone', 'Provincia: Pesaro e Urbino'] }
    ]
  },
  gallery: {
    kicker: 'Immagini', title: 'Guarda la forra da vicino', description: 'Uno sguardo ravvicinato alla forra, al Ponte dei Saltelli e al Metauro: roccia, acqua e pareti calcaree raccontano l’atmosfera di questo tratto di fiume.',
    items: [
      { title: 'Pareti della forra', credit: 'Foto: Davide Tonelli', alt: 'Vista verticale della forra delle Marmitte dei Giganti dal lato valle', className: 'tall' },
      { title: 'Rocce modellate dall’acqua', credit: 'Foto: Davide Tonelli', alt: "Ponte nell'area delle Marmitte dei Giganti con canoa sul fiume" },
      { title: 'Il Metauro', credit: 'Foto: Davide Tonelli', alt: 'Vista dal Ponte dei Saltelli verso la valle e il fiume Metauro' },
      { title: 'Verso il Ponte dei Saltelli', credit: 'Foto: archivio marmittedeigiganti.com', alt: 'Panorama dal Ponte dei Saltelli verso il lato del Furlo', className: 'wide' }
    ]
  },
  map: {
    kicker: 'Dove siamo', title: 'Come arrivare alle Marmitte dei Giganti', text: 'Il segnaposto indica l’area della forra a San Lazzaro. Apri la mappa nel navigatore per raggiungere il punto e capire dove si trova rispetto al Ponte dei Saltelli e alle strade vicine.', linkLabel: 'Apri il segnaposto delle Marmitte dei Giganti in Google Maps', alt: 'Mappa topografica indicativa dell’area delle Marmitte dei Giganti a San Lazzaro'
  },
  territory: { kicker: 'Territorio', title: 'Un paesaggio tra fiume, storia e collina', text: 'Le Marmitte dei Giganti sono una delle tappe più particolari della valle del Metauro. Da qui è facile continuare verso Fossombrone, i borghi lungo il fiume o la Gola del Furlo. È una buona scelta per chi vuole trascorrere qualche ora nella natura delle Marche, tra una passeggiata breve, un po’ di geologia e il paesaggio dell’entroterra.' },
  faq: {
    kicker: 'Domande frequenti', title: 'Informazioni rapide per la visita',
    items: [
      ['Dove si trovano le Marmitte dei Giganti?', 'Le Marmitte dei Giganti si trovano a San Lazzaro, frazione di Fossombrone, in provincia di Pesaro e Urbino. La forra si trova lungo il fiume Metauro, nelle Marche.'],
      ['Come si arriva alla Forra di San Lazzaro?', 'Il punto di riferimento più semplice è il Ponte dei Saltelli, vicino a San Lazzaro di Fossombrone. Nella mappa del sito trovi il segnaposto da aprire direttamente nel navigatore.'],
      ['Si vedono le Marmitte dal Ponte dei Saltelli?', 'Sì. Il Ponte dei Saltelli, conosciuto anche come Ponte di Diocleziano, è l’affaccio principale sulla Forra di San Lazzaro e sulle pareti calcaree scavate dal Metauro.'],
      ['Le Marmitte dei Giganti sono vicine alla Gola del Furlo?', 'Sì. Le Marmitte dei Giganti sono a Fossombrone, nella valle del Metauro, e si inseriscono bene in una giornata che comprende anche la Gola del Furlo o altri luoghi dell’entroterra marchigiano.'],
      ['Che tipo di escursione è consigliata?', 'La visita è breve e panoramica: è ideale per chi ama natura, fotografia e geologia. Se scegli di scendere verso il fiume, indossa scarpe adatte e valuta sempre le condizioni dell’acqua e delle rocce.'],
      ['Che cosa sono le Marmitte dei Giganti?', 'Le marmitte sono cavità circolari scavate nella roccia dall’azione vorticosa dell’acqua e dei ciottoli trasportati dal fiume. Nella Forra di San Lazzaro il Metauro ha modellato queste forme nelle pareti e nel letto calcareo della gola.'],
      ['Quanto è grande la Forra di San Lazzaro?', 'La forra si sviluppa per circa 500 metri. Le pareti calcaree raggiungono all’incirca 30 metri di altezza e, nel punto più stretto, la gola misura circa un metro e mezzo.'],
      ['Si possono visitare le Marmitte dei Giganti in canoa o kayak?', 'La forra può essere esplorata anche con escursioni in canoa o kayak organizzate da operatori e associazioni locali. Disponibilità, condizioni del fiume, requisiti e attrezzatura vanno verificati direttamente con l’organizzatore prima della visita.']
    ]
  },
  social: { kicker: 'Social', title: 'Racconta le Marmitte con i tuoi occhi', before: 'Seguici su Instagram e condividi le tue fotografie taggando', middle: 'oppure usando', after: ': potresti vedere il tuo post ricondiviso sui profili ufficiali.' },
  footer: { address: 'Località San Lazzaro · Fossombrone (PU) · 61034', top: 'Torna su' },
  policy: {
    kicker: 'Cookie e tecnologie simili', updated: 'Ultimo aggiornamento: 12 luglio 2026.', intro: 'Questa informativa descrive le tecnologie effettivamente usate da marmittedeigiganti.com per il funzionamento del sito e per le statistiche di utilizzo.', home: 'Torna alla home', reset: 'Modifica preferenze cookie',
    sections: [
      { title: 'Tecnologie effettivamente usate', paragraphs: ['Il sito è statico e non usa CMS, moduli di contatto, pubblicità comportamentale, pixel social, mappe incorporate o altri servizi di terze parti caricati automaticamente.', 'L’anteprima della mappa è un file locale incluso nel sito: non effettua richieste a Google Maps o a OpenStreetMap durante la visita.'] },
      { title: 'Memoria tecnica del consenso', paragraphs: ['Il sito salva nel localStorage del browser la preferenza relativa ai cookie analitici, la data di aggiornamento e la versione dell’informativa. Questa memoria tecnica non viene inviata automaticamente al server e non richiede consenso preventivo.'], details: [['Nome', 'mmt-cookie-consent'], ['Finalità', 'Ricordare la scelta di accettare o rifiutare Google Analytics'], ['Durata', 'Fino alla cancellazione dei dati del sito dal browser']] },
      { title: 'Google Analytics 4', paragraphs: ['Google Analytics 4 è usato esclusivamente per statistiche aggregate sulle visite. Il relativo script non viene caricato finché non selezioni “Accetta” nel banner; se rifiuti o non esprimi una scelta, Google Analytics non viene contattato.', 'Dopo il consenso, Google può trattare dati tecnici e di utilizzo, quali pagine visitate, eventi di navigazione, informazioni su browser e dispositivo e provenienza della visita secondo la propria informativa. Google Analytics può usare cookie propri, inclusi _ga e _ga_<identificativo>, per riconoscere visite e sessioni.', 'La base giuridica è il consenso, revocabile in qualsiasi momento senza pregiudicare il trattamento precedente. Google Analytics 4 non registra né conserva gli indirizzi IP; per ulteriori informazioni consulta l’informativa di Google.'], details: [['Fornitore', 'Google Ireland Limited / Google LLC'], ['Finalità', 'Misurazione aggregata dell’uso del sito'], ['Base giuridica', 'Consenso'], ['Durata indicativa', 'Fino a 2 anni, secondo la configurazione Google Analytics']] },
      { title: 'Come modificare la scelta', paragraphs: ['Puoi accettare o rifiutare Analytics dal banner alla prima visita. Per cambiare una scelta già espressa, usa il pulsante qui sotto: Analytics viene subito disabilitato, i cookie Analytics presenti vengono cancellati e il banner viene mostrato di nuovo. Se scegli “Rifiuta”, la pagina viene ricaricata senza caricare Analytics. Puoi anche cancellare i dati del sito dalle impostazioni del browser.'] },
      { title: 'Link esterni', paragraphs: ['I collegamenti a Google Maps e Instagram sono semplici link. Il rispettivo fornitore riceve dati come indirizzo IP e informazioni sul browser solo dopo che scegli di aprire il link; da quel momento si applicano le informative del servizio esterno.'] },
      { title: 'Diritti e reclami', paragraphs: ['Nei casi previsti dal Regolamento (UE) 2016/679, puoi chiedere al titolare informazioni sul trattamento e l’esercizio dei diritti applicabili. Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali.'] },
      { title: 'Aggiornamenti', paragraphs: ['Questa informativa sarà aggiornata se cambieranno tecnologie, finalità o fornitori effettivamente usati dal sito.'] }
    ]
  }
};

const enPolicy = {
  kicker: 'Cookies and similar technologies', updated: 'Last updated: 12 July 2026.', intro: 'This notice describes the technologies actually used by marmittedeigiganti.com for website operation and usage statistics.', home: 'Back to home', reset: 'Change cookie preferences',
  sections: [
    { title: 'Technologies actually used', paragraphs: ['The site is static and does not use a CMS, contact forms, behavioural advertising, social pixels, embedded maps or other third-party services loaded automatically.', 'The map preview is a local file included in the website: it makes no requests to Google Maps or OpenStreetMap during a visit.'] },
    { title: 'Technical consent storage', paragraphs: ['The site stores the preference for analytics cookies, the update date and the notice version in the browser’s localStorage. This technical storage is not sent automatically to the server and does not require prior consent.'], details: [['Name', 'mmt-cookie-consent'], ['Purpose', 'Remember the choice to accept or reject Google Analytics'], ['Duration', 'Until site data is cleared from the browser']] },
    { title: 'Google Analytics 4', paragraphs: ['Google Analytics 4 is used solely for aggregate visit statistics. Its script is not loaded until you select “Accept” in the banner; if you reject or do not make a choice, Google Analytics is not contacted.', 'After consent, Google may process technical and usage data such as visited pages, navigation events, browser and device information and visit source according to its own notice. Google Analytics may use its own cookies, including _ga and _ga_<identifier>, to recognise visits and sessions.', 'The legal basis is consent, which you can withdraw at any time without affecting prior processing. Google Analytics 4 does not log or store IP addresses; see Google’s privacy notice for further information.'], details: [['Provider', 'Google Ireland Limited / Google LLC'], ['Purpose', 'Aggregate measurement of website use'], ['Legal basis', 'Consent'], ['Indicative duration', 'Up to 2 years, according to the Google Analytics configuration']] },
    { title: 'How to change your choice', paragraphs: ['You can accept or reject Analytics in the banner on your first visit. To change a choice you have already made, use the button below: Analytics is immediately disabled, existing Analytics cookies are deleted and the banner is shown again. If you choose “Reject”, the page reloads without loading Analytics. You can also clear site data in your browser settings.'] },
    { title: 'External links', paragraphs: ['Google Maps and Instagram links are simple links. The relevant provider receives data such as IP address and browser information only after you choose to open a link; that external service’s policies then apply.'] },
    { title: 'Rights and complaints', paragraphs: ['Where applicable under Regulation (EU) 2016/679, you can ask the controller for information on processing and exercise the relevant rights. You also have the right to lodge a complaint with the Italian Data Protection Authority.'] },
    { title: 'Updates', paragraphs: ['This notice will be updated if the technologies, purposes or providers actually used by the site change.'] }
  ]
};

function translate(value) {
  if (typeof value === 'string') return translations.en[value] || value;
  if (Array.isArray(value)) return value.map(translate);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, translate(item)]));
  return value;
}

export function getContent(lang) {
  if (lang !== 'en') return it;
  return { ...translate(it), policy: enPolicy };
}
