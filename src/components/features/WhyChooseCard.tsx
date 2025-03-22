
interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const WhyChooseCard = ({ title, description, icon, index }: WhyChooseCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:translate-y-[-2px]"
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-stream-red/10 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-stream-dark mb-2">{title}</h4>
      <p className="text-stream-gray">{description}</p>
    </div>
  );
};

export default WhyChooseCard;
