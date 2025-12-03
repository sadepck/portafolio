import { useState } from 'react'
import { User, Upload, Camera } from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const AboutMe = () => {
  const [profileImage, setProfileImage] = useState(null)
  const [titleRef, titleVisible] = useScrollAnimation(0.3)
  const [photoRef, photoVisible] = useScrollAnimation(0.2)
  const [descRef, descVisible] = useScrollAnimation(0.2)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <section id="sobre-mi" className="py-24 relative">
      {/* Section divider top */}
      <div className="section-divider mb-16" />
      
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-steam-rise' : 'opacity-0'}`}
        >
          <h2 className="font-steampunk text-3xl md:text-4xl mb-4 text-steampunk-gold font-bold tracking-wider">
            Sobre Mí
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-steampunk-copper" />
            <div className="w-3 h-3 rotate-45 border border-steampunk-gold" />
            <div className="w-16 h-px bg-steampunk-copper" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo upload area */}
          <div 
            ref={photoRef}
            className={`flex justify-center ${photoVisible ? 'animate-slide-brass' : 'opacity-0'}`}
          >
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-steampunk-brass/50 rounded-lg transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-steampunk-copper/50 rounded-lg transform -rotate-3" />
              
              {/* Photo container */}
              <div className="relative w-72 h-96 bg-steampunk-dark border-4 border-steampunk-copper overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Benjamin Soto Vasquez" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-steampunk-dark to-steampunk-darker">
                    <User className="text-steampunk-brass/50 mb-4" size={80} />
                    <p className="text-steampunk-brass/50 text-sm text-center px-4">
                      Tu foto aquí
                    </p>
                  </div>
                )}
                
                {/* Upload overlay */}
                <label className="absolute inset-0 flex flex-col items-center justify-center 
                                bg-steampunk-darker/80 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 cursor-pointer">
                  <Camera className="text-steampunk-gold mb-2" size={40} />
                  <span className="text-steampunk-gold text-sm font-steampunk">Subir Foto</span>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-steampunk-gold" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-steampunk-gold" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-steampunk-gold" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-steampunk-gold" />
              </div>

              {/* Decorative screws */}
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-steampunk-brass border border-steampunk-gold flex items-center justify-center">
                <div className="w-2 h-0.5 bg-steampunk-dark" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-steampunk-brass border border-steampunk-gold flex items-center justify-center">
                <div className="w-2 h-0.5 bg-steampunk-dark" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-steampunk-brass border border-steampunk-gold flex items-center justify-center">
                <div className="w-2 h-0.5 bg-steampunk-dark" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-steampunk-brass border border-steampunk-gold flex items-center justify-center">
                <div className="w-2 h-0.5 bg-steampunk-dark" />
              </div>
            </div>
          </div>

          {/* Description */}
          <div 
            ref={descRef}
            className={`card-steampunk p-8 ${descVisible ? 'animate-slide-copper' : 'opacity-0'}`}
          >
            <h3 className="font-steampunk text-2xl text-steampunk-gold mb-6 font-semibold">
              Benjamin Soto Vasquez
            </h3>
            
            <div className="space-y-4 text-steampunk-cream/90 leading-relaxed font-steampunk">
              <p className="font-steampunk">
                ¡Hola! Soy un <span className="text-steampunk-gold">Diseñador Web Frontend</span> apasionado 
                por crear experiencias digitales únicas y memorables. Como un artesano del código, 
                combino creatividad con precisión técnica para dar vida a sitios web que no solo 
                funcionan perfectamente, sino que también cautivan visualmente.
              </p>
              
              <p className="font-steampunk">
                Mi enfoque se inspira en la era victoriana del steampunk: donde la elegancia del 
                pasado se encuentra con la innovación del futuro. Cada proyecto que emprendo es 
                tratado como una obra de ingeniería artística, donde cada engranaje (línea de código) 
                tiene su propósito y contribuye al funcionamiento perfecto del todo.
              </p>
              
              <p className="font-steampunk">
                Me especializo en transformar ideas en realidades digitales, creando 
                <span className="text-steampunk-brass"> landing pages</span> que convierten visitantes 
                en clientes y experiencias web que dejan una impresión duradera.
              </p>
            </div>

            {/* Skills badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Creatividad', 'Precisión', 'Innovación', 'Pasión'].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-1 bg-steampunk-darker border border-steampunk-copper 
                           text-steampunk-brass text-sm font-steampunk tracking-wider"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
