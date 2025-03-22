
interface PlatformCardProps {
  name: string;
  color: string;
  logo: string;
  index: number;
}

const PlatformCard = ({ name, color, logo, index }: PlatformCardProps) => {
  return (
    <div 
      className="bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2 sm:gap-3 card-hover transform hover:translate-y-[-2px]"
      style={{ animationDelay: `${400 + index * 100}ms` }}
    >
      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${color} flex items-center justify-center text-white overflow-hidden`}>
        {logo ? (
          <img src={logo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs">{name.charAt(0)}</span>
        )}
      </div>
      <span className="font-medium text-stream-dark text-sm sm:text-base">{name}</span>
    </div>
  );
};

export default PlatformCard;
