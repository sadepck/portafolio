import { Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="relative bg-steampunk-darker border-t border-steampunk-copper/30">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-steampunk-copper via-steampunk-gold to-steampunk-copper" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Name - Left */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-cinzel text-xl text-steampunk-gold tracking-wider font-semibold">
              Benjamin Soto Vasquez
            </h3>
            <p className="text-xs text-steampunk-brass tracking-widest uppercase mt-1">
              Diseñador Web Frontend
            </p>
          </div>

          {/* Logo - Center */}
          <div className="flex-1 flex flex-col items-center">
            <img 
              src="/logo/logo-transparent.png" 
              alt="Logo Programmer" 
              className="h-16 w-auto object-contain mb-4 logo-glow"
            />
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center 
                           border border-steampunk-copper hover:border-steampunk-gold
                           text-steampunk-brass hover:text-steampunk-gold
                           transition-all duration-300 hover:bg-steampunk-gold/10"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Description - Right */}
          <div className="flex-1 text-center md:text-right">
            <p className="text-steampunk-cream/70 text-sm max-w-xs ml-auto">
              Creando experiencias web únicas con la precisión de un artesano victoriano. 
              Cada proyecto es una obra de ingeniería digital.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-steampunk-copper/50 to-transparent" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-steampunk-brass/60 text-sm">
            © {currentYear} Benjamin Soto Vasquez. Todos los derechos reservados.
          </p>
          <p className="text-steampunk-copper/40 text-xs mt-2 font-cinzel tracking-wider">
            Forjado con pasión y código
          </p>
        </div>
      </div>

      {/* Decorative corner gears */}
      <div className="absolute bottom-4 left-4 opacity-10">
        <svg className="w-16 h-16 text-steampunk-copper gear-rotate" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
          {[...Array(8)].map((_, i) => (
            <rect key={i} x="46" y="10" width="8" height="10" fill="currentColor" 
              transform={`rotate(${i * 45} 50 50)`}/>
          ))}
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 opacity-10">
        <svg className="w-12 h-12 text-steampunk-brass gear-rotate-reverse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
          {[...Array(6)].map((_, i) => (
            <rect key={i} x="46" y="10" width="8" height="10" fill="currentColor" 
              transform={`rotate(${i * 60} 50 50)`}/>
          ))}
        </svg>
      </div>
    </footer>
  )
}

export default Footer
