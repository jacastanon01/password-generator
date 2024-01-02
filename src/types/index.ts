export type ActionType<T> = {
  type: string;
  payload: T;
};

export type RequirementStateType = {
  [key: string]: string | number | boolean | undefined;
  password: string;
  passwordLength: number;
  hasUppercase?: boolean;
  hasLowercase?: boolean;
  hasSymbols?: boolean;
  hasNumbers?: boolean;
};
