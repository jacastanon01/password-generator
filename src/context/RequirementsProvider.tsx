import { createContext, useReducer } from 'react';

import { ActionType, RequirementStateType } from '@/types';
import { requirementsReducer } from './utils';

const defaultState: RequirementStateType = {
  password: '',
  passwordLength: 20,
  hasLowercase: true,
  hasUppercase: true,
};

export const RequirementsContext = createContext<
  | [
      RequirementStateType,
      React.Dispatch<ActionType<string | number | boolean>>
    ]
  | undefined
>(undefined);

export const RequirementsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    requirementsReducer,
    defaultState
  );

  return (
    <RequirementsContext.Provider value={[state, dispatch]}>
      {children}
    </RequirementsContext.Provider>
  );
};
