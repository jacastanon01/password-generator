import { settingOptions } from '@/constants';
import { Switch } from '../ui/switch';
import {
  handleSettingsAction,
  useRequirements,
} from '@/context/utils';

const Settings = () => {
  const [state, dispatch] = useRequirements();

  return (
    <section className='mt-6'>
      <p className='uppercase text-secondary-50 leading-normal font-medium'>
        Settings
      </p>
      <div className='flex flex-col gap-2'>
        {settingOptions.map((item) => (
          <div className='settings flex justify-between' key={item}>
            <p className='text-base font-medium sm:text-lg'>
              Include {item}
            </p>
            <Switch
              checked={!!state[`has${item}`]}
              onCheckedChange={() =>
                dispatch(
                  handleSettingsAction(item, !state[`has${item}`])
                )
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Settings;
