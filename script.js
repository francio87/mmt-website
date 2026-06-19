const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const navLinks = nav ? Array.from(nav.querySelectorAll('a')) : [];
const backToTop = document.querySelector('[data-back-to-top]');

function getBackToTopThreshold() {
  const hero = document.getElementById('top');
  return hero ? hero.offsetHeight * 0.75 : window.innerHeight * 0.75;
}

function setHeaderState() {
  if (header) header.classList.toggle('is-scrolled', window.scrollY > 16);
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
    src: 'assets/marmitte-lato-valle-canoa.jpg',
    alt: 'Vista verticale della forra delle Marmitte dei Giganti dal lato valle',
    caption: 'Pareti della forra · Foto: Davide Tonelli'
  },
  {
    src: 'assets/ponte-marmitte-canoa.jpg',
    alt: "Ponte nell'area delle Marmitte dei Giganti con canoa sul fiume",
    caption: 'Rocce modellate dall’acqua · Foto: Davide Tonelli'
  },
  {
    src: 'assets/ponte-saltelli-valle-canoa.jpg',
    alt: 'Vista dal Ponte dei Saltelli verso la valle e il fiume Metauro',
    caption: 'Il Metauro · Foto: Davide Tonelli'
  },
  {
    src: 'assets/ponte-saltelli-lato-furlo.jpg',
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
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.caption;
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

function loadGoogleMap() {
  const mapElement = document.getElementById('google-map');
  if (!mapElement) return;

  const apiKey = mapElement.dataset.apiKey;
  if (!apiKey) {
    mapElement.classList.add('is-error');
    mapElement.textContent = 'Mappa non disponibile: API key mancante.';
    return;
  }

  window.initGoogleMap = initGoogleMap;
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&callback=initGoogleMap&loading=async`;
  script.async = true;
  script.defer = true;
  script.onerror = () => {
    mapElement.classList.add('is-error');
    mapElement.innerHTML = '<a href="https://www.google.com/maps/search/?api=1&query=43.683280,12.776999">Apri la mappa su Google Maps</a>';
  };
  document.head.appendChild(script);
}

document.addEventListener('keydown', (event) => {
  if (!lightbox?.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showPreviousImage();
  if (event.key === 'ArrowRight') showNextImage();
});

window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();
loadGoogleMap();
