import { useRequirements } from '@/context/utils';
import { generatePassword } from '@/lib/utils';
import { useToast } from '../ui/use-toast';

const SubmitButton = () => {
  const [state, dispatch] = useRequirements();
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
    <section
      onClick={handleClick}
      className='mt-8 p-4 rounded-lg bg-gradient-to-r text-xl font-medium tracking-wide text-center from-primary to-primary-700 hover:cursor-pointer hover:opacity-90'
    >
      Generate password
    </section>
  );
};

export default SubmitButton;
