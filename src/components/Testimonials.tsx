
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Marcelo Silva',
    role: 'Assinante há 8 meses',
    content: 'Melhor decisão que tomei! Agora assisto tudo o que quero sem precisar ficar alternando entre vários apps. A qualidade é excelente e o preço é imbatível.',
    rating: 5,
    image: '/lovable-uploads/marcelo.jpg',
  },
  {
    name: 'Ana Carolina',
    role: 'Assinante há 3 meses',
    content: 'Eu estava pagando mais de R$150 por mês com todas as assinaturas separadas. Com o TelSTREAM, tenho tudo por uma fração do preço, e a qualidade é idêntica.',
    rating: 5,
    image: '/lovable-uploads/ana.jpg',
  },
  {
    name: 'Pedro Mendes',
    role: 'Assinante há 1 ano',
    content: 'Sou o tipo de pessoa que assiste séries de diversas plataformas. O TelSTREAM simplificou minha vida e economizou meu dinheiro. Serviço impecável!',
    rating: 5,
    image: '/lovable-uploads/pedro.jpg',
  },
  {
    name: 'Juliana Costa',
    role: 'Assinante há 5 meses',
    content: 'O atendimento ao cliente é excelente. Tive algumas dúvidas iniciais e resolveram tudo rapidamente. O acesso a todo conteúdo das principais plataformas por esse preço é incrível.',
    rating: 4,
    image: '/lovable-uploads/juliana.jpg',
  },
];

const Testimonials = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-stream-darkBlue text-white overflow-hidden relative"
      id="depoimentos"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-stream-red blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-stream-blue blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700", 
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            O que nossos clientes dizem
          </h2>
          <p 
            className={cn(
              "text-white/70 text-lg transition-all duration-700 delay-100", 
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            Junte-se a milhares de assinantes satisfeitos que já estão economizando e aproveitando todo o conteúdo que amam.
          </p>
        </div>
        
        {/* Desktop testimonials */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/5 backdrop-blur-sm rounded-xl p-6 transition-all duration-700 border border-white/10 hover:border-white/20",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
                    size={18} 
                  />
                ))}
              </div>
              
              <p className="text-white/80 mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <Avatar className="w-12 h-12 border-2 border-white/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-to-br from-stream-red to-stream-blue text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile testimonials slider */}
        <div className="block md:hidden">
          <div className="relative h-auto pb-24 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10",
                  index === activeIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"} 
                      size={18} 
                    />
                  ))}
                </div>
                
                <p className="text-white/80 mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 border-2 border-white/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-stream-red to-stream-blue text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === activeIndex ? "bg-stream-red" : "bg-white/30"
                )}
              />
            ))}
          </div>
        </div>
        
        <div 
          className={cn(
            "mt-16 text-center transition-all duration-700 delay-500",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-white/90 font-medium">Avaliação média:</span>
            <div className="flex ml-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className="text-yellow-400 fill-yellow-400" 
                  size={16} 
                />
              ))}
            </div>
            <span className="ml-2 font-semibold">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
