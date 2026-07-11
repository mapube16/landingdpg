// Contenido y datos estáticos de la landing DPG (portado desde el diseño).

export const WA_NUMBER = '573173717828'

// Instagram — perfil y reels a incrustar (embed oficial). Pega las URLs de los reels.
export const IG_PROFILE = 'https://www.instagram.com/dpg_seguros/'
export const IG_HANDLE = '@dpg_seguros'
// cover = portada descargada a public/ (estable, no expira). Actualizar al publicar nuevos reels.
export const IG_REELS = [
  { url: 'https://www.instagram.com/p/DaYZqjRJJZO/', cover: '/reel1.jpg' },
  { url: 'https://www.instagram.com/p/DZ6GsYfueNQ/', cover: '/reel2.jpg' },
  { url: 'https://www.instagram.com/p/DaOv0kMOo5g/', cover: '/reel3.jpg' },
]
export const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  'Hola, quiero más información sobre los seguros de DPG'
)}`

// Arma un link de WhatsApp con el mensaje ya escrito.
// ponytail: los formularios envían por aquí mientras no exista el correo/backend.
// Cuando haya email, se cambia esta función por un POST y listo.
export const waMessage = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`

export const heroTabsData = [
  {
    id: 'viaje',
    label: 'Viaje',
    kicker: 'Contratación 100% digital',
    title: 'Seguro de Viaje',
    desc: 'Cobertura médica y asistencia en el exterior. Cotiza y emite tu póliza en minutos, antes de tu próximo viaje.',
    href: '#productos',
    btnLabel: 'Comprar ahora',
    btnBg: '#1899D6',
    btnColor: '#fff',
  },
  {
    id: 'arrendamiento',
    label: 'Arrendamiento',
    kicker: 'Contratación 100% digital',
    title: 'Arrendamiento Residencial',
    desc: 'Protege tu inmueble en arriendo ante impagos y daños, con emisión inmediata en línea.',
    href: '#productos',
    btnLabel: 'Comprar ahora',
    btnBg: '#1899D6',
    btnColor: '#fff',
  },
  {
    id: 'autos',
    label: 'Autos',
    kicker: 'Cotización con asesor',
    title: 'Seguro para Autos',
    desc: 'Cuéntanos sobre tu vehículo y un asesor especializado te traerá la mejor opción entre 27 aseguradoras.',
    href: '#cotizador-autos',
    btnLabel: 'Solicitar cotización',
    btnBg: '#538F32',
    btnColor: '#fff',
  },
]

// Fotos reales del hero (crossfade de fondo).
export const heroPhotos = [
  { src: '/photos/familia.jpg', alt: 'Familia protegida por DPG Seguros' },
  { src: '/photos/asesoria.jpg', alt: 'Asesoría personalizada en DPG Seguros' },
]

export const digitalSlidesData = [
  {
    id: 'viaje',
    title: 'Seguro de Viaje',
    desc: 'Viaja tranquilo: cobertura médica, asistencia y equipaje protegido, contratado 100% en línea.',
    cta: 'Comprar seguro de viaje',
    href: 'https://www.sura.co', // TODO: link real de SURA con código de asesor DPG
    photo: '/photos/viaje.jpg',
    alt: 'Pareja revisando su seguro de viaje en el aeropuerto',
    features: ['Cobertura médica en el exterior', 'Asistencia 24/7', 'Equipaje protegido'],
    badge: 'Emisión inmediata',
  },
  {
    id: 'arrendamiento',
    title: 'Arrendamiento Residencial',
    desc: 'Asegura tu inmueble en arriendo contra impagos y daños, con emisión inmediata.',
    cta: 'Comprar seguro de arrendamiento',
    href: 'https://www.sura.co', // TODO: link real de SURA con código de asesor DPG
    photo: '/photos/arrendamiento.jpg',
    alt: 'Entrega de llaves de un apartamento en arriendo',
    features: ['Protección ante impagos', 'Cubre daños al inmueble', 'Emisión inmediata'],
    badge: '100% en línea',
  },
]

export const diferenciales = [
  {
    title: 'Asesoría especializada',
    desc: 'Equipo multidisciplinario con conocimiento técnico en cada ramo.',
    iconHtml:
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E7ABF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>',
  },
  {
    title: 'Acompañamiento integral',
    desc: 'Te apoyamos durante todo el ciclo de vida de tu póliza.',
    iconHtml:
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E7ABF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  },
  {
    title: 'Gestión de indemnizaciones',
    desc: 'Estamos contigo en el proceso de reclamación, no solo en la venta.',
    iconHtml:
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E7ABF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/></svg>',
  },
  {
    title: 'Respaldo de 27 aseguradoras',
    desc: 'Comparamos y elegimos la mejor opción para tu necesidad.',
    iconHtml:
      '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E7ABF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/></svg>',
  },
]

// desc: descriptor corto (conocimiento general). accent: color de glow de marca. ramos: tag.
export const aseguradoras = [
  { name: 'SURA', logo: '/logos/sura.png', accent: '#0072ce', ramos: 'Vida · Salud · Autos', desc: 'Líder en Colombia y Latinoamérica en vida, salud, autos y patrimonio.' },
  { name: 'Allianz', logo: '/logos/allianz.png', accent: '#003781', ramos: 'Autos · Vida · Patrimonio', desc: 'Grupo asegurador global de origen alemán, con solidez internacional.' },
  { name: 'Mapfre', logo: '/logos/mapfre.png', accent: '#e30613', ramos: 'Generales · Vida', desc: 'Multinacional española con amplia trayectoria en seguros generales y de vida.' },
  { name: 'AXA Colpatria', logo: '/logos/colpatria.png', accent: '#00008f', ramos: 'Salud · Autos · Hogar', desc: 'Respaldo del grupo AXA en salud, autos, vida y hogar.' },
  { name: 'HDI', logo: '/logos/hdi.jpg', accent: '#00953b', ramos: 'Autos · Patrimonio', desc: 'Aseguradora de origen alemán, fuerte en autos y seguros patrimoniales.' },
  { name: 'Liberty', logo: '/logos/liberty.jpg', accent: '#f2a900', ramos: 'Autos · Hogar · Vida', desc: 'Compañía con presencia internacional en autos, hogar y vida.' },
]

export const socialTiles = ['#e2eef4', '#eaf3e0', '#f0e7f4', '#f4eee2'].map((bg) => ({ bg }))

// Reseñas reales de Google vía Google Places API (Maps JS, key restringida por dominio).
// PLACE_ID opcional: si lo pones, se usa directo; si no, se busca por PLACES_QUERY.
// La key vive en .env (NO se commitea). Restringirla por dominio en Google Cloud.
export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''
export const PLACE_ID = 'ChIJWd1bevz0OI4RE3d_C79jWCs' // DPG Seguros (Armenia)
export const PLACES_QUERY = 'DPG Seguros, Cra 15 #4N-44, Armenia, Quindío'

// Mapa embebido de la oficina DPG (Armenia). Iframe sin key ni facturación.
// Para la versión oficial: Google Maps → Compartir → "Insertar un mapa" → copia el src del iframe.
export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=DPG%20Seguros%2C%20Cra%2015%20%234N-44%2C%20Armenia%2C%20Quind%C3%ADo&z=16&output=embed'
