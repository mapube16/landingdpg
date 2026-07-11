import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { heroPhotos } from '../data.jsx'
import { prefersReducedMotion } from '../anim.js'

const AUTOPLAY = 4.5 // s por foto en el fondo

export default function Hero() {
  const heroRef = useRef(null)
  const bgWrapRef = useRef(null)
  const layersRef = useRef([])
  const contentRef = useRef(null)

  useEffect(() => {
    const layers = layersRef.current.filter(Boolean)
    if (!layers.length) return

    if (prefersReducedMotion()) {
      gsap.set(layers, { opacity: 0 })
      gsap.set(layers[0], { opacity: 1 })
      return
    }

    const ctx = gsap.context(() => {
      // crossfade automático entre fotos de fondo
      gsap.set(layers, { opacity: 0 })
      gsap.set(layers[0], { opacity: 1 })
      const tl = gsap.timeline({ repeat: -1 })
      layers.forEach((layer, i) => {
        const next = layers[(i + 1) % layers.length]
        tl.to({}, { duration: AUTOPLAY })
          .to(layer, { opacity: 0, duration: 1.4, ease: 'power1.inOut' }, '>')
          .to(next, { opacity: 1, duration: 1.4, ease: 'power1.inOut' }, '<')
      })

      // parallax del fondo
      gsap.to(bgWrapRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })

      // entrada escalonada del contenido
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
        delay: 0.15,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', background: '#0a2836' }}>
      {/* fondo full-bleed: fotos en crossfade con zoom Ken Burns */}
      <div ref={bgWrapRef} style={{ position: 'absolute', inset: 0 }}>
        {heroPhotos.map((photo, i) => (
          <img
            key={i}
            ref={(el) => (layersRef.current[i] = el)}
            src={photo.src}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0,
              animation: `kenburns ${AUTOPLAY * 2 + 3}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* overlay para legibilidad */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(8,32,44,.82) 0%, rgba(8,32,44,.55) 45%, rgba(8,32,44,.22) 100%),' +
            'linear-gradient(0deg, rgba(8,32,44,.55) 0%, rgba(8,32,44,0) 40%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 28px',
          minHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div ref={contentRef} style={{ maxWidth: 640, paddingTop: 40, paddingBottom: 120 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,.14)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,.28)',
              padding: '7px 16px',
              borderRadius: 999,
              fontSize: 12.5,
              fontWeight: 700,
              color: '#fff',
              marginBottom: 24,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#b6e02a' }} />
            +26 años protegiendo lo que más te importa
          </div>
          <h1 style={{ fontSize: 'clamp(34px, 6.5vw, 64px)', lineHeight: 1.02, margin: '0 0 20px', color: '#fff', textShadow: '0 2px 30px rgba(0,0,0,.3)' }}>
            Protegemos tu presente.
            <br />
            <span style={{ color: '#5fc2ec' }}>Aseguramos tu futuro.</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,.92)', maxWidth: 500, margin: '0 0 32px' }}>
            Desarrollo, protección y garantía para ti, tu familia y tu patrimonio — con la asesoría de DPG Seguros.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a
              href="#productos"
              style={{
                textDecoration: 'none',
                height: 54,
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
                borderRadius: 999,
                background: '#1899D6',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15.5,
                boxShadow: '0 12px 28px rgba(24,153,214,.4)',
              }}
            >
              Comprar en línea
            </a>
            <a
              href="#cotizador-autos"
              style={{
                textDecoration: 'none',
                height: 54,
                display: 'flex',
                alignItems: 'center',
                padding: '0 30px',
                borderRadius: 999,
                background: 'rgba(255,255,255,.14)',
                backdropFilter: 'blur(6px)',
                border: '1.5px solid rgba(255,255,255,.7)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 15.5,
              }}
            >
              Solicitar cotización
            </a>
          </div>
        </div>

        {/* stats sobre la foto, abajo */}
        <div style={{ position: 'absolute', left: 28, bottom: 40, display: 'flex', gap: 44, flexWrap: 'wrap' }}>
          <Stat value="26+" label="años de experiencia" />
          <Stat value="27" label="aseguradoras aliadas" />
          <Stat value="100%" label="proceso digital" />
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="disp" style={{ fontSize: 34, color: '#fff', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.8)', marginTop: 4 }}>{label}</div>
    </div>
  )
}
