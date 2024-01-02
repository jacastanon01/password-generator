import { useContext } from 'react';

import { ActionType, RequirementStateType } from '@/types';
import { RequirementsContext } from './RequirementsProvider';

export const requirementsReducer = (
  state: RequirementStateType,
  action: ActionType<string | boolean | number>
): RequirementStateType => {
  const toggleRegex = /^TOGGLE_([A-Z]+)$/; // finds string that starts with TOGGLE_ and then is followed by uppercase letters
  const match = action.type.match(toggleRegex);

  if (match) {
    const setting = // capitalize item
      match[1].charAt(0).toUpperCase() +
      match[1].slice(1).toLowerCase();

    return {
      ...state,
      [`has${setting}`]: !state[`has${setting}`], // Toggle the boolean property
    };
  }

  if (action.type === 'SET_LENGTH') {
    return {
      ...state,
      passwordLength: action.payload as number,
    };
  }

  if (action.type === 'SET_PASSWORD') {
    return {
      ...state,
      password: action.payload as string,
    };
  }

  return state;
};

export const handleSettingsAction = (
  setting: string,
  payload: boolean
): ActionType<boolean> => ({
  type: `TOGGLE_${setting.toLocaleUpperCase()}`,
  payload,
});

export const useRequirements = () => {
  const context = useContext(RequirementsContext);

  if (!context) {
    throw new Error(
      'useRequirements must be used within a RequirementsProvider'
    );
  }
  return context;
};
