import { useEffect, useRef, useState } from 'react'
import { GOOGLE_MAPS_API_KEY, PLACE_ID } from '../data.jsx'
import { prefersReducedMotion } from '../anim.js'

const FIELD_MASK = [
  'displayName',
  'rating',
  'userRatingCount',
  'reviews.rating',
  'reviews.text.text',
  'reviews.authorAttribution.displayName',
  'reviews.authorAttribution.photoUri',
  'reviews.relativePublishTimeDescription',
].join(',')

const GoogleG = () => (
  <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
    <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
    <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

function Stars({ n = 5, size = 15 }) {
  return (
    <span style={{ display: 'inline-flex', gap: 1 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < Math.round(n) ? '#FBBC05' : '#dfe3e6'} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function ReviewCard({ review }) {
  const [open, setOpen] = useState(false)
  const long = review.text && review.text.length > 220
  const shown = open || !long ? review.text : review.text.slice(0, 220).trimEnd() + '…'
  const initial = (review.author || '?').trim().charAt(0).toUpperCase()

  return (
    <div
      className="float-card"
      style={{
        background: '#f7f8f9',
        borderRadius: 14,
        padding: '30px 26px 26px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {review.photo ? (
        <img
          src={review.photo}
          alt={review.author}
          referrerPolicy="no-referrer"
          style={{ width: 66, height: 66, borderRadius: '50%', objectFit: 'cover', marginBottom: 16 }}
        />
      ) : (
        <div
          style={{
            width: 66,
            height: 66,
            borderRadius: '50%',
            background: '#7a8f99',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          {initial}
        </div>
      )}
      <div style={{ fontSize: 40, lineHeight: 0.5, color: '#d9dde0', fontFamily: 'Georgia, serif', marginBottom: 8 }}>
        &rdquo;
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: '#5c6b72', margin: '0 0 18px', flex: 1 }}>
        {shown}
        {long && (
          <button
            onClick={() => setOpen((v) => !v)}
            style={{ border: 0, background: 'none', color: '#0E7ABF', cursor: 'pointer', padding: 0, marginLeft: 4, textDecoration: 'underline', fontSize: 14 }}
          >
            {open ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </p>
      <div style={{ fontSize: 15, fontWeight: 700, color: '#0d3346', marginBottom: 6 }}>{review.author}</div>
      <Stars n={review.rating} />
      <div style={{ fontSize: 12.5, color: '#8a9aa1', marginTop: 6 }}>{review.time}</div>
    </div>
  )
}

function NavBtn({ onClick, disabled, dir }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Anterior' : 'Siguiente'}
      className="rev-nav"
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '1.5px solid #dbe3e6',
        background: '#fff',
        color: '#0d3346',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 'none',
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'prev' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  )
}

function ReviewsCarousel({ reviews }) {
  const [perView, setPerView] = useState(3)
  const [index, setIndex] = useState(0)
  const hover = useRef(false)

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth < 640 ? 1 : window.innerWidth < 960 ? 2 : 3)
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])

  const maxIndex = Math.max(0, reviews.length - perView)
  const pages = maxIndex + 1
  const clamped = Math.min(index, maxIndex)

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex)
  }, [maxIndex, index])

  useEffect(() => {
    if (reviews.length <= perView || prefersReducedMotion()) return
    const id = setInterval(() => {
      if (!hover.current) setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 4500)
    return () => clearInterval(id)
  }, [maxIndex, perView, reviews.length])

  return (
    <div onMouseEnter={() => (hover.current = true)} onMouseLeave={() => (hover.current = false)}>
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            transition: 'transform .6s cubic-bezier(.22,.61,.36,1)',
            transform: `translateX(-${clamped * (100 / perView)}%)`,
          }}
        >
          {reviews.map((r, i) => (
            <div key={i} style={{ flex: `0 0 ${100 / perView}%`, padding: '6px 9px', boxSizing: 'border-box' }}>
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>

      {pages > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 22 }}>
          <NavBtn dir="prev" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={clamped === 0} />
          <div style={{ display: 'flex', gap: 8 }}>
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a la página ${i + 1}`}
                style={{
                  width: i === clamped ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 0,
                  cursor: 'pointer',
                  background: i === clamped ? '#1899D6' : '#cdd6da',
                  transition: 'all .3s ease',
                }}
              />
            ))}
          </div>
          <NavBtn dir="next" onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))} disabled={clamped === maxIndex} />
        </div>
      )}
    </div>
  )
}

// Fallback digno si la key no está configurada o la API falla: nunca mostramos
// mensajes de dev al visitante — lo llevamos a ver las reseñas en Google.
function ReviewsFallback({ error }) {
  if (import.meta.env.DEV) {
    console.warn(
      '[GoogleReviews]',
      error
        ? 'La API falló. Revisa que Places API (New) esté habilitada y que el dominio esté autorizado en la API key.'
        : 'Falta VITE_GOOGLE_MAPS_API_KEY (local: .env · producción: variables del hosting).'
    )
  }
  const listUrl = PLACE_ID
    ? `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`
    : 'https://www.google.com/maps'
  return (
    <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
      <a
        href={listUrl}
        target="_blank"
        rel="noopener"
        className="float-card"
        style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          height: 50,
          padding: '0 26px',
          borderRadius: 999,
          background: '#fff',
          border: '1.5px solid #dbe3e6',
          color: '#0d3346',
          fontWeight: 700,
          fontSize: 14.5,
        }}
      >
        <GoogleG /> Ver nuestras reseñas en Google
      </a>
    </div>
  )
}

export default function GoogleReviews() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY || !PLACE_ID) return
    let cancelled = false

    const url =
      `https://places.googleapis.com/v1/places/${PLACE_ID}` +
      `?languageCode=es&regionCode=CO&fields=${FIELD_MASK}&key=${GOOGLE_MAPS_API_KEY}`

    fetch(url)
      .then((r) => (r.ok ? r.json() : r.json().then((j) => Promise.reject(new Error(j?.error?.message || 'HTTP ' + r.status)))))
      .then((json) => {
        if (cancelled) return
        setData({
          name: json.displayName?.text,
          rating: json.rating,
          total: json.userRatingCount,
          reviews: (json.reviews || [])
            .map((r) => ({
              author: r.authorAttribution?.displayName,
              photo: r.authorAttribution?.photoUri,
              rating: r.rating,
              text: r.text?.text || '',
              time: r.relativePublishTimeDescription,
            }))
            .filter((r) => r.text.trim()),
        })
      })
      .catch((e) => {
        console.error('[GoogleReviews]', e)
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (!GOOGLE_MAPS_API_KEY || !PLACE_ID) return <ReviewsFallback />
  if (error) return <ReviewsFallback error />
  if (!data) return <div style={{ textAlign: 'center', color: '#7a97a4', padding: '20px 0' }}>Cargando reseñas…</div>

  const listUrl = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`
  const writeUrl = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`

  return (
    <div>
      {/* header ficha — solo el rating; los CTA van al final */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          background: '#fff',
          border: '1px solid #e8ebed',
          borderRadius: 16,
          padding: '18px 24px',
          marginBottom: 24,
        }}
      >
        <GoogleG />
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: '#0d3346' }}>{data.name}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#0d3346' }}>{data.rating?.toFixed(1)}</span>
            <Stars n={data.rating} />
            <span style={{ fontSize: 13, color: '#8a9aa1' }}>({data.total})</span>
          </div>
        </div>
      </div>

      {/* carrusel de reseñas */}
      {data.reviews.length > 0 ? (
        <ReviewsCarousel reviews={data.reviews} />
      ) : (
        <div style={{ textAlign: 'center', color: '#8a9aa1', fontSize: 14 }}>Aún no hay reseñas para mostrar.</div>
      )}

      {/* CTA al final: primero leer, luego invitar a escribir */}
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
        <a
          href={listUrl}
          target="_blank"
          rel="noopener"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 48,
            padding: '0 24px',
            borderRadius: 999,
            border: '1.5px solid #dbe3e6',
            background: '#fff',
            color: '#0d3346',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Leer todas en Google
        </a>
        <a
          href={writeUrl}
          target="_blank"
          rel="noopener"
          className="float-card"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            height: 48,
            padding: '0 26px',
            borderRadius: 999,
            background: '#1899D6',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14,
            boxShadow: '0 10px 24px rgba(24,153,214,.3)',
          }}
        >
          <StarIcon /> Escribir reseña
        </a>
      </div>
    </div>
  )
}
