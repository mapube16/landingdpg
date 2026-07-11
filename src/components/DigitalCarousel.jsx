import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckIcon } from '@heroicons/react/24/solid'
import { digitalSlidesData } from '../data.jsx'
import { prefersReducedMotion } from '../anim.js'
import { Ring } from '../theme.jsx'

gsap.registerPlugin(ScrollTrigger)

const ids = ['viaje', 'arrendamiento']
const MOBILE = 900

/* ── piezas compartidas por ambos modos ───────────────────────────── */

function Ambient() {
  return (
    <>
      <div style={{ position: 'absolute', top: '-12%', left: '-6%', width: 640, height: 640, borderRadius: '50%', background: 'radial-gradient(circle, rgba(24,153,214,.28), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-18%', right: '-4%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,191,29,.16), transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
      <Ring size={420} opacity={0.06} style={{ top: '8%', right: '38%' }} />
    </>
  )
}

function SlideText({ slide }) {
  return (
    <>
      <div style={{ fontSize: 13.5, fontWeight: 700, color: '#9BBF1D', letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: 10 }}>
        Contratación 100% digital
      </div>
      <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', color: '#fff', margin: '0 0 16px', lineHeight: 1.05 }}>{slide.title}</h2>
      <p style={{ fontSize: 16.5, color: '#a9c1cd', lineHeight: 1.55, maxWidth: 420, margin: '0 0 20px' }}>{slide.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26, maxWidth: 460 }}>
        {slide.features.map((f) => (
          <span
            key={f}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 12.5,
              fontWeight: 600,
              color: '#d7e7f0',
              background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.15)',
              borderRadius: 999,
              padding: '7px 14px',
            }}
          >
            <CheckIcon style={{ width: 14, height: 14, color: '#9BBF1D' }} />
            {f}
          </span>
        ))}
      </div>
      <a
        href={slide.href}
        target="_blank"
        rel="noopener"
        style={{
          textDecoration: 'none',
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          height: 52,
          padding: '0 24px',
          borderRadius: 999,
          background: '#9BBF1D',
          color: '#1c2b06',
          fontWeight: 700,
          fontSize: 15,
        }}
      >
        {slide.cta} →
      </a>
    </>
  )
}

function SlidePhoto({ slide }) {
  return (
    <>
      <img src={slide.photo} alt={slide.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,40,55,0) 50%, rgba(10,40,55,.55))' }} />
      <span
        style={{
          position: 'absolute',
          top: 18,
          left: 18,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 7,
          fontSize: 12.5,
          fontWeight: 700,
          color: '#0d3346',
          background: 'rgba(255,255,255,.92)',
          borderRadius: 999,
          padding: '8px 14px',
          boxShadow: '0 8px 20px rgba(0,0,0,.25)',
        }}
      >
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#9BBF1D' }} />
        {slide.badge}
      </span>
    </>
  )
}

/* ── MÓVIL: carrusel horizontal (swipe + dots + autoplay) ─────────── */

