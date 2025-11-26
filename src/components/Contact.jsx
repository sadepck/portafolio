import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [infoRef, infoVisible] = useScrollAnimation(0.2)
  const [formRef, formVisible] = useScrollAnimation(0.2)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'benjamin@ejemplo.com',
      href: 'mailto:benjamin@ejemplo.com',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+56 9 1234 5678',
      href: 'tel:+56912345678',
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Chile',
      href: null,
    },
  ]

  return (
    <section id="contacto" className="py-24 relative bg-steampunk-dark/50">
      {/* Section divider top */}
      <div className="section-divider mb-16" />
      
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-steam-rise' : 'opacity-0'}`}
        >
          <h2 className="font-cinzel text-3xl md:text-4xl mb-4 text-steampunk-gold font-bold tracking-wider">
            Contáctame
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-steampunk-copper" />
            <MessageSquare className={`w-6 h-6 text-steampunk-gold ${titleVisible ? 'animate-gear-reveal' : ''}`} />
            <div className="w-16 h-px bg-steampunk-copper" />
          </div>
          <p className="text-steampunk-cream/70 mt-4 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <div 
            ref={infoRef}
            className={`space-y-8 ${infoVisible ? 'animate-slide-brass' : 'opacity-0'}`}
          >
            <div className="card-steampunk p-8">
              <h3 className="font-cinzel text-xl text-steampunk-gold mb-6 font-semibold">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center 
                                  bg-steampunk-darker border border-steampunk-copper rounded-full">
                      <info.icon className="w-5 h-5 text-steampunk-gold" />
                    </div>
                    <div>
                      <p className="text-steampunk-brass text-sm">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-steampunk-cream hover:text-steampunk-gold transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-steampunk-cream">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block relative h-48">
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 
                            text-steampunk-copper/20 gear-rotate" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="50" r="10" fill="currentColor"/>
                {[...Array(12)].map((_, i) => (
                  <rect key={i} x="46" y="5" width="8" height="15" fill="currentColor" 
                    transform={`rotate(${i * 30} 50 50)`}/>
                ))}
              </svg>
            </div>
          </div>

          {/* Contact form */}
          <div 
            ref={formRef}
            className={`card-steampunk p-8 ${formVisible ? 'animate-slide-copper' : 'opacity-0'}`}
          >
            <h3 className="font-cinzel text-xl text-steampunk-gold mb-6 font-semibold">
              Envíame un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-steampunk-brass text-sm mb-2 font-cinzel">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-steampunk"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-steampunk-brass text-sm mb-2 font-cinzel">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-steampunk"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-steampunk-brass text-sm mb-2 font-cinzel">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-steampunk"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-steampunk-brass text-sm mb-2 font-cinzel">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-steampunk resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-steampunk w-full flex items-center justify-center gap-2 
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" 
                              strokeWidth="2" strokeDasharray="30 70"/>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {/* Success message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-500/50 text-green-400 text-center">
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
