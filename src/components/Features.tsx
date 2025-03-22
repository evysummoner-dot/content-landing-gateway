
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, Shield, Clock, Zap, ArrowRight } from 'lucide-react';
import FeatureCard from './features/FeatureCard';
import PlatformCard from './features/PlatformCard';
import FeatureBenefit from './features/FeatureBenefit';
import WhyChooseCard from './features/WhyChooseCard';
import SectionTitle from './features/SectionTitle';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

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
  { name: 'Netflix', color: 'bg-red-600', logo: '/lovable-uploads/netflix.jpg' },
  { name: 'Disney+', color: 'bg-blue-600', logo: '/lovable-uploads/disney.jpg' },
  { name: 'Prime Video', color: 'bg-blue-900', logo: '/lovable-uploads/amazon.jpg' },
  { name: 'Sky', color: 'bg-sky-500', logo: '/lovable-uploads/sky.jpg' },
  { name: 'HBO Max', color: 'bg-purple-800', logo: '/lovable-uploads/hbo.jpg' },
  { name: 'Globoplay', color: 'bg-red-500', logo: '/lovable-uploads/globoplay.jpg' },
];

const whyChooseUs = [
  {
    title: 'Economia Real',
    description: 'Economize mais de 70% comparado às assinaturas individuais de cada plataforma.',
    icon: <TrendingUp className="text-stream-red" />,
  },
  {
    title: 'Suporte 24/7',
    description: 'Atendimento técnico disponível a qualquer hora, em português, para resolver suas dúvidas.',
    icon: <Shield className="text-stream-red" />,
  },
  {
    title: 'Sem Complicações',
    description: 'Sem necessidade de VPN ou configurações técnicas complexas. Tudo funciona imediatamente.',
    icon: <Zap className="text-stream-red" />,
  },
  {
    title: 'Sempre Atualizado',
    description: 'Conteúdo constantemente atualizado com os últimos lançamentos de todas as plataformas.',
    icon: <Clock className="text-stream-red" />,
  },
];

const benefits = [
  'Economize mais de 70% comparado às assinaturas individuais',
  'Suporte técnico 24/7 em português',
  'Sem necessidade de VPN ou configurações técnicas',
  'Atualização constante com os últimos lançamentos'
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappLink = "https://wa.me/5511958447106";
  const isMobile = useIsMobile();

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
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
      id="recursos"
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionTitle 
          title="Tudo o que você precisa em um único lugar"
          subtitle="Esqueça múltiplas assinaturas. Com TelSTREAM, você tem acesso a todo conteúdo que ama por uma fração do preço."
          visible={visible}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center mb-12 md:mb-20">
          {/* Left side - Features */}
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={activeFeature === index}
                index={index}
                visible={visible}
                onClick={() => setActiveFeature(index)}
              />
            ))}
          </div>

          {/* Right side - Platforms */}
          <div 
            className={cn(
              "bg-gradient-to-br from-gray-50 to-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-700 delay-300",
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            )}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-stream-dark mb-4 sm:mb-6 border-b pb-3 border-gray-200">
              Plataformas inclusas na sua assinatura:
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {platforms.map((platform, index) => (
                <PlatformCard
                  key={index}
                  name={platform.name}
                  color={platform.color}
                  logo={platform.logo}
                  index={index}
                />
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-stream-dark mb-3 sm:mb-4 flex items-center">
                <span className="w-1.5 h-5 bg-stream-red rounded-sm mr-2 inline-block"></span>
                Benefícios da nossa solução:
              </h4>
              
              <ul className="space-y-2 sm:space-y-3">
                {benefits.map((benefit, i) => (
                  <FeatureBenefit key={i} text={benefit} />
                ))}
              </ul>

              <div className="mt-5 sm:mt-6 pt-3 sm:pt-4">
                <Button 
                  className="w-full bg-stream-red hover:bg-stream-red/90 text-white px-4 sm:px-6 py-4 sm:py-5 rounded-md font-medium flex items-center justify-center group"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <span>Assinar agora</span>
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div 
          className={cn(
            "bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 sm:p-8 md:p-12 mt-10 md:mt-16 shadow-lg transition-all duration-700 delay-400",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="text-center mb-8 md:mb-12">
            <div className="w-16 sm:w-20 h-1 bg-stream-red mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stream-dark mb-3 sm:mb-4">
              Por que escolher TelSTREAM?
            </h3>
            <p className="text-stream-gray text-sm sm:text-base max-w-2xl mx-auto">
              Nossa solução foi projetada para oferecer a melhor experiência de streaming, 
              com foco na simplicidade, economia e qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <WhyChooseCard 
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
                index={index}
              />
            ))}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stream-red font-medium hover:underline"
            >
              <span>Fale com um consultor agora mesmo</span>
              <ArrowRight size={isMobile ? 14 : 16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
