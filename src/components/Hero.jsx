import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-[60vh] flex items-center justify-center relative py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Main title */}
        <h1 
          className={`font-steampunk text-2xl md:text-4xl lg:text-5xl text-steampunk-gold mb-4 tracking-wider
                     ${isLoaded ? 'animate-steam-rise' : 'opacity-0'}`}
        >
          Bienvenido a mi Taller
        </h1>
        
        {/* Subtitle */}
        <p 
          className={`font-steampunk text-base md:text-lg text-steampunk-cream/80 mb-3 max-w-xl mx-auto
                     ${isLoaded ? 'animate-steam-rise' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          Donde el código se convierte en arte
        </p>
        
        <p 
          className={`font-steampunk text-sm md:text-base text-steampunk-brass mb-6 max-w-md mx-auto
                     ${isLoaded ? 'animate-steam-rise' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}
        >
          Diseño y desarrollo experiencias web únicas con la precisión de un relojero victoriano
        </p>

        {/* Scroll indicator */}
        <div className="mb-3 flex justify-center animate-bounce">
          <ChevronDown className="text-steampunk-gold" size={24} />
        </div>

        {/* CTA Button */}
        <a 
          href="#sobre-mi"
          className={`btn-steampunk inline-block text-sm ${isLoaded ? 'animate-pressure' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          Explorar mi Trabajo
        </a>
      </div>
    </section>
  )
}

export default Hero
