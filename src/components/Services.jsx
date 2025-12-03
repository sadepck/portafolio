import { Layout, Code, Palette, Wrench } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Services = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [serviceRef, serviceVisible] = useScrollAnimation(0.2)
  const [techRef, techVisible] = useScrollAnimation(0.2)
  const services = [
    {
      icon: Layout,
      title: 'Landing Pages',
      description: 'Diseño y desarrollo de páginas de aterrizaje efectivas que convierten visitantes en clientes. Cada landing page está optimizada para capturar la atención y generar resultados.',
      features: ['Diseño atractivo', 'Optimización SEO', 'Alta conversión', 'Responsive'],
    },
  ]

  // Iconos SVG estilo steampunk
  const SteampunkGear = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-steampunk-gold">
      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="4"/>
      <circle cx="50" cy="50" r="8" fill="currentColor"/>
      {[...Array(8)].map((_, i) => (
        <rect key={i} x="46" y="15" width="8" height="15" rx="2" fill="currentColor" 
          transform={`rotate(${i * 45} 50 50)`}/>
      ))}
    </svg>
  )

  const SteampunkValve = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-steampunk-gold">
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="4"/>
      <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="3"/>
      <rect x="20" y="46" width="60" height="8" rx="2" fill="currentColor"/>
      <circle cx="50" cy="50" r="5" fill="currentColor"/>
    </svg>
  )

  const SteampunkPiston = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 text-steampunk-gold">
      <rect x="35" y="15" width="30" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="4"/>
      <rect x="40" y="55" width="20" height="30" fill="currentColor"/>
      <circle cx="50" cy="35" r="8" fill="currentColor"/>
      <rect x="30" y="10" width="40" height="8" rx="2" fill="currentColor"/>
      <rect x="42" y="80" width="16" height="10" rx="2" fill="currentColor"/>
    </svg>
  )

  const technologies = [
    {
      name: 'HTML',
      icon: SteampunkValve,
      description: 'Estructura semántica y accesible',
      level: 90,
    },
    {
      name: 'CSS',
      icon: SteampunkGear,
      description: 'Estilos modernos y animaciones',
      level: 85,
    },
    {
      name: 'JavaScript',
      icon: SteampunkPiston,
      description: 'Interactividad y dinamismo',
      level: 80,
    },
  ]

  return (
    <section id="servicios" className="py-24 relative">
      {/* Section divider top */}
      <div className="section-divider mb-16" />
      
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-steam-rise' : 'opacity-0'}`}
        >
          <h2 className="font-steampunk text-3xl md:text-4xl mb-4 text-steampunk-gold font-bold tracking-wider">
            Servicios
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-steampunk-copper" />
            <Wrench className={`w-6 h-6 text-steampunk-gold ${titleVisible ? 'animate-gear-reveal' : ''}`} />
            <div className="w-16 h-px bg-steampunk-copper" />
          </div>
          <p className="text-steampunk-cream/70 mt-4 max-w-2xl mx-auto font-steampunk">
            Lo que puedo hacer por ti y las herramientas que domino
          </p>
        </div>

        {/* Main service - Landing Pages */}
        <div 
          ref={serviceRef}
          className={`max-w-4xl mx-auto mb-20 ${serviceVisible ? 'animate-pressure' : 'opacity-0'}`}
        >
          {services.map((service) => (
            <div 
              key={service.title}
              className="card-steampunk p-8 md:p-12 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 
                            bg-gradient-to-br from-steampunk-brass to-steampunk-copper 
                            rounded-full border-2 border-steampunk-gold">
                <service.icon className="w-10 h-10 text-steampunk-darker" />
              </div>
              
              <h3 className="font-steampunk text-2xl md:text-3xl text-steampunk-gold mb-4 font-semibold">
                {service.title}
              </h3>
              
              <p className="text-steampunk-cream/80 text-lg mb-8 max-w-2xl mx-auto font-steampunk">
                {service.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {service.features.map((feature) => (
                  <div 
                    key={feature}
                    className="p-4 bg-steampunk-darker/50 border border-steampunk-copper/30"
                  >
                    <span className="text-steampunk-brass font-steampunk text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div ref={techRef} className="max-w-5xl mx-auto">
          <h3 className={`font-steampunk text-2xl text-steampunk-gold text-center mb-12 font-semibold ${techVisible ? 'animate-flicker' : 'opacity-0'}`}>
            Tecnologías que Domino
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className={`card-steampunk p-6 group hover:border-steampunk-gold transition-all duration-300 ${techVisible ? 'animate-slide-brass' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Tech icon */}
                <div className="flex justify-center mb-4">
                  <tech.icon />
                </div>
                
                {/* Tech name */}
                <h4 className="font-steampunk text-xl text-steampunk-gold text-center mb-2 font-semibold">
                  {tech.name}
                </h4>
                
                {/* Description */}
                <p className="text-steampunk-cream/70 text-sm text-center mb-6 font-steampunk">
                  {tech.description}
                </p>

                {/* Skill bar */}
                <div className="relative h-4 bg-steampunk-darker border border-steampunk-copper overflow-hidden">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-steampunk-copper to-steampunk-gold
                             transition-all duration-1000 ease-out"
                    style={{ width: `${tech.level}%` }}
                  />
                  {/* Decorative rivets */}
                  <div className="absolute top-1/2 left-2 w-2 h-2 -translate-y-1/2 rounded-full bg-steampunk-brass/50" />
                  <div className="absolute top-1/2 right-2 w-2 h-2 -translate-y-1/2 rounded-full bg-steampunk-brass/50" />
                </div>
                <p className="text-right text-steampunk-brass text-sm mt-2 font-steampunk">
                  {tech.level}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative gears */}
        <div className="flex justify-center mt-16 gap-4 opacity-30">
          <svg className="w-12 h-12 text-steampunk-copper gear-rotate" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4"/>
            {[...Array(8)].map((_, i) => (
              <rect key={i} x="46" y="8" width="8" height="12" fill="currentColor" 
                transform={`rotate(${i * 45} 50 50)`}/>
            ))}
          </svg>
          <svg className="w-8 h-8 text-steampunk-brass gear-rotate-reverse mt-4" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4"/>
            {[...Array(6)].map((_, i) => (
              <rect key={i} x="46" y="8" width="8" height="12" fill="currentColor" 
                transform={`rotate(${i * 60} 50 50)`}/>
            ))}
          </svg>
          <svg className="w-10 h-10 text-steampunk-gold gear-rotate" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4"/>
            {[...Array(10)].map((_, i) => (
              <rect key={i} x="46" y="8" width="8" height="12" fill="currentColor" 
                transform={`rotate(${i * 36} 50 50)`}/>
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Services
