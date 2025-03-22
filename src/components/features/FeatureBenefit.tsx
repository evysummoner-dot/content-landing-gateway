
import { Check } from 'lucide-react';

interface FeatureBenefitProps {
  text: string;
}

const FeatureBenefit = ({ text }: FeatureBenefitProps) => {
  return (
    <li className="flex items-start gap-2">
      <Check className="text-stream-red w-5 h-5 mt-0.5 flex-shrink-0" />
      <span className="text-stream-gray">{text}</span>
    </li>
  );
};

export default FeatureBenefit;
