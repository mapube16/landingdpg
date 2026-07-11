import { PlayIcon } from '@heroicons/react/24/solid'
import { diferenciales, aseguradoras, IG_PROFILE, IG_REELS } from '../data.jsx'
import { useReveal } from '../anim.js'
import GoogleReviews from './GoogleReviews.jsx'
import { Ring, Kicker } from '../theme.jsx'

export function Diferenciales() {
  const gridRef = useReveal({ y: 48, rotate: -1.5 })
  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '100px 28px' }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 54px' }}>
        <Kicker>Diferenciales DPG</Kicker>
        <h2 style={{ fontSize: 'clamp(26px, 5vw, 36px)', color: '#0d3346', margin: 0 }}>
          Mucho más que la intermediación de un seguro
        </h2>
      </div>
      <div ref={gridRef} className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 26 }}>
        {diferenciales.map((item) => (
          <div key={item.title} style={{ textAlign: 'center', padding: 8 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: '#eaf5fb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 18px',
              }}
              dangerouslySetInnerHTML={{ __html: item.iconHtml }}
            />
            <h3 style={{ fontSize: 18, color: '#0d3346', margin: '0 0 8px' }}>{item.title}</h3>
            <p style={{ fontSize: 13.5, color: '#5c7280', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function QuienesSomos() {
  return (
    <div id="quienes-somos" style={{ background: '#ffffff', padding: '100px 28px', position: 'relative', overflow: 'hidden' }}>
      <Ring size={340} opacity={0.05} style={{ bottom: -80, left: -80 }} />
      <div className="row-2 sec-pad" style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', gap: 60, alignItems: 'center', position: 'relative' }}>
        <div style={{ flex: 1 }}>
          <img
            src="/photos/asesoria.jpg"
            alt="Asesoría personalizada en la oficina de DPG Seguros"
            style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 22, boxShadow: '0 20px 50px rgba(13,51,70,.18)', display: 'block' }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Kicker>¿Quiénes somos?</Kicker>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 36px)', color: '#0d3346', margin: '0 0 18px', lineHeight: 1.1 }}>
            26 años acompañando el patrimonio de las familias colombianas
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: '#33474f', margin: '0 0 16px' }}>
            En DPG Seguros somos mucho más que intermediarios: brindamos acompañamiento integral durante todo el ciclo de
            vida de tu póliza, con asesoría técnica especializada y un equipo multidisciplinario siempre disponible.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: '#33474f', margin: '0 0 26px' }}>
            Te ayudamos a gestionar riesgos, acompañamos tus procesos de indemnización y te damos herramientas para tomar
            mejores decisiones sobre tu salud, tu familia y tus proyectos.
          </p>
          <a
            href="#contacto"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              height: 50,
              padding: '0 26px',
              borderRadius: 999,
              border: '2px solid #12435f',
              color: '#12435f',
              fontWeight: 700,
              fontSize: 14.5,
            }}
          >
            Conoce nuestra historia
          </a>
        </div>
      </div>
    </div>
  )
}

