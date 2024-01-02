import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '../ui/tooltip';
import SubmitButton from '../passwordForm/SubmitButton';
import { useRequirements } from '@/context/utils';
import { calculateStrength } from '@/lib/utils';

const SubmitButtonTooltip = () => {
  const [state] = useRequirements();
  const passwordStrength = calculateStrength(state);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span tabIndex={0}>
            <SubmitButton passwordStrength={passwordStrength} />
          </span>
        </TooltipTrigger>
        {passwordStrength === 'weak' && (
          <TooltipContent sideOffset={10}>
            <p>Select stronger settings to generate a password</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default SubmitButtonTooltip;
