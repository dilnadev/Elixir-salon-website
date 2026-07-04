import Nav from './components/Nav'
import Hero from './components/Hero'
import ServicesIntro from './components/ServicesIntro'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Transformations from './components/Transformations'
import Testimonial from './components/Testimonial'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary selection:text-on-primary">
      <Nav />
      <main>
        <Hero />
        <ServicesIntro />
        <Services />
        <Pricing />
        <Gallery />
        <Transformations />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
