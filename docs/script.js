const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
const backToTop = document.querySelector('[data-back-to-top]');
const langToggle = document.querySelector('[data-lang-toggle]');
const langToggleLabel = document.querySelector('[data-lang-toggle-label]');
const supportedLanguages = ['it', 'en'];

function getCookie(name) {
  return document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`))
    ?.split('=')[1];
}

function deleteCookie(name) {
  document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
}

const pathSegments = location.pathname.split('/').filter(Boolean);
const pathLanguage = pathSegments.find((segment) => supportedLanguages.includes(segment));
const savedLanguage = localStorage.getItem('mmt-language') || decodeURIComponent(getCookie('mmt_language') || '');
const browserLanguage = (navigator.language || navigator.userLanguage || 'it').slice(0, 2).toLowerCase();
let currentLanguage = supportedLanguages.includes(pathLanguage)
  ? pathLanguage
  : (supportedLanguages.includes(savedLanguage) ? savedLanguage : (browserLanguage === 'en' ? 'en' : 'it'));

const translations = {
  en: {
    'Marmitte dei Giganti': 'Marmitte dei Giganti',
    'Salta al contenuto': 'Skip to content',
    'Il luogo': 'The place',
    'Geologia': 'Geology',
    'Visitarlo': 'Visit',
    'Galleria': 'Gallery',
    'Mappa': 'Map',
    'Territorio': 'Territory',
    'FAQ': 'FAQ',
    'Social': 'Social',
    'San Lazzaro · Fossombrone · Marche': 'San Lazzaro · Fossombrone · Marche, Italy',
    'A San Lazzaro di Fossombrone, nelle Marche, il Metauro entra in una gola stretta, leviga il calcare e lascia nella roccia cavità profonde, tondeggianti, riconoscibili al primo sguardo.': 'In San Lazzaro di Fossombrone, in the Marche region of Italy, the Metauro enters a narrow gorge, smooths the limestone and leaves deep, rounded cavities in the rock.',
    'Scopri il luogo': 'Discover the place',
    'Guarda le immagini': 'View the images',
    'Foto: Davide Tonelli': 'Photo: Davide Tonelli',
    'Dove si trovano': 'Where they are',
    'La gola nascosta del Metauro': 'The hidden gorge of the Metauro',
    'Le Marmitte dei Giganti si trovano a San Lazzaro, frazione di Fossombrone, lungo un tratto in cui il Metauro abbandona per poco il profilo aperto della valle e scorre fra pareti ravvicinate.': 'The Marmitte dei Giganti are in San Lazzaro, a hamlet of Fossombrone, along a stretch where the Metauro briefly leaves the open valley and flows between close rock walls.',
    'La forra è breve ma intensa: rocce chiare, acqua verde, vegetazione di sponda e cavità levigate si alternano in uno spazio raccolto, visibile dall’alto nella zona del Ponte dei Saltelli e, dove consentito, anche dai percorsi che scendono verso il fiume.': 'The gorge is short but striking: pale rocks, green water, riverbank vegetation and smooth cavities alternate in a compact setting, visible from above near Ponte dei Saltelli and, where allowed, from paths descending towards the river.',
    'Dal Ponte dei Saltelli la forra si apre tra pareti calcaree, vegetazione e acqua verde del Metauro.': 'From Ponte dei Saltelli, the gorge opens between limestone walls, vegetation and the green water of the Metauro.',
    'Roccia, acqua, tempo': 'Rock, water, time',
    'Acqua, roccia e silenzio tra pareti scolpite': 'Water, rock and silence between sculpted walls',
    'Qui il paesaggio non si rivela tutto insieme. Prima si percepisce il rumore dell’acqua, poi il taglio verticale della gola, infine le superfici arrotondate che danno il nome al luogo. Le marmitte non sono semplici buche nella roccia: sono la traccia visibile di una corrente che ha lavorato sempre negli stessi punti.': 'Here the landscape does not reveal itself all at once. First you hear the water, then you notice the vertical cut of the gorge and finally the rounded surfaces that give the place its name. These potholes are not simply holes in the rock: they are the visible trace of a current working repeatedly in the same places.',
    'Nei periodi di maggiore energia il fiume trasporta ghiaia e ciottoli. Quando questi materiali restano intrappolati in piccoli vortici, ruotano sul fondo e sulle pareti come abrasivi naturali. Così una concavità appena accennata può allargarsi, approfondirsi e diventare una cavità stabile.': 'When the river has more energy, it carries gravel and pebbles. When these materials are trapped in small whirlpools, they rotate on the bed and walls like natural abrasives. In this way a slight hollow can widen, deepen and become a stable cavity.',
    'La forra di San Lazzaro si sviluppa per alcune centinaia di metri.': 'The San Lazzaro gorge extends for a few hundred metres.',
    'Il substrato è formato da calcari compatti della Maiolica.': 'The bedrock is made of compact Maiolica limestones.',
    'Le cavità maggiori raggiungono dimensioni dell’ordine di alcuni metri.': 'The largest cavities reach sizes of several metres.',
    'La forza dell’acqua, il tempo della roccia': 'The force of water, the time of rock',
    'Le Marmitte dei Giganti nascono dall’incontro fra una roccia resistente e una corrente capace di concentrarsi in spazi stretti. Il risultato è una successione di forme scavate, lucidate e arrotondate dal movimento dell’acqua e dei sedimenti.': 'The Marmitte dei Giganti are born from the meeting of resistant rock and a current able to concentrate in narrow spaces. The result is a sequence of shapes carved, polished and rounded by the movement of water and sediment.',
    'Il calcare che conserva le forme': 'Limestone that preserves the shapes',
    'Nel settore di San Lazzaro il Metauro attraversa calcari della Formazione della Maiolica. Sono rocce dure, compatte, spesso con selce, adatte a conservare nel tempo incisioni e superfici levigate.': 'In the San Lazzaro area the Metauro crosses limestones of the Maiolica Formation. They are hard, compact rocks, often with flint, well suited to preserving incisions and smoothed surfaces over time.',
    'Quando i ciottoli scavano la roccia': 'When pebbles carve the rock',
    'Quando la portata cresce, l’acqua accelera e genera moti circolari. I ciottoli trascinati dalla corrente restano talvolta in rotazione e consumano il calcare per abrasione.': 'When the flow increases, the water accelerates and creates circular motion. Pebbles carried by the current can remain rotating and wear down the limestone by abrasion.',
    'Il vecchio cammino del Metauro': 'The old path of the Metauro',
    'Le ricostruzioni geologiche indicano la presenza di un antico solco fluviale oggi nascosto dai depositi alluvionali. È una traccia del modo in cui il Metauro ha cambiato assetto nel tempo.': 'Geological reconstructions indicate an ancient river channel now hidden by alluvial deposits. It is a trace of how the Metauro has changed its course over time.',
    'Le forme lasciate dal fiume nel tempo': 'The forms left by the river over time',
    'Alcune concavità poste più in alto sulle pareti non sono più raggiunte dalla corrente ordinaria. Raccontano fasi precedenti dell’incisione e aiutano a leggere l’evoluzione della gola.': 'Some hollows higher on the walls are no longer reached by the ordinary current. They tell of earlier phases of incision and help read the evolution of the gorge.',
    'Come visitarlo': 'How to visit',
    'Prima di arrivare: cosa sapere': 'Before you arrive: what to know',
    'Affaccio principale': 'Main viewpoint',
    'Ponte dei Saltelli': 'Ponte dei Saltelli',
    'Il Ponte dei Saltelli scavalca la Forra di San Lazzaro e permette di leggere dall’alto il disegno del canyon. Il nome è legato ai piccoli salti d’acqua presenti lungo questo tratto del Metauro.': 'Ponte dei Saltelli crosses the San Lazzaro gorge and lets you read the shape of the canyon from above. Its name is linked to the small water drops along this stretch of the Metauro.',
    'Origine antica, non documentata con certezza': 'Ancient origin, not documented with certainty',
    'Ricostruito nel dopoguerra dopo la distruzione del 1944': 'Rebuilt after the war following its destruction in 1944',
    'Affaccio sulle pareti calcaree e sulle cavità': 'View over the limestone walls and cavities',
    'Visita responsabile': 'Responsible visit',
    'Un ambiente naturale fragile': 'A fragile natural environment',
    'La bellezza del luogo non deve far dimenticare che si tratta di un ambiente fluviale. Il livello dell’acqua può cambiare e le rocce bagnate diventano scivolose.': 'The beauty of the place should not make us forget that this is a river environment. Water levels can change and wet rocks become slippery.',
    'Segui la segnaletica presente sul posto': 'Follow the signs on site',
    'Usa scarpe adatte se scendi verso il fiume': 'Wear suitable shoes if you go down towards the river',
    'Evita il letto del fiume in caso di piena o maltempo': 'Avoid the riverbed during floods or bad weather',
    'Località': 'Location',
    'San Lazzaro': 'San Lazzaro',
    'Il sito è a breve distanza dal centro di Fossombrone e dalla vecchia direttrice della Flaminia. È una tappa naturale nel territorio di Pesaro e Urbino, collegata alla valle del Metauro, ai rilievi verso la Cesana e agli itinerari verso la Gola del Furlo.': 'The site is a short distance from the centre of Fossombrone and the old Flaminia route. It is a natural stop in the Pesaro and Urbino area, connected to the Metauro valley, the hills towards Cesana and routes towards the Furlo Gorge.',
    'Località: San Lazzaro': 'Location: San Lazzaro',
    'Comune: Fossombrone': 'Municipality: Fossombrone',
    'Provincia: Pesaro e Urbino': 'Province: Pesaro and Urbino',
    'Immagini': 'Images',
    'Guarda la forra da vicino': 'See the gorge up close',
    'Fotografie della forra, del Ponte dei Saltelli e del paesaggio fluviale del Metauro: dettagli di roccia, acqua e pareti che aiutano a leggere il carattere del luogo.': 'Photographs of the gorge, Ponte dei Saltelli and the river landscape of the Metauro: details of rock, water and walls that help reveal the character of the place.',
    'Pareti della forra': 'Gorge walls',
    'Rocce modellate dall’acqua': 'Rocks shaped by water',
    'Il Metauro': 'The Metauro',
    'Verso il Ponte dei Saltelli': 'Towards Ponte dei Saltelli',
    'Foto: archivio marmittedeigiganti.com': 'Photo: marmittedeigiganti.com archive',
    'Dove siamo': 'Where we are',
    'Come arrivare alle Marmitte dei Giganti': 'How to get to the Marmitte dei Giganti',
    'Il segnaposto indica l’area della forra a San Lazzaro. Aprendo la mappa puoi raggiungere il punto con il navigatore e orientarti rispetto al Ponte dei Saltelli e alla viabilità vicina.': 'The marker indicates the gorge area in San Lazzaro. Open the map to navigate to the point and orient yourself around Ponte dei Saltelli and nearby roads.',
    'Apri il segnaposto in Google Maps': 'Open the marker in Google Maps',
    'Apri la mappa su Google Maps': 'Open the map on Google Maps',
    'Un paesaggio tra fiume, storia e collina': 'A landscape of river, history and hills',
    'Le Marmitte dei Giganti appartengono a un contesto più ampio: la valle del Metauro, il paesaggio di San Lazzaro, la vicinanza alla direttrice storica della Flaminia e il rapporto costante fra Fossombrone e il suo fiume. Sono una meta adatta a chi cerca natura nelle Marche, attività all’aperto, escursioni brevi in provincia di Pesaro e Urbino e luoghi da abbinare alla Gola del Furlo, ai borghi del Metauro e al centro storico di Fossombrone.': 'The Marmitte dei Giganti belong to a wider setting: the Metauro valley, the landscape of San Lazzaro, the nearby historic Flaminia route and the constant relationship between Fossombrone and its river. They are a suitable destination for those looking for nature in the Marche, outdoor activities, short walks in the province of Pesaro and Urbino and places to combine with the Furlo Gorge, the Metauro villages and the historic centre of Fossombrone.',
    'Domande frequenti': 'Frequently asked questions',
    'Informazioni rapide per la visita': 'Quick information for your visit',
    'Dove si trovano le Marmitte dei Giganti?': 'Where are the Marmitte dei Giganti?',
    'Le Marmitte dei Giganti si trovano a San Lazzaro, frazione di Fossombrone, in provincia di Pesaro e Urbino. La forra è lungo il fiume Metauro, nelle Marche.': 'The Marmitte dei Giganti are in San Lazzaro, a hamlet of Fossombrone, in the province of Pesaro and Urbino. The gorge lies along the Metauro river in the Marche region.',
    'Come si arriva alla Forra di San Lazzaro?': 'How do you reach the San Lazzaro Gorge?',
    'Il riferimento più semplice è l’area del Ponte dei Saltelli, vicino a San Lazzaro di Fossombrone. La mappa del sito indica il punto GPS per aprire il navigatore.': 'The easiest reference point is the Ponte dei Saltelli area, near San Lazzaro di Fossombrone. The site map provides the GPS point to open your navigator.',
    'Si vedono le Marmitte dal Ponte dei Saltelli?': 'Can you see the Marmitte from Ponte dei Saltelli?',
    'Sì. Il Ponte dei Saltelli, conosciuto anche come Ponte di Diocleziano, è l’affaccio principale sulla Forra di San Lazzaro e sulle pareti calcaree scavate dal Metauro.': 'Yes. Ponte dei Saltelli, also known as Ponte di Diocleziano, is the main viewpoint over the San Lazzaro Gorge and the limestone walls carved by the Metauro.',
    'Le Marmitte dei Giganti sono vicine alla Gola del Furlo?': 'Are the Marmitte dei Giganti near the Furlo Gorge?',
    'Sì. Le Marmitte dei Giganti sono a Fossombrone, nella valle del Metauro, e possono essere abbinate a un itinerario naturalistico verso la Gola del Furlo e gli altri luoghi dell’entroterra marchigiano.': 'Yes. The Marmitte dei Giganti are in Fossombrone, in the Metauro valley, and can be combined with a nature itinerary towards the Furlo Gorge and other places in the Marche hinterland.',
    'Che tipo di escursione è consigliata?': 'What kind of visit is recommended?',
    'È una visita breve e panoramica, adatta a chi cerca natura, fotografia, geologia e attività all’aperto nelle Marche. Se si scende verso il fiume servono scarpe adatte e attenzione alle condizioni dell’acqua e delle rocce.': 'It is a short, scenic visit, suitable for those interested in nature, photography, geology and outdoor activities in the Marche. If you go down towards the river, wear suitable shoes and pay attention to water and rock conditions.',
    'Racconta le Marmitte con i tuoi occhi': 'Tell the story of the Marmitte through your eyes',
    'Seguici su Instagram e condividi le tue fotografie taggando': 'Follow us on Instagram and share your photos by tagging',
    'oppure usando': 'or using',
    ': potresti vedere il tuo post ricondiviso sui profili ufficiali.': ': your post may be reshared on the official profiles.',
    'Località San Lazzaro · Fossombrone (PU) · 61034': 'San Lazzaro · Fossombrone (PU) · 61034, Italy',
    'Torna su': 'Back to top',
    'Cookie Policy': 'Cookie Policy',
    'Informazioni di servizio': 'Service information',
    'Questa pagina è predisposta per ospitare la Cookie Policy aggiornata del sito Marmitte dei Giganti.': 'This page is prepared to host the updated Cookie Policy for the Marmitte dei Giganti website.',
    'Il nuovo sito statico non integra strumenti di tracciamento, cookie di profilazione, CMS o plugin WordPress. Prima della pubblicazione definitiva, verificare eventuali servizi esterni aggiunti, come analytics, mappe, video incorporati o widget social, e aggiornare questa pagina secondo la normativa applicabile.': 'The new static website does not integrate tracking tools, profiling cookies, a CMS or WordPress plugins. Before final publication, any added external services such as analytics, maps, embedded videos or social widgets should be checked and this page updated according to applicable regulations.',
    'Torna alla home': 'Back to home',
    'Apri menu di navigazione': 'Open navigation menu',
    'Chiudi galleria': 'Close gallery',
    'Immagine precedente': 'Previous image',
    'Immagine successiva': 'Next image',
    'Torna in cima': 'Back to top',
    'Mappa non disponibile: API key mancante.': 'Map unavailable: missing API key.'
  }
};

Object.assign(translations.en, {
  'Ultimo aggiornamento: 20 giugno 2026.': 'Last updated: 20 June 2026.',
  'Questa Cookie Policy spiega quali cookie e tecnologie simili possono essere usati dal sito marmittedeigiganti.com e come puoi gestire le tue preferenze.': 'This Cookie Policy explains which cookies and similar technologies may be used by marmittedeigiganti.com and how you can manage your preferences.',
  'Titolare del sito': 'Website owner',
  'Il sito è dedicato alle Marmitte dei Giganti di San Lazzaro, Fossombrone. Per informazioni o richieste sulla gestione dei dati puoi usare i contatti indicati sul sito o sui profili ufficiali collegati.': 'The website is dedicated to the Marmitte dei Giganti of San Lazzaro, Fossombrone. For information or requests about data handling, you can use the contacts indicated on the site or on the linked official profiles.',
  'Cookie tecnici necessari': 'Necessary technical cookies',
  'Il sito usa preferibilmente memorie locali tecniche del browser, come localStorage, per funzionare correttamente o per ricordare preferenze richieste dall’utente, come la lingua selezionata o la scelta sul consenso ai cookie. Questi strumenti non richiedono consenso preventivo e non vengono inviati automaticamente al server come i cookie HTTP.': 'The website preferably uses technical browser local storage, such as localStorage, to work correctly or remember preferences requested by the user, such as the selected language or cookie consent choice. These tools do not require prior consent and are not automatically sent to the server like HTTP cookies.',
  'Cookie analitici e Google Analytics': 'Analytics cookies and Google Analytics',
  'Il sito può usare Google Analytics 4 per raccogliere statistiche aggregate sull’uso delle pagine, come visite, pagine consultate, dispositivo, browser e area geografica approssimativa.': 'The website may use Google Analytics 4 to collect aggregate statistics on page usage, such as visits, pages viewed, device, browser and approximate geographic area.',
  'Google Analytics sarà caricato solo dopo il tuo consenso esplicito ai cookie analitici. Se rifiuti o non esprimi una scelta, lo script di tracciamento non viene caricato.': 'Google Analytics will be loaded only after your explicit consent to analytics cookies. If you reject or do not make a choice, the tracking script is not loaded.',
  'Google può trattare i dati raccolti secondo le proprie condizioni e informative. Questa pagina deve descrivere in modo aggiornato provider, finalità, categorie di dati trattati, base del consenso e link alle informative Google applicabili.': 'Google may process the collected data according to its own terms and policies. This page must accurately describe the provider, purposes, categories of processed data, consent basis and links to the applicable Google policies.',
  'Gestione del consenso': 'Consent management',
  'Puoi accettare o rifiutare il caricamento dei servizi Google non necessari dal banner mostrato alla prima visita. La scelta viene memorizzata nel browser e può essere modificata cancellando i dati del sito o usando il pulsante qui sotto.': 'You can accept or reject the loading of non-essential Google services from the banner shown on your first visit. Your choice is stored in the browser and can be changed by deleting site data or using the button below.',
  'Modifica preferenze cookie': 'Change cookie preferences',
  'Google Maps e servizi esterni': 'Google Maps and external services',
  'Il sito può caricare Google Maps per mostrare la posizione indicativa delle Marmitte dei Giganti. L’uso della mappa può comportare il caricamento di risorse da server Google e il trattamento di dati tecnici, come indirizzo IP, informazioni sul browser e interazioni con la mappa, secondo le informative di Google.': 'The website may load Google Maps to show the approximate location of the Marmitte dei Giganti. Use of the map may involve loading resources from Google servers and processing technical data, such as IP address, browser information and interactions with the map, according to Google policies.',
  'Il sito contiene anche link verso servizi esterni, come Google Maps e Instagram. Aprendo questi link esci da marmittedeigiganti.com e si applicano le informative privacy e cookie dei rispettivi fornitori.': 'The website also contains links to external services, such as Google Maps and Instagram. When you open these links, you leave marmittedeigiganti.com and the privacy and cookie policies of the respective providers apply.',
  'Aggiornamenti': 'Updates',
  'Questa Cookie Policy potrà essere aggiornata quando verranno aggiunti o modificati servizi, strumenti di misurazione o funzionalità del sito.': 'This Cookie Policy may be updated when services, measurement tools or website features are added or changed.',
  'Questa pagina ha carattere informativo e dovrà essere verificata rispetto alla configurazione effettiva dei servizi prima della pubblicazione definitiva del tracciamento.': 'This page is for information purposes and must be checked against the actual configuration of the services before tracking is definitively published.',
  'Usiamo memorie locali tecniche necessarie e, solo con il tuo consenso, carichiamo servizi Google come Analytics e la mappa interattiva. Puoi accettare o rifiutare.': 'We use necessary technical local storage and, only with your consent, load Google services such as Analytics and the interactive map. You can accept or reject.',
  'Accetta servizi Google': 'Accept Google services',
  'Rifiuta': 'Reject',
  'Leggi la Cookie Policy': 'Read the Cookie Policy',
  'Preferenze cookie aggiornate.': 'Cookie preferences updated.'
});

const attributeTranslations = {
  en: {
    'Marmitte dei Giganti, torna all\'inizio': 'Marmitte dei Giganti, back to the top',
    'Marmitte dei Giganti, torna alla home': 'Marmitte dei Giganti, back to home',
    'Navigazione principale': 'Main navigation',
    'Scorri alla sezione Il luogo': 'Scroll to the place section',
    'Galleria immagini': 'Image gallery',
    'Link di servizio': 'Service links',
    'Apri immagine: Pareti della forra': 'Open image: Gorge walls',
    'Apri immagine: Rocce modellate dall’acqua': 'Open image: Rocks shaped by water',
    'Apri immagine: Il Metauro': 'Open image: The Metauro',
    'Apri immagine: Verso il Ponte dei Saltelli': 'Open image: Towards Ponte dei Saltelli',
    'Vista dal Ponte dei Saltelli verso la valle e il fiume Metauro': 'View from Ponte dei Saltelli towards the valley and the Metauro river',
    'Veduta delle Marmitte dei Giganti dal lato valle con canoa sul fiume Metauro': 'View of the Marmitte dei Giganti from the valley side with a canoe on the Metauro river',
    'Vista verticale della forra delle Marmitte dei Giganti dal lato valle': 'Vertical view of the Marmitte dei Giganti gorge from the valley side',
    "Ponte nell'area delle Marmitte dei Giganti con canoa sul fiume": 'Bridge in the Marmitte dei Giganti area with a canoe on the river',
    'Panorama dal Ponte dei Saltelli verso il lato del Furlo': 'Panorama from Ponte dei Saltelli towards the Furlo side',
    'Mappa con segnaposto delle Marmitte dei Giganti a San Lazzaro, Fossombrone': 'Map with marker for the Marmitte dei Giganti in San Lazzaro, Fossombrone',
    'Cookie Policy del sito Marmitte dei Giganti.': 'Cookie Policy of the Marmitte dei Giganti website.'
  }
};

const pageMeta = {
  index: {
    it: {
      title: 'Marmitte dei Giganti a Fossombrone | Forra di San Lazzaro',
      description: 'Marmitte dei Giganti a Fossombrone: natura nelle Marche, Forra di San Lazzaro, fiume Metauro, Ponte dei Saltelli, foto e mappa vicino al Furlo.'
    },
    en: {
      title: 'Marmitte dei Giganti in Fossombrone | San Lazzaro Gorge',
      description: 'Marmitte dei Giganti in Fossombrone: nature in the Marche region, San Lazzaro Gorge, Metauro river, Ponte dei Saltelli, photos and map near the Furlo Gorge.'
    }
  },
  policy: {
    it: {
      title: 'Cookie Policy | Marmitte dei Giganti',
      description: 'Cookie Policy del sito Marmitte dei Giganti.'
    },
    en: {
      title: 'Cookie Policy | Marmitte dei Giganti',
      description: 'Cookie Policy of the Marmitte dei Giganti website.'
    }
  }
};

function translateString(value, language = currentLanguage) {
  if (language === 'it') return value;
  return translations[language]?.[value] || value;
}

function preserveWhitespace(original, translated) {
  const start = original.match(/^\s*/)?.[0] || '';
  const end = original.match(/\s*$/)?.[0] || '';
  return `${start}${translated}${end}`;
}

function translateTextNodes(root, language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest('script, style, noscript')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (node.originalText === undefined) node.originalText = node.nodeValue;
    const original = node.originalText;
    const trimmed = original.trim();
    const translated = language === 'it' ? original : preserveWhitespace(original, translations[language]?.[trimmed] || trimmed);
    node.nodeValue = translated;
  });
}

function translateAttributes(language) {
  const attrs = ['aria-label', 'alt', 'title', 'content'];
  document.querySelectorAll('*').forEach((element) => {
    attrs.forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      const key = `original${attr.replace(/(^|-)([a-z])/g, (_, __, letter) => letter.toUpperCase())}`;
      if (element.dataset[key] === undefined) element.dataset[key] = element.getAttribute(attr);
      const original = element.dataset[key];
      const translated = language === 'it' ? original : attributeTranslations[language]?.[original] || translations[language]?.[original] || original;
      element.setAttribute(attr, translated);
    });
  });
}

function updateLanguageToggle(language) {
  if (!langToggle || !langToggleLabel) return;
  const nextLanguage = language === 'it' ? 'en' : 'it';
  const flag = langToggle.querySelector('.lang-flag');
  if (flag) flag.textContent = nextLanguage === 'en' ? '🇬🇧' : '🇮🇹';
  langToggleLabel.textContent = nextLanguage.toUpperCase();
  langToggle.setAttribute('aria-label', nextLanguage === 'en' ? 'Switch to English' : 'Passa all’italiano');
}

function updatePageMeta(language) {
  const page = document.body.classList.contains('policy-body') || location.pathname.includes('cookie-policy') ? 'policy' : 'index';
  const meta = pageMeta[page][language];
  document.title = meta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
}

function applyLanguage(language) {
  currentLanguage = supportedLanguages.includes(language) ? language : 'it';
  document.documentElement.lang = currentLanguage;
  translateTextNodes(document.body, currentLanguage);
  translateAttributes(currentLanguage);
  updateLanguageToggle(currentLanguage);
  updatePageMeta(currentLanguage);
}

function switchLanguage(nextLanguage) {
  localStorage.setItem('mmt-language', nextLanguage);
  deleteCookie('mmt_language');

  const segments = location.pathname.split('/');
  const languageSegmentIndex = segments.findIndex((segment) => supportedLanguages.includes(segment));
  if (languageSegmentIndex > -1) {
    segments[languageSegmentIndex] = nextLanguage;
    const target = new URL(location.href);
    target.pathname = segments.join('/') || '/';
    location.href = target.href;
    return;
  }

  const targetPage = location.pathname.includes('cookie-policy') ? 'cookie-policy.html' : 'index.html';
  if (location.protocol === 'file:') {
    location.href = `${nextLanguage}/${targetPage}${location.search}${location.hash}`;
  } else {
    location.href = `/${nextLanguage}/${targetPage === 'index.html' ? '' : targetPage}${location.search}${location.hash}`;
  }
}

langToggle?.addEventListener('click', () => {
  switchLanguage(currentLanguage === 'it' ? 'en' : 'it');
});

function getBackToTopThreshold() {
  const hero = document.getElementById('top');
  return hero ? hero.offsetHeight * 0.75 : window.innerHeight * 0.75;
}

function setHeaderState() {
  const forceScrolledHeader = Boolean(document.querySelector('.policy-page'));
  if (header) header.classList.toggle('is-scrolled', forceScrolledHeader || window.scrollY > 16);
  if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > getBackToTopThreshold());
}

function closeMenu() {
  if (!toggle || !nav || !header) return;
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  header.classList.remove('is-open');
  document.body.classList.remove('menu-open');
}

function openMenu() {
  if (!toggle || !nav || !header) return;
  toggle.setAttribute('aria-expanded', 'true');
  nav.classList.add('is-open');
  header.classList.add('is-open');
  document.body.classList.add('menu-open');
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const galleryItems = [
  {
    src: '/assets/marmitte-lato-valle-canoa.jpg',
    alt: 'Vista verticale della forra delle Marmitte dei Giganti dal lato valle',
    caption: 'Pareti della forra · Foto: Davide Tonelli'
  },
  {
    src: '/assets/ponte-marmitte-canoa.jpg',
    alt: "Ponte nell'area delle Marmitte dei Giganti con canoa sul fiume",
    caption: 'Rocce modellate dall’acqua · Foto: Davide Tonelli'
  },
  {
    src: '/assets/ponte-saltelli-valle-canoa.jpg',
    alt: 'Vista dal Ponte dei Saltelli verso la valle e il fiume Metauro',
    caption: 'Il Metauro · Foto: Davide Tonelli'
  },
  {
    src: '/assets/ponte-saltelli-lato-furlo.png',
    alt: 'Panorama dal Ponte dei Saltelli verso il lato del Furlo',
    caption: 'Verso il Ponte dei Saltelli · Foto: archivio marmittedeigiganti.com'
  }
];

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');
const lightboxButtons = document.querySelectorAll('[data-lightbox-index]');
const closeButtons = document.querySelectorAll('[data-lightbox-close]');
const prevButton = document.querySelector('[data-lightbox-prev]');
const nextButton = document.querySelector('[data-lightbox-next]');
let activeLightboxIndex = 0;
let lastFocusedElement = null;

function renderLightbox(index) {
  if (!lightboxImage || !lightboxCaption) return;
  activeLightboxIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeLightboxIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = attributeTranslations[currentLanguage]?.[item.alt] || item.alt;
  lightboxCaption.textContent = translateString(item.caption);
}

function openLightbox(index) {
  if (!lightbox) return;
  lastFocusedElement = document.activeElement;
  renderLightbox(index);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
  closeButtons[0]?.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
  lightboxImage?.removeAttribute('src');
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

function showPreviousImage() {
  renderLightbox(activeLightboxIndex - 1);
}

function showNextImage() {
  renderLightbox(activeLightboxIndex + 1);
}

lightboxButtons.forEach((button) => {
  button.addEventListener('click', () => openLightbox(Number(button.dataset.lightboxIndex || 0)));
});

closeButtons.forEach((button) => button.addEventListener('click', closeLightbox));
prevButton?.addEventListener('click', showPreviousImage);
nextButton?.addEventListener('click', showNextImage);

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

function initGoogleMap() {
  const mapElement = document.getElementById('google-map');
  if (!mapElement || !window.google || !window.google.maps) return;

  const lat = Number(mapElement.dataset.lat);
  const lng = Number(mapElement.dataset.lng);
  const zoom = Number(mapElement.dataset.zoom || 17);
  const position = { lat, lng };

  const map = new google.maps.Map(mapElement, {
    center: position,
    zoom,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    clickableIcons: false,
    gestureHandling: 'cooperative',
    styles: [
      { featureType: 'poi.business', stylers: [{ visibility: 'off' }] },
      { featureType: 'poi.medical', stylers: [{ visibility: 'off' }] },
      { featureType: 'poi.school', stylers: [{ visibility: 'off' }] },
      { featureType: 'transit', stylers: [{ visibility: 'off' }] },
      { featureType: 'landscape.natural', elementType: 'geometry', stylers: [{ color: '#d9d39b' }] },
      { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#78a9a7' }] },
      { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#f2e7bd' }] },
      { featureType: 'road', elementType: 'labels.text.fill', stylers: [{ color: '#5f6747' }] }
    ]
  });

  new google.maps.Marker({
    position,
    map,
    title: 'Marmitte dei Giganti - San Lazzaro, Fossombrone'
  });
}

const GOOGLE_ANALYTICS_ID = 'G-J2K8PKY3C2';

function getCookiePolicyPath() {
  if (supportedLanguages.includes(pathLanguage)) return 'cookie-policy.html';
  if (location.protocol === 'file:') return currentLanguage === 'en' ? 'en/cookie-policy.html' : 'cookie-policy.html';
  return currentLanguage === 'en' ? '/en/cookie-policy.html' : '/it/cookie-policy.html';
}

function loadGoogleAnalytics() {
  const measurementId = document.querySelector('meta[name="ga-measurement-id"]')?.getAttribute('content') || GOOGLE_ANALYTICS_ID;
  if (!measurementId || window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(){ dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}

function setCookieConsent(value) {
  localStorage.setItem('mmt-cookie-consent', value);
  deleteCookie('mmt_cookie_consent');
  document.querySelector('[data-cookie-banner]')?.remove();
  if (value === 'accepted') {
    loadGoogleAnalytics();
    loadGoogleMap();
  }
}

function getCookieConsent() {
  return getCookie('mmt_cookie_consent') || localStorage.getItem('mmt-cookie-consent') || '';
}

function showCookieBanner() {
  if (getCookieConsent()) {
    if (getCookieConsent() === 'accepted') {
      loadGoogleAnalytics();
      loadGoogleMap();
    }
    return;
  }

  const banner = document.createElement('section');
  banner.className = 'cookie-banner';
  banner.setAttribute('data-cookie-banner', '');
  banner.setAttribute('aria-label', 'Cookie');
  banner.innerHTML = `
    <p>${translateString('Usiamo memorie locali tecniche necessarie e, solo con il tuo consenso, carichiamo servizi Google come Analytics e la mappa interattiva. Puoi accettare o rifiutare.')}</p>
    <div class="cookie-banner-actions">
      <button class="button primary" type="button" data-cookie-accept>${translateString('Accetta servizi Google')}</button>
      <button class="button ghost" type="button" data-cookie-reject>${translateString('Rifiuta')}</button>
      <a class="button ghost" href="${getCookiePolicyPath()}">${translateString('Leggi la Cookie Policy')}</a>
    </div>
  `;
  document.body.appendChild(banner);
  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => setCookieConsent('accepted'));
  banner.querySelector('[data-cookie-reject]')?.addEventListener('click', () => setCookieConsent('rejected'));
}

function initCookiePreferences() {
  document.querySelector('[data-reset-cookie-consent]')?.addEventListener('click', () => {
    deleteCookie('mmt_cookie_consent');
    localStorage.removeItem('mmt-cookie-consent');
    showCookieBanner();
  });
}

function loadGoogleMap() {
  const mapElement = document.getElementById('google-map');
  if (!mapElement) return;

  const apiKey = mapElement.dataset.apiKey;
  if (!apiKey) {
    mapElement.classList.add('is-error');
    mapElement.textContent = translateString('Mappa non disponibile: API key mancante.');
    return;
  }

  window.initGoogleMap = initGoogleMap;
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&callback=initGoogleMap&loading=async`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    mapElement.classList.add('is-error');
    mapElement.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=43.683280,12.776999">${translateString('Apri la mappa su Google Maps')}</a>`;
  };
  document.head.appendChild(script);
}

document.addEventListener('keydown', (event) => {
  if (!lightbox?.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showPreviousImage();
  if (event.key === 'ArrowRight') showNextImage();
});

applyLanguage(currentLanguage);
initCookiePreferences();
showCookieBanner();
window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();
