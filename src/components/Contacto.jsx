import { useState } from 'react'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { waLink, MAP_EMBED_URL } from '../data.jsx'
import { Kicker } from '../theme.jsx'

const iconStyle = { width: 20, height: 20, color: '#0E7ABF' }

const inputStyle = {
  height: 48,
  border: '1.5px solid #dbe3e6',
  borderRadius: 12,
  padding: '0 14px',
  fontSize: 14,
  fontFamily: 'Mulish',
}
const iconBox = {
  width: 38,
  height: 38,
  borderRadius: 9,
  background: '#dfe9ee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const contactRow = { display: 'flex', alignItems: 'center', gap: 12 }
const contactText = { fontSize: 15, fontWeight: 600, color: '#0d3346' }

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true) // TODO: cablear envío de email al backend
  }

  return (
    <div id="contacto" style={{ background: '#dbe8f0', padding: '90px 28px' }}>
      <div className="row-2 sec-pad" style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', gap: 56 }}>
        <div style={{ flex: 1 }}>
          <Kicker>Hablemos</Kicker>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 34px)', color: '#0d3346', margin: '0 0 16px' }}>¿Tienes otro producto en mente?</h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#33474f', margin: '0 0 26px', maxWidth: 420 }}>
            Escríbenos y un asesor de DPG te ayudará con la póliza que necesites, sea cual sea.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={contactRow}>
              <div style={iconBox}><MapPinIcon style={iconStyle} /></div>
              <span style={contactText}>Cra 15 #4N-44, Armenia, Quindío</span>
            </div>
            <div style={contactRow}>
              <div style={iconBox}><PhoneIcon style={iconStyle} /></div>
              <span style={contactText}>+57 317 371 7828</span>
            </div>
            <div style={contactRow}>
              <div style={iconBox}><EnvelopeIcon style={iconStyle} /></div>
              <span style={contactText}>innovaciondpg@gmail.com</span>
            </div>
            <div style={contactRow}>
              <div style={iconBox}><GlobeAltIcon style={iconStyle} /></div>
              <span style={contactText}>www.dpgseguros.com</span>
            </div>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            style={{
              marginTop: 26,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              height: 50,
              padding: '0 22px',
              borderRadius: 999,
              background: '#25D366',
              color: '#06331a',
              fontWeight: 700,
              fontSize: 14.5,
            }}
          >
            Escríbenos por WhatsApp
          </a>
        </div>

        <div
          className="float-card"
          style={{
            flex: 1.1,
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 20px 50px rgba(13,51,70,.12)',
            padding: 32,
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: '#e2f0fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1899D6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, color: '#0d3346', margin: '0 0 10px' }}>¡Gracias, {form.nombre}!</h3>
              <p style={{ fontSize: 14.5, color: '#4a636e' }}>
                Recibimos tu solicitud, un asesor te contactará muy pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <input required aria-label="Nombre completo" placeholder="Nombre completo" value={form.nombre} onChange={set('nombre')} style={inputStyle} />
                <input required type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" value={form.correo} onChange={set('correo')} style={inputStyle} />
                <input required type="tel" aria-label="Teléfono" placeholder="Teléfono" value={form.telefono} onChange={set('telefono')} style={inputStyle} />
                <textarea
                  aria-label="¿Qué producto te interesa?" placeholder="¿Qué producto te interesa?"
                  value={form.mensaje}
                  onChange={set('mensaje')}
                  style={{ height: 96, border: '1.5px solid #dbe3e6', borderRadius: 12, padding: '12px 14px', fontSize: 14, fontFamily: 'Mulish', resize: 'none' }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  height: 52,
                  marginTop: 16,
                  border: 0,
                  borderRadius: 999,
                  background: '#1899D6',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15.5,
                  cursor: 'pointer',
                }}
              >
                Enviar solicitud
              </button>
              <div style={{ textAlign: 'center', fontSize: 11.5, color: '#8a9aa1', marginTop: 10 }}>
                Tu mensaje llega directo a innovaciondpg@gmail.com
              </div>
            </form>
          )}
        </div>
      </div>

      {/* mapa de la oficina — facade: carga el iframe pesado solo al hacer clic */}
      <div style={{ maxWidth: 1240, margin: '36px auto 0' }}>
        <MapEmbed />
      </div>
    </div>
  )
}

function MapEmbed() {
  const [show, setShow] = useState(false)

  if (show) {
    return (
      <iframe
        title="Ubicación de DPG Seguros"
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ width: '100%', height: 320, border: 0, borderRadius: 20, boxShadow: '0 20px 50px rgba(13,51,70,.12)' }}
      />
    )
  }

  return (
    <button
      className="map-facade"
      onClick={() => setShow(true)}
      aria-label="Cargar mapa interactivo de la oficina"
      style={{
        position: 'relative',
        width: '100%',
        height: 320,
        border: 0,
        cursor: 'pointer',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(13,51,70,.12)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        background: '#e8e6e1',
      }}
    >
      {/* mapa real de la oficina como preview */}
      <img
        src="/map-preview.jpg"
        alt="Mapa de la oficina de DPG Seguros en Armenia"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(13,51,70,.15) 0%, rgba(13,51,70,.55) 100%)' }} />

      {/* pin con pulso */}
      <div style={{ position: 'relative', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ position: 'absolute', width: 72, height: 72, borderRadius: '50%', background: 'rgba(24,153,214,.45)', animation: 'mapPulse 2.2s ease-out infinite' }} />
        <span
          style={{
            position: 'relative',
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'rgba(24,153,214,.9)',
            border: '2px solid rgba(255,255,255,.9)',
            boxShadow: '0 8px 24px rgba(0,0,0,.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MapPinIcon style={{ width: 32, height: 32, color: '#fff' }} />
        </span>
      </div>
      <div style={{ position: 'relative', fontSize: 18, fontWeight: 700, color: '#fff', textShadow: '0 2px 12px rgba(0,0,0,.5)' }}>
        Nuestra oficina en Armenia
      </div>
      <div
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          height: 44,
          padding: '0 22px',
          borderRadius: 999,
          background: '#fff',
          color: '#12435f',
          fontWeight: 700,
          fontSize: 14,
          boxShadow: '0 8px 20px rgba(0,0,0,.25)',
        }}
      >
        Ver mapa interactivo
        <ArrowRightIcon style={{ width: 16, height: 16 }} />
      </div>
    </button>
  )
}
