
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Mensal',
    price: 40,
    billing: 'por mês',
    features: [
      'Acesso a todos os canais e plataformas',
      'Até 2 dispositivos simultâneos',
      'Conteúdo em HD',
      'Cancele quando quiser',
      'Suporte básico',
    ],
    missingFeatures: [
      'Conteúdo em 4K',
      'Download para offline',
    ],
    popular: false,
    color: 'bg-stream-blue',
  },
  {
    name: 'Trimestral',
    price: 35,
    billing: 'por mês',
    features: [
      'Acesso a todos os canais e plataformas',
      'Até 3 dispositivos simultâneos',
      'Conteúdo em HD e 4K',
      'Cancele quando quiser',
      'Suporte prioritário',
      'Download para offline',
    ],
    missingFeatures: [],
    popular: true,
    color: 'bg-stream-red',
  },
  {
    name: 'Anual',
    price: 30,
    billing: 'por mês',
    features: [
      'Acesso a todos os canais e plataformas',
      'Até 4 dispositivos simultâneos',
      'Conteúdo em HD e 4K',
      'Cancele quando quiser',
      'Suporte VIP 24/7',
      'Download para offline',
    ],
    missingFeatures: [],
    popular: false,
    color: 'bg-stream-blue',
  },
];

const Pricing = () => {
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

  return (
    <section 
      ref={sectionRef}
      id="pricing" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-stream-dark mb-4 transition-all duration-700", 
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            Escolha o plano ideal para você
          </h2>
          <p 
            className={cn(
              "text-stream-gray text-lg transition-all duration-700 delay-100", 
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            Todos os planos incluem acesso completo a todas as plataformas. 
            Quanto mais tempo você assina, mais economia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 relative",
                plan.popular ? "md:-mt-4 md:mb-4 ring-2 ring-stream-red" : "",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 bg-stream-red text-white text-center text-sm py-1 font-medium">
                  Mais popular
                </div>
              )}
              
              <div className={cn(
                "px-6 py-8",
                plan.popular ? "pt-12" : "pt-8"
              )}>
                <h3 className="text-xl font-semibold text-stream-dark">
                  Plano {plan.name}
                </h3>
                
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-stream-dark">R${plan.price}</span>
                  <span className="ml-2 text-stream-gray">{plan.billing}</span>
                </div>
                
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={cn(
                        "w-5 h-5 mt-0.5 flex-shrink-0",
                        plan.popular ? "text-stream-red" : "text-stream-blue"
                      )} />
                      <span className="text-stream-gray">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.missingFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 opacity-60">
                      <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                      <span className="text-stream-gray line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="px-6 pb-8">
                <Button 
                  className={cn(
                    "w-full py-6 text-white btn-bounce text-lg",
                    plan.popular 
                      ? "bg-stream-red hover:bg-stream-red/90" 
                      : "bg-stream-blue hover:bg-stream-blue/90"
                  )}
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  {plan.popular ? 'Assinar agora' : 'Começar'}
                </Button>
                
                <p className="text-xs text-center mt-4 text-stream-gray">
                  Sem compromisso, cancele a qualquer momento
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={cn(
            "mt-16 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 transition-all duration-700 delay-500",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          <h3 className="text-xl font-semibold text-stream-dark mb-4 text-center">
            Perguntas frequentes sobre os planos
          </h3>
          
          <div className="space-y-4">
            {[
              {
                q: 'Posso cancelar a qualquer momento?',
                a: 'Sim, todos os planos podem ser cancelados a qualquer momento, sem multas ou taxas adicionais.'
              },
              {
                q: 'Qual a forma de pagamento?',
                a: 'Aceitamos cartões de crédito, débito, Pix e boleto bancário para sua conveniência.'
              },
              {
                q: 'Preciso de algum equipamento especial?',
                a: 'Não, o serviço funciona em qualquer dispositivo com acesso à internet: Smart TVs, smartphones, tablets e computadores.'
              }
            ].map((item, i) => (
              <div key={i} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                <h4 className="font-medium text-stream-dark mb-2">{item.q}</h4>
                <p className="text-stream-gray">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
