export const site = {
  url: 'https://marmittedeigiganti.com',
  name: 'Marmitte dei Giganti',
  coordinates: { lat: 43.683280, lng: 12.776999 },
  analyticsId: 'G-J2K8PKY3C2'
};

export const locales = {
  it: {
    htmlLang: 'it', locale: 'it_IT', path: '/it/',
    title: 'Marmitte dei Giganti di Fossombrone: come arrivare e cosa vedere',
    description: 'Scopri le Marmitte dei Giganti di Fossombrone: la Forra di San Lazzaro sul fiume Metauro, il Ponte dei Saltelli, mappa e consigli per la visita.'
  },
  en: {
    htmlLang: 'en', locale: 'en_US', path: '/en/',
    title: 'Marmitte dei Giganti, Fossombrone: how to visit',
    description: 'Visit the Marmitte dei Giganti in Fossombrone: discover San Lazzaro Gorge on the Metauro river, Ponte dei Saltelli, a map and practical visitor information.'
  }
};

export function localPath(lang, page = '') {
  return `/${lang}/${page}`.replace(/\/$/, page ? '' : '/');
}
