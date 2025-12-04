import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#1a1a1a]">
      {/* Steampunk frame - background layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/marco/95020d81d808eec8822c2607dac31d4c.jpg)',
        }}
      />
      
      {/* Scrollable content area - positioned inside the gray screen */}
      <div 
        className="absolute overflow-y-auto overflow-x-hidden screen-content"
        style={{
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '51%',
          height: '58%',
          borderRadius: '15px',
        }}
      >
        {/* Header sticky inside */}
        <Header />
        {/* Main content */}
        <main>
          <Hero />
          <AboutMe />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
