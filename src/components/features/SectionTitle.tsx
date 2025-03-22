
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  visible: boolean;
  delay?: number;
}

const SectionTitle = ({ title, subtitle, visible, delay = 0 }: SectionTitleProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
      <h2 
        className={cn(
          "text-2xl sm:text-3xl md:text-4xl font-bold text-stream-dark mb-3 md:mb-4 transition-all duration-700", 
          visible ? "opacity-100" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: delay ? `${delay}ms` : '' }}
      >
        {title}
      </h2>
      <p 
        className={cn(
          "text-stream-gray text-base sm:text-lg transition-all duration-700 delay-100 px-4 sm:px-0", 
          visible ? "opacity-100" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: delay ? `${delay + 100}ms` : '' }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
