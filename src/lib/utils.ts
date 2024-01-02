import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { characterSetMappings } from '@/constants';
import { RequirementStateType } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generatePassword(settings: RequirementStateType) {
  const characterSets: string[] = characterSetMappings
    .filter(({ property }) => settings[property])
    .map((charSet) => charSet.chars);

  if (!characterSets.length) return null;

  let password = '';
  for (let i = 0; i < settings.passwordLength; i++) {
    const randomCharacterSet =
      characterSets[Math.floor(Math.random() * characterSets.length)];
    const randomCharacter =
      randomCharacterSet[
        Math.floor(Math.random() * randomCharacterSet.length)
      ];
    password += randomCharacter;
  }

  return password;
}

export function calculateStrength(
  settings: RequirementStateType
): 'weak' | 'medium' | 'strong' {
  if (settings.passwordLength < 8) return 'weak';

  const passwordSettings = characterSetMappings.filter(
    ({ property }) => settings[property]
  );

  if (passwordSettings.length > 2) {
    if (
      passwordSettings.some(
        ({ property }) =>
          property === 'hasSymbols' || property === 'hasNumbers'
      )
    ) {
      if (settings.passwordLength >= 16) {
        return 'strong';
      }
      return 'medium';
    } else {
      return 'medium';
    }
  } else {
    return settings.passwordLength >= 16 ? 'medium' : 'weak';
  }
}
