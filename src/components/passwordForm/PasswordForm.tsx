import RangeLength from './RangeLength';
import Settings from './Settings';
import SubmitButton from './SubmitButton';
import PasswordDisplay from './PasswordDisplay';

const PasswordForm = () => {
  return (
    <div className='mt-12 sm:w-96'>
      <RangeLength />
      <Settings />
      <SubmitButton />
      <PasswordDisplay />
    </div>
  );
};

export default PasswordForm;
