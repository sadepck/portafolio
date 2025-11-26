import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24">
      {/* Background overlay with steampunk texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-steampunk-darker via-steampunk-dark to-steampunk-darker" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border-2 border-steampunk-brass/20 rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-steampunk-copper/20 rounded-full" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main title */}
        <h1 
          className={`font-cinzel text-4xl md:text-6xl lg:text-7xl text-steampunk-gold mb-6 tracking-wider font-bold
                     ${isLoaded ? 'animate-steam-rise' : 'opacity-0'}`}
        >
          Bienvenido a mi Taller
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`text-xl md:text-2xl text-steampunk-cream/80 mb-4 max-w-2xl mx-auto
                     ${isLoaded ? 'animate-steam-rise' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          Donde el código se convierte en arte
        </p>
        
        <p 
          className={`text-lg text-steampunk-brass mb-12 max-w-xl mx-auto
                     ${isLoaded ? 'animate-steam-rise' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          Diseño y desarrollo experiencias web únicas con la precisión de un relojero victoriano
        </p>

        {/* CTA Button */}
        <a 
          href="#sobre-mi"
          className={`btn-steampunk inline-block ${isLoaded ? 'animate-pressure' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          Explorar mi Trabajo
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-steampunk-gold" size={32} />
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-24 left-0 w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full text-steampunk-copper/30">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute top-24 right-0 w-32 h-32 transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full text-steampunk-copper/30">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
