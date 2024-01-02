import RangeLength from './RangeLength';
import Settings from './Settings';
import SubmitButton from './SubmitButton';
import PasswordDisplay from './PasswordDisplay';
import StrengthDisplay from './StrengthDisplay';

const PasswordForm = () => {
  return (
    <div className='sm:w-96'>
      <StrengthDisplay />
      <RangeLength />
      <Settings />
      <SubmitButton />
      <PasswordDisplay />
    </div>
  );
};

export default PasswordForm;
