
import { ArrowRight, Play, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const whatsappLink = "https://wa.me/5511958447106";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stream-darkBlue">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-stream-darkBlue/90 to-stream-darkBlue/70"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full container mx-auto flex flex-col justify-center px-6 lg:px-0">
        <div className="max-w-3xl mt-20 md:mt-0">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-stream-red/20 text-stream-red font-medium py-1 px-3 rounded-full text-sm inline-block mb-4">
              Todos os seus streamings favoritos em um só lugar
            </span>
          </div>
          
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <span className="block">Todo o entretenimento que</span>
            <span className="block">você ama por apenas</span>
            <span className="text-stream-red text-glow">R$40/mês</span>
          </h1>
          
          <p className={`text-white/80 text-lg md:text-xl max-w-xl mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Acesse milhares de filmes, séries e conteúdos exclusivos das melhores plataformas em um só lugar: Netflix, Disney+, Amazon Prime, Sky e muito mais.
          </p>
          
          <ul className={`space-y-2 mb-8 transition-all duration-700 delay-250 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {['Economia de mais de R$180 por mês', 'Sem contratos ou fidelidade', 'Funciona em qualquer dispositivo'].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-white/90">
                <Check className="text-stream-red" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <Button 
              className="bg-stream-red hover:bg-stream-red/90 text-white font-medium rounded-md px-8 py-6 text-lg btn-bounce flex items-center gap-2 group"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              Assinar agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-medium rounded-md px-8 py-6 text-lg flex items-center gap-2">
              <div className="bg-white rounded-full p-1 mr-2">
                <Play className="text-stream-red w-4 h-4 fill-current" />
              </div>
              Ver demonstração
            </Button>
          </div>

          <div className={`mt-12 flex items-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex -space-x-2">
              {[
                '/lovable-uploads/avatar1.jpg',
                '/lovable-uploads/avatar2.jpg',
                '/lovable-uploads/avatar3.jpg',
                '/lovable-uploads/avatar4.jpg'
              ].map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img src={src} alt={`User ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-white/80 text-sm">
              <span className="text-white font-semibold">+10 mil</span> pessoas já assinaram este mês
            </p>
          </div>

          <div className={`mt-8 py-3 px-4 bg-white/10 rounded-lg inline-flex items-center transition-all duration-700 delay-450 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="animate-pulse inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-white/90 text-sm">Oferta por tempo limitado - Aproveite enquanto está disponível!</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-full h-32 bg-gradient-to-t from-stream-darkBlue to-transparent"></div>
    </section>
  );
};

export default Hero;
