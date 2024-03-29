import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/vi.json';
import viTranslations from './locales/en.json';
import LocalStorageHelper, { LocalStorageName } from '../helpers/localstorage.helper';
import { SystemLanguage } from '../config/constants';

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      [SystemLanguage.en]: {
        translation: enTranslations,
      },
      [SystemLanguage.vi]: {
        translation: viTranslations,
      },
    },
    lng: LocalStorageHelper?.instance?.getLocalStorage(LocalStorageName.i18n) ?? SystemLanguage.en, // default language
    fallbackLng: SystemLanguage.en, // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;