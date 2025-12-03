import { ExternalLink, Github, Eye } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [gridRef, gridVisible] = useScrollAnimation(0.1)
  const projects = [
    {
      id: 1,
      title: 'Proyecto Steampunk',
      description: 'Landing page con temática victoriana y elementos mecánicos animados.',
      image: null,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-Commerce Vintage',
      description: 'Tienda online con diseño retro y experiencia de usuario moderna.',
      image: null,
      tags: ['React', 'CSS', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Dashboard Industrial',
      description: 'Panel de control con estética de maquinaria industrial victoriana.',
      image: null,
      tags: ['JavaScript', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Artístico',
      description: 'Galería web para artistas con animaciones fluidas y elegantes.',
      image: null,
      tags: ['React', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Blog Mecánico',
      description: 'Plataforma de blog con diseño inspirado en engranajes y vapor.',
      image: null,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'App Relojería',
      description: 'Aplicación web para una tienda de relojes antiguos y modernos.',
      image: null,
      tags: ['React', 'Node.js', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="proyectos" className="py-24 relative bg-steampunk-dark/50">
      {/* Section divider top */}
      <div className="section-divider mb-16" />
      
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-steam-rise' : 'opacity-0'}`}
        >
          <h2 className="font-steampunk text-3xl md:text-4xl mb-4 text-steampunk-gold font-bold tracking-wider">
            Mis Proyectos
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-steampunk-copper" />
            <svg className={`w-6 h-6 text-steampunk-gold ${titleVisible ? 'animate-gear-reveal' : ''}`} viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
            </svg>
            <div className="w-16 h-px bg-steampunk-copper" />
          </div>
          <p className="text-steampunk-cream/70 mt-4 max-w-2xl mx-auto font-steampunk">
            Una colección de mis trabajos más destacados, cada uno creado con dedicación artesanal
          </p>
        </div>

        {/* Projects grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <article 
              key={project.id}
              className={`group card-steampunk overflow-hidden hover:border-steampunk-gold 
                       transition-all duration-500 hover:-translate-y-2 hover:shadow-xl 
                       hover:shadow-steampunk-gold/20 ${gridVisible ? 'animate-pressure' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project image */}
              <div className="relative h-48 bg-gradient-to-br from-steampunk-dark to-steampunk-darker overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Placeholder gear design */}
                    <svg className="w-24 h-24 text-steampunk-copper/30 group-hover:text-steampunk-brass/50 
                                  transition-colors duration-300 gear-rotate" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3"/>
                      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                      {[...Array(8)].map((_, i) => (
                        <rect key={i} x="46" y="10" width="8" height="12" fill="currentColor" 
                          transform={`rotate(${i * 45} 50 50)`}/>
                      ))}
                    </svg>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-steampunk-darker/80 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveUrl}
                    className="p-3 bg-steampunk-brass/20 border border-steampunk-gold rounded-full
                             hover:bg-steampunk-gold hover:text-steampunk-darker transition-all duration-300"
                    title="Ver proyecto"
                  >
                    <Eye size={20} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-3 bg-steampunk-brass/20 border border-steampunk-gold rounded-full
                             hover:bg-steampunk-gold hover:text-steampunk-darker transition-all duration-300"
                    title="Ver código"
                  >
                    <Github size={20} />
                  </a>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-steampunk-gold/20 
                              border-l-[40px] border-l-transparent" />
              </div>

              {/* Project info */}
              <div className="p-6">
                <h3 className="font-steampunk text-xl text-steampunk-gold mb-2 group-hover:text-steampunk-brass font-semibold 
                             transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-steampunk-cream/70 text-sm mb-4 line-clamp-2 font-steampunk">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs bg-steampunk-darker border border-steampunk-copper/50 
                               text-steampunk-brass font-steampunk"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="h-1 bg-gradient-to-r from-steampunk-copper via-steampunk-gold to-steampunk-copper 
                            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
