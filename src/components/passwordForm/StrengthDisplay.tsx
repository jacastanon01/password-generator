import { useRequirements } from '@/context/utils';
import { calculateStrength } from '@/lib/utils';

const StrengthDisplay = () => {
  const [state] = useRequirements();
  const passwordStrength = calculateStrength(state);

  const color =
    passwordStrength === 'weak'
      ? 'text-red-600'
      : passwordStrength === 'medium'
      ? 'text-yellow-400'
      : 'text-primary';
  return (
    <p
      className={`text-xl mt-4 mb-2 font-medium w-full text-center uppercase ${color}`}
    >
      Strength: {passwordStrength}
    </p>
  );
};

export default StrengthDisplay;
