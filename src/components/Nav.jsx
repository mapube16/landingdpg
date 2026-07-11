import { waLink } from '../data.jsx'

const link = { textDecoration: 'none', color: '#16303e', fontWeight: 600, fontSize: 14.5 }

export default function Nav() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(251,250,247,.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(18,67,95,.08)',
      }}
    >
      <div
        className="nav-bar"
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '16px 28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/dpg-logo.svg" alt="DPG Seguros" style={{ height: 44, display: 'block' }} />
        </a>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
          <a href="#productos" style={link}>Seguros</a>
          <a href="#quienes-somos" style={link}>Nosotros</a>
          <a href="#aliados" style={link}>Aliados</a>
          <a href="#contacto" style={link}>Contacto</a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              height: 40,
              padding: '0 16px',
              borderRadius: 999,
              background: '#25D366',
              color: '#06331a',
              fontWeight: 700,
              fontSize: 13.5,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#06331a">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.22.62-1.28 1.18-1.77 1.24-.45.06-1.02.08-1.65-.1-.38-.11-.87-.28-1.5-.55-2.64-1.14-4.36-3.8-4.5-3.98-.13-.18-1.08-1.44-1.08-2.75 0-1.3.68-1.94.93-2.2.24-.27.53-.33.7-.33h.5c.16 0 .38-.03.58.44.22.53.75 1.83.82 1.96.07.13.11.29.02.47-.09.18-.13.29-.27.44-.13.16-.28.35-.4.47-.13.13-.27.27-.12.53.16.27.7 1.16 1.51 1.88 1.04.93 1.92 1.22 2.19 1.36.27.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.35-.22.58-.13.24.09 1.5.71 1.76.84.27.13.44.2.5.31.07.13.07.71-.15 1.33z" />
            </svg>
            WhatsApp
          </a>
          <a
            href="#productos"
            className="nav-cta"
            style={{
              textDecoration: 'none',
              height: 40,
              display: 'flex',
              alignItems: 'center',
              padding: '0 18px',
              borderRadius: 999,
              background: '#12435f',
              color: '#fff',
              fontWeight: 700,
              fontSize: 13.5,
            }}
          >
            Comprar seguro
          </a>
        </div>
      </div>
    </div>
  )
}
