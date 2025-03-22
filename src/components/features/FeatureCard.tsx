
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  isActive: boolean;
  index: number;
  visible: boolean;
  onClick: () => void;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  isActive, 
  index, 
  visible, 
  onClick 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl transition-all duration-500 cursor-pointer relative",
        isActive 
          ? "bg-gradient-to-r from-white to-gray-50 shadow-lg scale-105 z-10" 
          : "bg-white hover:bg-gray-50",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${100 + index * 100}ms` }}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-stream-red/10 text-xl">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-stream-dark mb-2">
            {title}
          </h3>
          <p className="text-stream-gray">
            {description}
          </p>
        </div>
      </div>
      {isActive && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-white transform rotate-45 border-r border-t border-gray-100 hidden lg:block"></div>
      )}
    </div>
  );
};

export default FeatureCard;