export function Aliados() {
  const cards = [...aseguradoras, ...aseguradoras] // duplicado para loop sin costura
  return (
    <div id="aliados" style={{ padding: '90px 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', margin: '0 auto 46px', padding: '0 28px', maxWidth: 700 }}>
        <Kicker>Respaldo</Kicker>
        <h2 style={{ fontSize: 'clamp(26px, 5vw, 34px)', color: '#0d3346', margin: '0 0 12px' }}>
          27 compañías aseguradoras <span style={{ color: '#1899D6' }}>te respaldan</span>
        </h2>
        <p style={{ fontSize: 15.5, color: '#5c7280', lineHeight: 1.6, margin: 0 }}>
          No trabajamos con una sola: comparamos entre todas para conseguirte la mejor cobertura al mejor precio.
        </p>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 120, background: 'linear-gradient(90deg,#eef4f8,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 120, background: 'linear-gradient(-90deg,#eef4f8,transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div className="marquee-track" style={{ display: 'flex', gap: 20, width: 'max-content', animation: 'skylineScroll 40s linear infinite', padding: '10px 10px' }}>
          {cards.map((a, i) => (
            <div
              key={i}
              className="float-card"
              style={{ position: 'relative', width: 300, flex: 'none', background: '#fff', border: '1px solid #e8ecee', borderRadius: 18, padding: 24, overflow: 'hidden' }}
            >
              {/* glow de marca */}
              <div style={{ position: 'absolute', top: -50, left: -30, width: 180, height: 140, background: `radial-gradient(circle, ${a.accent}22, transparent 70%)`, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', height: 52, display: 'flex', alignItems: 'center' }}>
                <img src={a.logo} alt={a.name} style={{ maxHeight: 46, maxWidth: 160, objectFit: 'contain' }} />
              </div>
              <div className="disp" style={{ position: 'relative', fontSize: 17, fontWeight: 700, color: '#0d3346', margin: '16px 0 8px' }}>{a.name}</div>
              <span style={{ position: 'relative', display: 'inline-block', fontSize: 11, fontWeight: 700, color: a.accent, background: `${a.accent}14`, borderRadius: 999, padding: '4px 10px', marginBottom: 10 }}>{a.ramos}</span>
              <p style={{ position: 'relative', fontSize: 13, color: '#5c7280', lineHeight: 1.55, margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 44 }}>
        <a
          href="#cotizador-autos"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            height: 50,
            padding: '0 28px',
            borderRadius: 999,
            background: '#12435f',
            color: '#fff',
            fontWeight: 700,
            fontSize: 14.5,
          }}
        >
          Cotiza con nuestro respaldo
        </a>
      </div>
    </div>
  )
}

// Reseñas reales de Google (Featurable). El fetch lo hace la librería con el widget ID.
export function Testimonios() {
  return (
    <div style={{ background: '#ffffff', padding: '90px 28px', borderTop: '1px solid #eef2f4' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <Kicker>Comunidad</Kicker>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 32px)', color: '#0d3346', margin: 0 }}>
            Lo que nuestros clientes dicen sobre nosotros
          </h2>
        </div>
        <GoogleReviews />
      </div>
    </div>
  )
}

const IgIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.93 3.9 2.38 7.15 2.23 8.42 2.18 8.8 2.16 12 2.16Zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
  </svg>
)
// Grid custom de reels: portada real + play, abre el reel en Instagram. Diseño alineado con la página.
function ReelsGrid({ gridRef }) {
  return (
    <div ref={gridRef} className="reel-grid">
      {IG_REELS.map((reel, i) => (
        <a
          key={i}
          href={reel.url}
          target="_blank"
          rel="noopener"
          className="float-card reel-tile"
          aria-label="Ver reel en Instagram"
          style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', display: 'block', textDecoration: 'none', background: '#0d3346' }}
        >
          <img src={reel.cover} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(13,51,70,0) 55%,rgba(13,51,70,.45))' }} />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: 'rgba(255,255,255,.85)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PlayIcon style={{ width: 26, height: 26, color: '#12435f', marginLeft: 3 }} />
          </div>
          <span style={{ position: 'absolute', top: 12, right: 12, color: '#fff', filter: 'drop-shadow(0 1px 3px rgba(0,0,0,.5))' }}>
            <IgIcon size={20} />
          </span>
        </a>
      ))}
    </div>
  )
}

export function Redes() {
  const gridRef = useReveal({ y: 34, stagger: 0.08 })
  return (
    <div style={{ background: '#eef4f8', padding: '100px 28px', borderTop: '1px solid #e2eaef' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <Kicker>Síguenos</Kicker>
        <h2 style={{ fontSize: 'clamp(26px, 5vw, 34px)', color: '#0d3346', margin: '0 0 12px' }}>
          Vive DPG en <span style={{ color: '#1899D6' }}>Instagram</span>
        </h2>
        <p style={{ fontSize: 15.5, color: '#5c7280', maxWidth: 520, margin: '0 auto 44px', lineHeight: 1.6 }}>
          Tips de seguros, testimonios y respuestas a tus dudas — síguenos en Instagram.
        </p>

        <ReelsGrid gridRef={gridRef} />

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <a
            href={IG_PROFILE}
            target="_blank"
            rel="noopener"
            className="float-card"
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              height: 52,
              padding: '0 28px',
              borderRadius: 999,
              background: 'linear-gradient(45deg,#F58529 0%,#DD2A7B 45%,#8134AF 75%,#515BD4 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 14.5,
            }}
          >
            <IgIcon size={20} /> Seguir @dpg_seguros
          </a>
        </div>
      </div>
    </div>
  )
}

export function CtaFinal() {
  return (
    <div style={{ background: 'linear-gradient(135deg,#0d3346,#12435f)', padding: '90px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <Ring size={420} opacity={0.08} style={{ top: -120, left: -100 }} />
      <Ring size={300} opacity={0.06} style={{ bottom: -90, right: -60 }} />
      <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
        <h2 style={{ fontSize: 'clamp(26px, 5vw, 38px)', color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>Tu tranquilidad empieza hoy</h2>
        <p style={{ fontSize: 16.5, color: '#a9c1cd', margin: '0 0 30px' }}>
          Compra tu seguro 100% en línea o solicita una cotización — sin filas, sin papeleo.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#productos"
            style={{
              textDecoration: 'none',
              height: 52,
              display: 'flex',
              alignItems: 'center',
              padding: '0 28px',
              borderRadius: 999,
              background: '#9BBF1D',
              color: '#1c2b06',
              fontWeight: 700,
              fontSize: 15.5,
            }}
          >
            Comprar ahora
          </a>
          <a
            href="#cotizador-autos"
            style={{
              textDecoration: 'none',
              height: 52,
              display: 'flex',
              alignItems: 'center',
              padding: '0 28px',
              borderRadius: 999,
              border: '2px solid #fff',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15.5,
            }}
          >
            Solicitar cotización
          </a>
        </div>
      </div>
    </div>
  )
}

const footerLink = { color: '#a9c1cd', fontSize: 13.5, textDecoration: 'none' }
const footerHead = { color: '#5fc2ec', fontSize: 12.5, fontWeight: 700, marginBottom: 12 }
const socialIcon = {
  width: 34,
  height: 34,
  borderRadius: 8,
  background: '#123a4f',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export function Footer() {
  return (
    <div style={{ background: '#0a2836', padding: '56px 28px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 260 }}>
          <span className="disp" style={{ fontSize: 24, color: '#9BBF1D' }}>
            DPG <span style={{ color: '#5fc2ec' }}>Seguros</span>
          </span>
          <p style={{ fontSize: 13, color: '#7a97a4', lineHeight: 1.6, marginTop: 12 }}>
            Más de 26 años protegiendo el patrimonio de personas y empresas en Colombia.
          </p>
        </div>
        <div>
          <div style={footerHead}>Navegación</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href="#productos" style={footerLink}>Seguros</a>
            <a href="#quienes-somos" style={footerLink}>Nosotros</a>
            <a href="#aliados" style={footerLink}>Aliados</a>
            <a href="#contacto" style={footerLink}>Contacto</a>
          </div>
        </div>
        <div>
          <div style={footerHead}>Contacto</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ color: '#a9c1cd', fontSize: 13.5 }}>+57 317 371 7828</span>
            <span style={{ color: '#a9c1cd', fontSize: 13.5 }}>innovaciondpg@gmail.com</span>
            <span style={{ color: '#a9c1cd', fontSize: 13.5 }}>www.dpgseguros.com</span>
          </div>
        </div>
        <div>
          <div style={footerHead}>Síguenos</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8fc7e6" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </div>
            <div style={socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8fc7e6" strokeWidth="2">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </div>
            <div style={socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8fc7e6" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1240, margin: '36px auto 0', paddingTop: 20, borderTop: '1px solid #123a4f', fontSize: 12, color: '#5c7b88' }}>
        © 2026 DPG Seguros. Todos los derechos reservados.
      </div>
    </div>
  )
}
