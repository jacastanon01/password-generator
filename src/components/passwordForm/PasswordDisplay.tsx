import { ClipboardCopy } from 'lucide-react';
import { useToast } from '../ui/use-toast';

import { useRequirements } from '@/context/utils';

const PasswordDisplay = () => {
  const [state] = useRequirements();
  const { toast } = useToast();

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(state.password);
      toast({
        title: 'Password has been saved to clipboard!',
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Error saving to clipboard!',
      });
    }
  }

  return (
    <section className='settings mt-2 border-2 border-secondary-50 flex justify-center items-center h-16 gap-1 sm:gap-2'>
      <p className='sm:text-xl font-medium overflow-x-scroll'>
        {state.password || ''}
      </p>
      <div className='ml-auto hover:cursor-pointer'>
        <ClipboardCopy onClick={copyToClipboard} />
      </div>
    </section>
  );
};

export default PasswordDisplay;
