import { useState } from 'react'
import { Kicker } from '../theme.jsx'

const inputStyle = {
  height: 46,
  border: '1.5px solid #dce6dc',
  borderRadius: 9,
  padding: '0 14px',
  fontSize: 14,
  fontFamily: 'Mulish',
}

const bullet = { display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: '#2f4a38', fontWeight: 600 }
const dot = { width: 8, height: 8, borderRadius: '50%', background: '#538F32' }

export default function CotizadorAutos() {
  const [form, setForm] = useState({
    nombre: '', cedula: '', fechaNacimiento: '', placa: '', telefono: '', correo: '', zona: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true) // TODO: cablear envío de email al backend
  }

  return (
    <div id="cotizador-autos" style={{ background: '#e7f0f6', padding: '90px 28px' }}>
      <div className="row-2 sec-pad" style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', gap: 56, alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <Kicker color="#538F32">Seguro para autos</Kicker>
          <h2 style={{ fontSize: 'clamp(26px, 5vw, 38px)', color: '#0d3346', margin: '0 0 16px', lineHeight: 1.08 }}>
            Cotiza tu seguro de auto en minutos
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#3d5a48', maxWidth: 420, margin: '0 0 22px' }}>
            Cuéntanos sobre tu vehículo y un asesor especializado de DPG te contactará con la mejor opción, sin filas ni
            papeleo.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={bullet}><span style={dot} /> Respuesta en menos de 24 horas</div>
            <div style={bullet}><span style={dot} /> Asesoría de un experto, sin costo</div>
            <div style={bullet}><span style={dot} /> Comparamos entre 27 aseguradoras</div>
          </div>
          <img
            src="/photos/auto.jpg"
            alt="Conductor tranquilo junto a su carro asegurado"
            style={{ width: '100%', maxWidth: 460, height: 200, objectFit: 'cover', borderRadius: 18, marginTop: 26, boxShadow: '0 16px 40px rgba(13,51,70,.15)', display: 'block' }}
          />
        </div>

        <div
          className="float-card"
          style={{
            flex: 1.15,
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 20px 50px rgba(83,143,50,.15)',
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
                  background: '#e6f2df',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#538F32" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, color: '#0d3346', margin: '0 0 10px' }}>¡Listo, {form.nombre}!</h3>
              <p style={{ fontSize: 14.5, color: '#4a636e', lineHeight: 1.5 }}>
                Un asesor de DPG te contactará pronto a {form.telefono} para tu cotización del vehículo con placa{' '}
                {form.placa}.
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <input required aria-label="Nombre completo" placeholder="Nombre completo" value={form.nombre} onChange={set('nombre')} style={inputStyle} />
                <input required aria-label="Cédula" placeholder="Cédula" value={form.cedula} onChange={set('cedula')} style={inputStyle} />
                {/* type=date no muestra placeholder: arranca como texto y al enfocarlo abre el selector nativo */}
                <input
                  required
                  type="text"
                  aria-label="Fecha de nacimiento"
                  placeholder="Fecha de nacimiento"
                  value={form.fechaNacimiento}
                  onChange={set('fechaNacimiento')}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => {
                    if (!e.target.value) e.target.type = 'text'
                  }}
                  style={inputStyle}
                />
                <input required aria-label="Placa del vehículo" placeholder="Placa del vehículo" value={form.placa} onChange={set('placa')} style={{ ...inputStyle, textTransform: 'uppercase' }} />
                <input required type="tel" aria-label="Teléfono o WhatsApp" placeholder="Teléfono / WhatsApp" value={form.telefono} onChange={set('telefono')} style={inputStyle} />
                <input required type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" value={form.correo} onChange={set('correo')} style={inputStyle} />
              </div>
              <select
                required
                value={form.zona}
                onChange={set('zona')}
                style={{
                  width: '100%',
                  height: 46,
                  border: '1.5px solid #dce6dc',
                  borderRadius: 9,
                  padding: '0 14px',
                  fontSize: 14,
                  marginTop: 14,
                  color: '#33473f',
                  fontFamily: 'Mulish',
                  background: '#fff',
                }}
              >
                <option value="">Zona de circulación del vehículo</option>
                <option value="bogota">Bogotá</option>
                <option value="medellin">Medellín</option>
                <option value="cali">Cali</option>
                <option value="barranquilla">Barranquilla</option>
                <option value="otra">Otra ciudad</option>
              </select>
              <button
                type="submit"
                style={{
                  width: '100%',
                  height: 52,
                  marginTop: 18,
                  border: 0,
                  borderRadius: 999,
                  background: '#538F32',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15.5,
                  cursor: 'pointer',
                }}
              >
                Solicitar cotización
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
