import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import { lang } from '@/App';

const loadLocaleMessages = () => {
    const locales = [{fr: fr}, {ar: ar}]
    const messages: {[k: string]: any} = {}
    locales.forEach((langs: {[k: string]: any}) => {
        const keys = Object.keys(langs)
        keys.forEach(key => {
            messages[key] = langs[key]
        })
    })
    return messages;
}

export default createI18n({
    legacy: false,
    locale: lang,
    fallbackLocale: 'ar',
    messages: loadLocaleMessages()
})