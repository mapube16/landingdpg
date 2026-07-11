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

// Escala secuencial de fondos (arco): oscuro → aclara → blanco al centro → oscurece → oscuro.
export const SEQ = {
  dark: '#0a2836',
  navy: '#0d3346',
  t1: '#dbe8f0', // tinte más profundo (justo después del navy)
  t2: '#e7f0f6',
  t3: '#f0f6f9',
  t4: '#f8fbfc',
  white: '#ffffff', // centro, lo más claro
}

// Banda de transición: funde un color en el siguiente para que no haya saltos bruscos.
export function Transition({ from, to, height = 120 }) {
  return <div aria-hidden="true" style={{ height, background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)` }} />
}

// Motivo de marca: anillo decorativo (arcos limpios → nítido a cualquier tamaño).
// OJO: NO usar /dpg-ring.svg en grande — es un calco de baja resolución y se pixela.
export function Ring({ size = 240, opacity = 0.06, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      style={{ position: 'absolute', opacity, pointerEvents: 'none', ...style }}
    >
      <g strokeWidth="9" strokeLinecap="round">
        <path d="M87.42 56.60 A38 38 0 0 1 56.60 87.42" stroke={BLUE} />
        <path d="M43.40 87.42 A38 38 0 0 1 12.58 56.60" stroke={LIME} />
        <path d="M12.58 43.40 A38 38 0 0 1 43.40 12.58" stroke={BLUE} />
        <path d="M56.60 12.58 A38 38 0 0 1 87.42 43.40" stroke={LIME} />
      </g>
      <circle cx="50" cy="50" r="13" stroke={BLUE} strokeWidth="5" />
    </svg>
  )
}

// Kicker con el anillo como viñeta (motivo recurrente, mismo trazo que el watermark).
export function Kicker({ children, color = BLUE }) {
  return (
    <div style={{ ...kicker, color }}>
      <svg width="15" height="15" viewBox="0 0 100 100" fill="none" aria-hidden="true" style={{ flex: 'none' }}>
        <g strokeWidth="11" strokeLinecap="round">
          <path d="M87.42 56.60 A38 38 0 0 1 56.60 87.42" stroke={BLUE} />
          <path d="M43.40 87.42 A38 38 0 0 1 12.58 56.60" stroke={LIME} />
          <path d="M12.58 43.40 A38 38 0 0 1 43.40 12.58" stroke={BLUE} />
          <path d="M56.60 12.58 A38 38 0 0 1 87.42 43.40" stroke={LIME} />
        </g>
      </svg>
      {children}
    </div>
  )
}
