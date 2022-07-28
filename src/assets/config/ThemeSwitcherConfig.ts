export enum ColorBlindMode {
  NORMAL = 'normal',
  PROTANOPIA = 'protanopia',
  DEUTERANOPIA = 'deuteranopia',
  TRITANOPIA = 'tritanopia',
}

// Respecting  ISO-639-1 language code parameters wd
export const countries = [
  { name: 'English', flag: '🇬🇧', value: 'en', dir: 'ltl' },
  { name: 'Nederlands', flag: '🇳🇱', value: 'nl', dir: 'ltl' },
  { name: 'Română', flag: '🇷🇴', value: 'ro', dir: 'ltl' },
  { name: 'Suomi', flag: '🇫🇮', value: 'fi', dir: 'ltl' },
  { name: 'Español', flag: '🇪🇸', value: 'es', dir: 'ltl' },
  { name: 'عربي', flag: '🇸🇦', value: 'ar', dir: 'rtl' },
];
