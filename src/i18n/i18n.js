
import { createI18n } from 'vue-i18n';
import { messages } from './messages.js';

const i18n = createI18n({
    
    locale: 'ru',
    fallbackLocale: 'ru', 
    messages,
});

export default i18n;