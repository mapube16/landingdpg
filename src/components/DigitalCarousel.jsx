import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckIcon } from '@heroicons/react/24/solid'
import { digitalSlidesData } from '../data.jsx'
import { prefersReducedMotion } from '../anim.js'
import { Ring } from '../theme.jsx'

gsap.registerPlugin(ScrollTrigger)

const ids = ['viaje', 'arrendamiento']

export default function DigitalCarousel() {
  const pinRef = useRef(null)
  // slideRefs.current[id] = { text, img, dot }
  const slideRefs = useRef({ viaje: {}, arrendamiento: {} })

  useEffect(() => {
    const pin = pinRef.current
    if (!pin) return

    // Sin animación: muestra ambos slides apilados y legibles, sin pin/scrub.
    const isMobile = window.innerWidth < 900
    if (prefersReducedMotion() || isMobile) {
      ids.forEach((id) => {
        const r = slideRefs.current[id]
        if (r?.text) gsap.set(r.text, { position: 'static', opacity: 1, y: 0, marginBottom: 40 })
        if (r?.img) gsap.set(r.img, { position: 'static', opacity: 1, scale: 1 })
        if (r?.dot) gsap.set(r.dot, { backgroundColor: '#9BBF1D' })
      })
      return
    }

    ids.forEach((id, i) => {
      const r = slideRefs.current[id]
      if (!r || !r.text || !r.img) return
      gsap.set(r.text, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 40 })
      gsap.set(r.img, { opacity: i === 0 ? 1 : 0, scale: i === 0 ? 1 : 0.92 })
      if (r.dot) gsap.set(r.dot, { backgroundColor: i === 0 ? '#9BBF1D' : '#3a5f72', scale: i === 0 ? 1.3 : 1 })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: '+=160%',
        pin: true,
        anticipatePin: 1,
        scrub: 0.6,
      },
    })

    const rV = slideRefs.current['viaje']
    const rA = slideRefs.current['arrendamiento']
    if (rV.text && rA.text) {
      tl.to(rV.text, { opacity: 0, y: -40, duration: 1 }, 0.3)
        .to(rV.img, { opacity: 0, scale: 0.92, duration: 1 }, 0.3)
        .to(rV.dot, { backgroundColor: '#3a5f72', scale: 1, duration: 0.3 }, 0.3)
        .to(rA.text, { opacity: 1, y: 0, duration: 1 }, 0.55)
        .to(rA.img, { opacity: 1, scale: 1, duration: 1 }, 0.55)
        .to(rA.dot, { backgroundColor: '#9BBF1D', scale: 1.3, duration: 0.3 }, 0.55)
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
      <div className="digital-inner" style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* ambiente: glows de marca + retícula sutil + anillo DPG */}
        <div style={{ position: 'absolute', top: '-12%', left: '-6%', width: 640, height: 640, borderRadius: '50%', background: 'radial-gradient(circle, rgba(24,153,214,.28), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-18%', right: '-4%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,191,29,.16), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <Ring size={420} opacity={0.06} style={{ top: '8%', right: '38%' }} />

        <div
          className="row-2 sec-pad"
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
          <div className="digital-col-text" style={{ flex: 1, position: 'relative', height: 460 }}>
            {digitalSlidesData.map((slide) => (
              <div
                key={slide.id}
                ref={setRef(slide.id, 'text')}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: '#9BBF1D',
                    letterSpacing: '.5px',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  Contratación 100% digital
                </div>
                <h2 style={{ fontSize: 'clamp(26px, 5vw, 44px)', color: '#fff', margin: '0 0 16px', lineHeight: 1.05 }}>{slide.title}</h2>
                <p style={{ fontSize: 16.5, color: '#a9c1cd', lineHeight: 1.55, maxWidth: 420, margin: '0 0 20px' }}>
                  {slide.desc}
                </p>
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
                    display: 'flex',
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
              </div>
            ))}
          </div>

          {/* imágenes */}
          <div className="digital-col-img" style={{ flex: 1, position: 'relative', height: 400 }}>
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
                <img
                  src={slide.photo}
                  alt={slide.alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(10,40,55,0) 50%, rgba(10,40,55,.55))',
                  }}
                />
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
                    backdropFilter: 'blur(6px)',
                    borderRadius: 999,
                    padding: '8px 14px',
                    boxShadow: '0 8px 20px rgba(0,0,0,.25)',
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#9BBF1D' }} />
                  {slide.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div
          className="digital-dots"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 30,
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
          }}
        >
          {digitalSlidesData.map((slide) => (
            <div
              key={slide.id}
              ref={setRef(slide.id, 'dot')}
              style={{ width: 8, height: 8, borderRadius: '50%', background: '#3a5f72' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
