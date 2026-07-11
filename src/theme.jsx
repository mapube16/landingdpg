// Sistema de diseño DPG — tokens compartidos para dar sincronía a toda la landing.

// Ritmo de fondos: oscuro solo en hero y CTA final; el resto alterna estos dos claros.
export const BG_DARK = '#0d3346'
export const BG_TINT = '#eef4f8' // claro frío (complementa el azul de marca)
export const BG_WHITE = '#ffffff'

export const INK = '#0d3346'
export const MUTED = '#5c7280'
export const BLUE = '#1899D6'
export const GREEN = '#538F32'
export const LIME = '#9BBF1D'

// Card unificada (misma familia en toda la página)
export const CARD = {
  background: '#fff',
  border: '1px solid #e7edf1',
  borderRadius: 20,
  boxShadow: '0 10px 30px rgba(13,51,70,.06)',
}

// Botones — un solo sistema de pills
export const pillPrimary = {
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  height: 52,
  padding: '0 28px',
  borderRadius: 999,
  background: BLUE,
  color: '#fff',
  fontWeight: 700,
  fontSize: 15,
  boxShadow: '0 10px 24px rgba(24,153,214,.35)',
  cursor: 'pointer',
  border: 0,
}
export const pillDark = { ...pillPrimary, background: BG_DARK, boxShadow: '0 10px 24px rgba(13,51,70,.25)' }
export const pillOutline = {
  ...pillPrimary,
  background: 'transparent',
  color: BG_DARK,
  border: `2px solid ${BG_DARK}`,
  boxShadow: 'none',
}

export const kicker = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontSize: 13,
  fontWeight: 700,
  color: BLUE,
  textTransform: 'uppercase',
  letterSpacing: '.6px',
  marginBottom: 12,
}

// Motivo de marca: el anillo real del logo como marca de agua decorativa.
export function Ring({ size = 240, opacity = 0.06, style }) {
  return (
    <img
      src="/dpg-ring.svg"
      alt=""
      aria-hidden="true"
      style={{ position: 'absolute', width: size, height: 'auto', opacity, pointerEvents: 'none', ...style }}
    />
  )
}

// Kicker con el anillo como viñeta (motivo recurrente sutil).
export function Kicker({ children, color = BLUE }) {
  return (
    <div style={{ ...kicker, color }}>
      <img src="/dpg-ring.svg" alt="" aria-hidden="true" style={{ width: 16, height: 16 }} />
      {children}
    </div>
  )
}
