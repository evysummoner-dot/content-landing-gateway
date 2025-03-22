
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const CTA = () => {
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
      className="py-20 bg-white overflow-hidden"
    >
      <div className="container px-6 lg:px-8 mx-auto">
        <div 
          className={cn(
            "max-w-4xl mx-auto bg-gradient-overlay rounded-2xl overflow-hidden shadow-xl transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="relative p-8 md:p-12">
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para acessar todo o conteúdo que você ama por apenas R$40/mês?
              </h2>
              
              <p className="text-white/80 text-lg mb-8">
                Comece agora e tenha acesso instantâneo a milhares de títulos das maiores plataformas de streaming. Cancele quando quiser.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-stream-red hover:bg-white/90 font-medium rounded-md px-8 py-6 text-lg btn-bounce flex items-center gap-2 group"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  Assinar agora
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 font-medium rounded-md px-8 py-6 text-lg"
                >
                  Saiba mais
                </Button>
              </div>
              
              <p className="text-white/60 text-sm mt-6">
                * Não é necessário cartão de crédito para começar. Teste grátis de 7 dias disponível.
              </p>
            </div>
          </div>
        </div>
        
        <div 
          className={cn(
            "mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-700 delay-200",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          {[
            {
              title: 'Suporte 24/7',
              description: 'Nossa equipe está disponível todos os dias para ajudar com qualquer dúvida ou problema técnico.',
              icon: '🛠️',
            },
            {
              title: 'Satisfação Garantida',
              description: 'Se não estiver satisfeito nos primeiros 30 dias, devolvemos seu dinheiro sem complicações.',
              icon: '✅',
            },
            {
              title: 'Atualizações Constantes',
              description: 'Novos conteúdos são adicionados diariamente, acompanhando os últimos lançamentos das plataformas.',
              icon: '🔄',
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center p-6"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="text-3xl mb-4 mx-auto">{item.icon}</div>
              <h3 className="text-xl font-semibold text-stream-dark mb-3">{item.title}</h3>
              <p className="text-stream-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
