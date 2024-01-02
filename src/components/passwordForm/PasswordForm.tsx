import RangeLength from './RangeLength';
import Settings from './Settings';
import PasswordDisplay from './PasswordDisplay';
import StrengthDisplay from './StrengthDisplay';
import SubmitButtonTooltip from './SubmitButtonTooltip';

const PasswordForm = () => {
  return (
    <div className='sm:w-96'>
      <StrengthDisplay />
      <RangeLength />
      <Settings />
      <SubmitButtonTooltip />
      <PasswordDisplay />
    </div>
  );
};

export default PasswordForm;
