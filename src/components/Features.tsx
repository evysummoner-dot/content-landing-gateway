
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const features = [
  {
    title: 'Todo o Conteúdo Premium',
    description: 'Acesse centenas de canais e milhares de títulos sob demanda dos maiores estúdios e fornecedores de conteúdo.',
    icon: '🎬',
  },
  {
    title: 'Múltiplos Dispositivos',
    description: 'Assista no seu celular, tablet, computador, smart TV ou qualquer outro dispositivo compatível simultaneamente.',
    icon: '📱',
  },
  {
    title: 'Sem Contratos',
    description: 'Cancele quando quiser. Sem taxas ocultas, sem compromissos de longo prazo. Apenas uma assinatura mensal simples.',
    icon: '📝',
  },
  {
    title: 'Qualidade HD e 4K',
    description: 'Imagem em alta definição, com suporte a 4K em títulos selecionados para uma experiência visual incrível.',
    icon: '✨',
  },
];

const platforms = [
  { name: 'Netflix', color: 'bg-red-600' },
  { name: 'Disney+', color: 'bg-blue-600' },
  { name: 'Prime Video', color: 'bg-blue-900' },
  { name: 'Sky', color: 'bg-sky-500' },
  { name: 'HBO Max', color: 'bg-purple-800' },
  { name: 'Globoplay', color: 'bg-red-500' },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

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

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-white overflow-hidden"
    >
      <div className="container px-6 lg:px-8 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold text-stream-dark mb-4 transition-all duration-700", 
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            Tudo o que você precisa em um único lugar
          </h2>
          <p 
            className={cn(
              "text-stream-gray text-lg transition-all duration-700 delay-100", 
              visible ? "opacity-100" : "opacity-0 translate-y-8"
            )}
          >
            Esqueça múltiplas assinaturas. Com TelSTREAM, você tem acesso a todo conteúdo que ama por uma fração do preço.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "p-6 rounded-xl transition-all duration-500 cursor-pointer relative",
                  activeFeature === index 
                    ? "bg-gradient-to-r from-white to-gray-50 shadow-lg scale-105 z-10" 
                    : "bg-white hover:bg-gray-50",
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-stream-red/10 text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stream-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-stream-gray">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {activeFeature === index && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white transform rotate-45 border-r border-t border-gray-100 hidden lg:block"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Platforms */}
          <div 
            className={cn(
              "bg-gray-50 p-8 rounded-2xl shadow-xl transition-all duration-700 delay-300",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <h3 className="text-xl font-semibold text-stream-dark mb-6">
              Plataformas inclusas na sua assinatura:
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {platforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-3 card-hover"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`w-8 h-8 rounded-full ${platform.color} flex items-center justify-center text-white text-xs`}>
                    {platform.name.charAt(0)}
                  </div>
                  <span className="font-medium text-stream-dark">{platform.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-stream-dark mb-4">
                Por que escolher TelSTREAM?
              </h4>
              
              <ul className="space-y-3">
                {[
                  'Economize mais de 70% comparado às assinaturas individuais',
                  'Suporte técnico 24/7 em português',
                  'Sem necessidade de VPN ou configurações técnicas',
                  'Atualização constante com os últimos lançamentos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="text-stream-red w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-stream-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
