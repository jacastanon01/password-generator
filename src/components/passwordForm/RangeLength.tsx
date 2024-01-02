import { useRequirements } from '@/context/utils';
import { Slider } from '../ui/slider';

const RangeLength = () => {
  const [state, dispatch] = useRequirements();

  function handleChange(value: number[]) {
    dispatch({
      type: 'SET_LENGTH',
      payload: value[0],
    });
  }
  return (
    <section>
      <p className='uppercase text-secondary-50 leading-normal font-medium'>
        Length:{' '}
        <span className='text-white'>{state.passwordLength}</span>
      </p>
      <div className='settings'>
        <p className='pr-2 font-bold'>4</p>
        <Slider
          value={[state.passwordLength]}
          onValueChange={handleChange}
          className='flex-1'
          max={32}
          min={4}
        />
        <p className='pl-2 font-bold'>32</p>
      </div>
    </section>
  );
};

export default RangeLength;