function MobileCarousel() {
  const [i, setI] = useState(0)
  const n = digitalSlidesData.length
  const startX = useRef(0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000)
    return () => clearInterval(t)
  }, [n])

  const onStart = (e) => (startX.current = e.touches[0].clientX)
  const onEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current
    if (dx < -45) setI((v) => (v + 1) % n)
    else if (dx > 45) setI((v) => (v - 1 + n) % n)
  }

  return (
    <div id="productos" style={{ position: 'relative', background: '#0d3346', overflow: 'hidden' }}>
      <Ambient />
      <div style={{ position: 'relative', zIndex: 1, padding: '72px 0 64px' }}>
        <div style={{ overflow: 'hidden' }} onTouchStart={onStart} onTouchEnd={onEnd}>
          <div
            style={{
              display: 'flex',
              width: `${n * 100}%`,
              transform: `translateX(-${i * (100 / n)}%)`,
              transition: 'transform .55s cubic-bezier(.22,.61,.36,1)',
            }}
          >
            {digitalSlidesData.map((slide) => (
              <div
                key={slide.id}
                style={{ width: `${100 / n}%`, padding: '0 22px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}
              >
                <SlideText slide={slide} />
                <div
                  style={{
                    position: 'relative',
                    height: 260,
                    borderRadius: 20,
                    overflow: 'hidden',
                    marginTop: 28,
                    background: '#0a2836',
                    boxShadow: '0 24px 50px rgba(0,0,0,.35)',
                  }}
                >
                  <SlidePhoto slide={slide} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
          {digitalSlidesData.map((s, k) => (
            <button
              key={s.id}
              onClick={() => setI(k)}
              aria-label={`Ver ${s.title}`}
              style={{
                width: k === i ? 26 : 8,
                height: 8,
                borderRadius: 4,
                border: 0,
                padding: 0,
                cursor: 'pointer',
                background: k === i ? '#9BBF1D' : '#3a5f72',
                transition: 'all .3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── ESCRITORIO: pin + crossfade con scroll (GSAP) ────────────────── */

function DesktopCarousel() {
  const pinRef = useRef(null)
  const slideRefs = useRef({ viaje: {}, arrendamiento: {} })

  useEffect(() => {
    const pin = pinRef.current
    if (!pin) return

    if (prefersReducedMotion()) {
      ids.forEach((id) => {
        const r = slideRefs.current[id]
        if (r?.text) gsap.set(r.text, { position: 'static', opacity: 1, y: 0, marginBottom: 40 })
        if (r?.img) gsap.set(r.img, { position: 'static', opacity: 1, scale: 1 })
      })
      return
    }

    ids.forEach((id, i) => {
      const r = slideRefs.current[id]
      if (!r || !r.text || !r.img) return
      gsap.set(r.text, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 })
      gsap.set(r.img, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.92 })
    })

    const tl = gsap.timeline({
      scrollTrigger: { trigger: pin, start: 'top top', end: '+=160%', pin: true, anticipatePin: 1, scrub: 0.6 },
    })

    const rV = slideRefs.current['viaje']
    const rA = slideRefs.current['arrendamiento']
    if (rV.text && rA.text) {
      tl.to(rV.text, { opacity: 0, y: -40, duration: 1 }, 0.3)
        .to(rV.img, { opacity: 0, scale: 0.92, duration: 1 }, 0.3)
        .to(rA.text, { opacity: 1, y: 0, duration: 1 }, 0.55)
        .to(rA.img, { opacity: 1, scale: 1, duration: 1 }, 0.55)
    }

    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill()
      tl.kill()
    }
  }, [])

  const setRef = (id, key) => (el) => {
    slideRefs.current[id] = { ...slideRefs.current[id], [key]: el }
  }

  return (
    <div id="productos" ref={pinRef} style={{ position: 'relative', background: '#0d3346' }}>
      <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <Ambient />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 28px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 60,
          }}
        >
          {/* textos */}
          <div style={{ flex: 1, position: 'relative', height: 460 }}>
            {digitalSlidesData.map((slide) => (
              <div
                key={slide.id}
                ref={setRef(slide.id, 'text')}
                style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <SlideText slide={slide} />
              </div>
            ))}
          </div>

          {/* fotos */}
          <div style={{ flex: 1, position: 'relative', height: 400 }}>
            {digitalSlidesData.map((slide) => (
              <div
                key={slide.id}
                ref={setRef(slide.id, 'img')}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 22,
                  overflow: 'hidden',
                  background: '#0a2836',
                  boxShadow: '0 30px 60px rgba(0,0,0,.35)',
                }}
              >
                <SlidePhoto slide={slide} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── selector según ancho ─────────────────────────────────────────── */

export default function DigitalCarousel() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < MOBILE)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < MOBILE)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return isMobile ? <MobileCarousel /> : <DesktopCarousel />
}
