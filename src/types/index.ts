export enum actionEnum {
  INCLUDE_NUMBERS,
  INCLUDE_SYMBOLS,
  INCLUDE_LOWER,
  INCLUDE_UPPER,
  SET_LENGTH,
  SET_PASSWORD,
}
export enum ActionEnum {
  TOGGLE_NUMBERS,
  TOGGLE_SYMBOLS,
  TOGGLE_LOWERCASE,
  TOGGLE_UPPERCASE,
  SET_LENGTH,
  SET_PASSWORD,
}

export type ActionType<T> = {
  type: string;
  payload: T;
};

export type RequirementStateType = {
  password: string;
  passwordLength: number;
  hasUppercase?: boolean;
  hasLowercase?: boolean;
  hasSymbols?: boolean;
  hasNumbers?: boolean;
  [key: string]: string | number | boolean | undefined;
};

export type RequirementsStateType<S, N, B> = {
  password: S;
  passwordLength: N;
  hasUppercase?: B;
  hasLowercase?: B;
  hasSymbols?: B;
  hasNumbers?: B;
};
