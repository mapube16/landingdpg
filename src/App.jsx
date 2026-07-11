import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import DigitalCarousel from './components/DigitalCarousel.jsx'
import CotizadorAutos from './components/CotizadorAutos.jsx'
import Contacto from './components/Contacto.jsx'
import { ComoFunciona, Faq } from './components/Extras.jsx'
import {
  Diferenciales,
  QuienesSomos,
  Aliados,
  Testimonios,
  Redes,
  CtaFinal,
  Footer,
} from './components/Sections.jsx'

export default function App() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#eef4f8' }}>
      <Nav />
      <Hero />
      <DigitalCarousel />
      <ComoFunciona />
      <CotizadorAutos />
      <Diferenciales />
      <QuienesSomos />
      <Aliados />
      <Testimonios />
      <Redes />
      <Faq />
      <Contacto />
      <CtaFinal />
      <Footer />
    </div>
  )
}
