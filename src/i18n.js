// src/i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../src/locales/en.json'
import ru from '../src/locales/ru.json'
import kr from '../src/locales/kr.json'

const resources = {
    en: { translation: en },
    ru: { translation: ru },
    kr: { translation: kr },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ru',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
