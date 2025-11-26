import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contáctame', href: '#contacto' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-steampunk-darker/95 backdrop-blur-md shadow-lg shadow-steampunk-copper/20' 
          : 'bg-transparent'
      }`}
    >
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-steampunk-copper via-steampunk-gold to-steampunk-copper" />
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Name - Left */}
          <div className="flex-1">
            <h1 className="font-cinzel text-xl md:text-2xl text-steampunk-gold tracking-wider font-semibold">
              Benjamin Soto Vasquez
            </h1>
            <p className="text-xs text-steampunk-brass tracking-widest uppercase">
              Diseñador Web Frontend
            </p>
          </div>

          {/* Logo - Center */}
          <div className="flex-1 flex justify-center">
            <a href="#" className="block">
              <img 
                src="/logo/image_1_1764191550567.jpg" 
                alt="Logo Programmer" 
                className="h-16 md:h-20 w-auto object-contain logo-glow hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Navigation - Right */}
          <nav className="flex-1 hidden md:flex justify-end">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="relative font-cinzel text-steampunk-cream hover:text-steampunk-gold 
                             uppercase tracking-wider text-sm transition-colors duration-300
                             after:content-[''] after:absolute after:bottom-0 after:left-0 
                             after:w-0 after:h-0.5 after:bg-steampunk-gold 
                             after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-steampunk-gold p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-steampunk-copper/30">
            <ul className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block font-cinzel text-steampunk-cream hover:text-steampunk-gold 
                             uppercase tracking-wider text-center py-2 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Decorative bottom border */}
      <div className="h-px bg-gradient-to-r from-transparent via-steampunk-brass to-transparent" />
    </header>
  )
}

export default Header
