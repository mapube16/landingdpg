import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import DigitalCarousel from './components/DigitalCarousel.jsx'
import CotizadorAutos from './components/CotizadorAutos.jsx'
import Contacto from './components/Contacto.jsx'
import { ComoFunciona, Faq } from './components/Extras.jsx'
import { Transition, SEQ } from './theme.jsx'
import {
  Diferenciales,
  QuienesSomos,
  Aliados,
  Testimonios,
  Redes,
  CtaFinal,
  Footer,
} from './components/Sections.jsx'

// Secuencia de color en arco: navy → aclara → blanco (centro) → oscurece → navy.
// Las <Transition> funden un fondo en el siguiente para que no haya saltos bruscos.
export default function App() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: SEQ.t3 }}>
      <Nav />
      <Hero />
      <DigitalCarousel />

      <Transition from={SEQ.navy} to={SEQ.t1} />
      <ComoFunciona />
      <CotizadorAutos />
      <Diferenciales />
      <QuienesSomos />
      <Aliados />
      <Testimonios />
      <Redes />
      <Faq />
      <Contacto />
      <Transition from={SEQ.t1} to={SEQ.navy} />

      <CtaFinal />
      <Footer />
    </div>
  )
}
