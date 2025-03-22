
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PriceComparison = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappLink = "https://wa.me/5511958447106";

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

    return () => observer.disconnect();
  }, []);

  const services = [
    { name: 'Netflix', price: 39.90, icon: '/lovable-uploads/netflix-icon.jpg' },
    { name: 'Disney+', price: 33.90, icon: '/lovable-uploads/disney-icon.jpg' },
    { name: 'Amazon Prime Video', price: 14.90, icon: '/lovable-uploads/amazon-icon.jpg' },
    { name: 'Sky', price: 139.90, icon: '/lovable-uploads/sky-icon.jpg' },
    { name: 'HBO Max', price: 34.90, icon: '/lovable-uploads/hbo-icon.jpg' },
  ];

  const totalIndividual = services.reduce((acc, service) => acc + service.price, 0);
  const telstreamPrice = 40;
  const savings = totalIndividual - telstreamPrice;
  const savingsPercent = Math.round((savings / totalIndividual) * 100);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-stream-darkBlue/5 overflow-hidden"
      id="comparison"
    >
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span 
            className={cn(
              "bg-stream-red/10 text-stream-red font-medium py-1 px-3 rounded-full text-sm inline-block mb-4 transition-all duration-700",
              visible ? "opacity-100" : "opacity-0"
            )}
          >
            Economize mais de {savingsPercent}%
          </span>
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold text-stream-dark mb-4 transition-all duration-700",
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            Compare e economize
          </h2>
          <p
            className={cn(
              "text-stream-gray text-lg transition-all duration-700 delay-100",
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            Veja quanto você economiza ao assinar o TelSTREAM em vez de contratar 
            cada serviço individualmente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left Side - Comparison Table */}
          <div 
            className={cn(
              "bg-gradient-to-br from-stream-darkBlue to-purple-900 rounded-2xl shadow-xl overflow-hidden transition-all duration-700",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <div className="p-8 md:p-10">
              <h3 className="text-xl text-white font-semibold mb-6 text-center">
                Compare os preços individuais:
              </h3>
              
              <div className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center border-b border-white/10 pb-3"
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
                        {service.icon ? (
                          <img src={service.icon} alt={service.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-white font-medium text-xs">{service.name.charAt(0)}</span>
                        )}
                      </div>
                      <span className="text-white text-lg">{service.name}</span>
                    </div>
                    <span className="text-white font-medium">
                      R${service.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                ))}
                
                <div className="flex justify-between items-center border-b border-white/10 pb-3 pt-2">
                  <span className="text-white font-semibold text-lg">Total Individual</span>
                  <span className="text-white font-bold text-lg">
                    R${totalIndividual.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                
                <div className="flex justify-between items-center border-b border-white/10 pb-3 pt-2">
                  <span className="text-white font-semibold text-lg">TelSTREAM</span>
                  <span className="text-white font-bold text-lg">
                    R${telstreamPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <span className="text-green-400 font-semibold text-lg">Você economiza</span>
                  <span className="text-green-400 font-bold text-lg">
                    R${savings.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>
              
              <div className="mt-8 bg-white/10 rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-white/90">
                    Acesso a todos os conteúdos das plataformas em um único serviço
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-green-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p className="text-white/90">
                    Economize mais de R${savings.toFixed(0)} por mês com a assinatura TelSTREAM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Value Proposition */}
          <div
            className={cn(
              "bg-white rounded-2xl shadow-xl p-8 md:p-10 flex flex-col justify-between transition-all duration-700 delay-200",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <div>
              <h3 className="text-xl font-semibold text-stream-dark mb-6">
                Com TelSTREAM você recebe:
              </h3>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Todas as plataformas de streaming em um único lugar',
                  'Economia de mais de R$' + savings.toFixed(0) + ' por mês',
                  'Qualidade HD e 4K em todos os conteúdos',
                  'Até 4 dispositivos simultâneos no plano anual',
                  'Suporte técnico em português 24/7',
                  'Atualização constante de conteúdos',
                  'Sem necessidade de configurações complexas'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-stream-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="text-stream-red w-3 h-3" />
                    </div>
                    <span className="text-stream-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6">
              <div className="bg-stream-red/5 border border-stream-red/20 rounded-lg p-4 mb-6">
                <p className="text-stream-red font-medium text-center">
                  Oferta por tempo limitado! Garanta o seu acesso hoje mesmo.
                </p>
              </div>
              
              <Button 
                className="w-full py-6 bg-stream-red hover:bg-stream-red/90 text-white font-medium text-lg btn-bounce flex items-center justify-center gap-2 group"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                Assinar agora e economizar
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs text-center mt-4 text-stream-gray">
                Sem compromisso, cancele a qualquer momento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
