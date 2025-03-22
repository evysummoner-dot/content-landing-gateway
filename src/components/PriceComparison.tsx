
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const PriceComparison = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    { name: 'Netflix', price: 39.90 },
    { name: 'Disney+', price: 33.90 },
    { name: 'Amazon Prime Video', price: 14.90 },
    { name: 'Sky', price: 139.90 },
  ];

  const totalIndividual = services.reduce((acc, service) => acc + service.price, 0);
  const telstreamPrice = 40;
  const savings = totalIndividual - telstreamPrice;

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-stream-darkBlue/5 overflow-hidden"
      id="comparison"
    >
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
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

        <div className="max-w-3xl mx-auto">
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
                    <span className="text-white text-lg">{service.name}</span>
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
                    Economize mais de R$180 por mês com a assinatura TelSTREAM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
