import { useRequirements } from '@/context/utils';
import { calculateStrength, generatePassword } from '@/lib/utils';
import { useToast } from '../ui/use-toast';

const SubmitButton = () => {
  const [state, dispatch] = useRequirements();
  const passwordStrength = calculateStrength(state);
  const { toast } = useToast();

  function handleClick() {
    const newPassword = generatePassword(state);
    if (!newPassword) {
      toast({
        variant: 'destructive',
        title: 'please select at least one setting',
      });
      return;
    }

    dispatch({
      type: 'SET_PASSWORD',
      payload: newPassword,
    });
  }

  return (
    <button
      onClick={handleClick}
      disabled={passwordStrength === 'weak'}
      className='mt-8 p-4 w-full rounded-lg bg-gradient-to-r text-xl font-medium tracking-wide text-center from-primary to-primary-700 hover:opacity-90'
    >
      Generate password
    </button>
  );
};

export default SubmitButton;
