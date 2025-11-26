import Header from './components/Header'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-steampunk-darker relative overflow-hidden">
      {/* Background decorative gears */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <svg className="absolute -top-20 -left-20 w-96 h-96 gear-rotate" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#B5A642" strokeWidth="2"/>
          {[...Array(12)].map((_, i) => (
            <rect key={i} x="45" y="5" width="10" height="15" fill="#B5A642" 
              transform={`rotate(${i * 30} 50 50)`}/>
          ))}
        </svg>
        <svg className="absolute top-1/3 -right-32 w-[500px] h-[500px] gear-rotate-reverse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#B87333" strokeWidth="2"/>
          {[...Array(16)].map((_, i) => (
            <rect key={i} x="45" y="5" width="10" height="12" fill="#B87333" 
              transform={`rotate(${i * 22.5} 50 50)`}/>
          ))}
        </svg>
        <svg className="absolute bottom-20 left-1/4 w-72 h-72 gear-rotate" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#CD7F32" strokeWidth="2"/>
          {[...Array(8)].map((_, i) => (
            <rect key={i} x="46" y="10" width="8" height="10" fill="#CD7F32" 
              transform={`rotate(${i * 45} 50 50)`}/>
          ))}
        </svg>
      </div>

      {/* Main content */}
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
