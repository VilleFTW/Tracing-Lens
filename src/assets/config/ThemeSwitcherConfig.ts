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
  { name: 'Deutsch', flag: '🇩🇪', value: 'de', dir: 'ltl' },
  { name: 'Română', flag: '🇷🇴', value: 'ro', dir: 'ltl' },
  { name: 'Suomi', flag: '🇫🇮', value: 'fi', dir: 'ltl' },
  { name: 'Español', flag: '🇪🇸', value: 'es', dir: 'ltl' },
  { name: 'Lietuvos', flag: '🇱🇹', value: 'lt', dir: 'ltl' },
  { name: 'عربي', flag: '🇸🇦', value: 'ar', dir: 'rtl' },
];
