import { useState } from 'react'
import {
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { useReveal } from '../anim.js'
import { Ring, Kicker } from '../theme.jsx'

// ————— Cómo funciona (3 pasos con conector punteado) —————
const steps = [
  {
    Icon: ClipboardDocumentCheckIcon,
    title: 'Elige o cotiza',
    desc: 'Compra Viaje o Arrendamiento 100% en línea, o pide la cotización de otro producto en segundos.',
  },
  {
    Icon: ChatBubbleLeftRightIcon,
    title: 'Asesoría experta',
    desc: 'Un asesor de DPG te acompaña y compara entre 27 aseguradoras para traerte la mejor opción.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Quedas protegido',
    desc: 'Emites tu póliza y quedas cubierto — sin filas, sin papeleo y con respaldo de principio a fin.',
  },
]

export function ComoFunciona() {
  const gridRef = useReveal({ y: 40 })
  return (
    <div style={{ background: '#eef4f8', padding: '100px 28px', position: 'relative', overflow: 'hidden' }}>
      <Ring size={360} opacity={0.05} style={{ top: -70, right: -70 }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{ maxWidth: 620, margin: '0 auto 60px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Kicker>En 3 pasos</Kicker>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 38px)', color: '#0d3346', margin: 0, lineHeight: 1.1 }}>
            Así de fácil es <span style={{ color: '#1899D6' }}>protegerte</span>
          </h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* conector punteado (solo desktop) */}
          <div
            className="step-line"
            style={{ position: 'absolute', top: 38, left: '16%', right: '16%', borderTop: '2px dashed #c9d6dc' }}
          />
          <div ref={gridRef} className="steps-grid">
            {steps.map(({ Icon, title, desc }, i) => (
              <div key={title} style={{ textAlign: 'center', position: 'relative' }}>
                <div
                  style={{
                    width: 76,
                    height: 76,
                    borderRadius: '50%',
                    background: '#fff',
                    border: '1px solid #e3ebee',
                    boxShadow: '0 12px 30px rgba(13,51,70,.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    position: 'relative',
                  }}
                >
                  <Icon style={{ width: 34, height: 34, color: '#1899D6' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: '#9BBF1D',
                      color: '#1c2b06',
                      fontWeight: 800,
                      fontSize: 13,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 style={{ fontSize: 19, color: '#0d3346', margin: '0 0 8px' }}>{title}</h3>
                <p style={{ fontSize: 14, color: '#5c7280', lineHeight: 1.6, maxWidth: 300, margin: '0 auto' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ————— FAQ (acordeón) —————
const faqs = [
  {
    q: '¿Necesito ir presencialmente para comprar un seguro?',
    a: 'No. Los seguros de Viaje y Arrendamiento se contratan 100% en línea. Para otros productos, un asesor te acompaña de forma remota por WhatsApp, teléfono o correo.',
  },
  {
    q: '¿Cuánto tarda la cotización de mi seguro de auto?',
    a: 'Recibes respuesta en menos de 24 horas. Un asesor especializado te contacta con la mejor opción entre varias aseguradoras.',
  },
  {
    q: '¿Con cuántas aseguradoras trabajan?',
    a: 'Con 27 compañías aseguradoras. Comparamos entre todas para conseguirte la cobertura y el precio que mejor se ajustan a ti.',
  },
  {
    q: '¿Qué productos puedo comprar en línea ahora mismo?',
    a: 'Seguro de Viaje y Arrendamiento Residencial, de forma inmediata. Los demás productos se gestionan por cotización con un asesor.',
  },
  {
    q: '¿La asesoría tiene algún costo?',
    a: 'No. La asesoría de DPG es totalmente gratuita: te acompañamos antes, durante y después de la compra de tu póliza.',
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div style={{ background: '#ffffff', padding: '100px 28px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ marginBottom: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Kicker>Dudas</Kicker>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 36px)', color: '#0d3346', margin: 0 }}>
            Preguntas <span style={{ color: '#1899D6' }}>frecuentes</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: '1px solid #e2ecf1',
                  borderRadius: 14,
                  overflow: 'hidden',
                  boxShadow: isOpen ? '0 12px 30px rgba(13,51,70,.08)' : 'none',
                  transition: 'box-shadow .3s ease',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '20px 22px',
                    background: 'none',
                    border: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontSize: 15.5,
                    fontWeight: 700,
                    color: '#0d3346',
                    fontFamily: 'inherit',
                  }}
                >
                  {item.q}
                  <ChevronDownIcon
                    style={{
                      width: 20,
                      height: 20,
                      color: '#1899D6',
                      flex: 'none',
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform .3s ease',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 240 : 0,
                    overflow: 'hidden',
                    transition: 'max-height .35s ease',
                  }}
                >
                  <p style={{ margin: 0, padding: '0 22px 22px', fontSize: 14.5, lineHeight: 1.65, color: '#4a636e' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
