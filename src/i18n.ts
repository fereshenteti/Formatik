import { createI18n } from 'vue-i18n';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

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

const getLangFromLocalStorage = (): 'ar' | 'fr' => {
    const storageLang = localStorage.getItem("formatik_lang");
    if(!storageLang || (storageLang !== 'ar' && storageLang !== 'fr')) {
        localStorage.setItem("formatik_lang", 'ar');
        return 'ar';
    }
    return storageLang;
}

export default createI18n({
    legacy: false,
    locale: getLangFromLocalStorage(),
    fallbackLocale: 'ar',
    messages: loadLocaleMessages()
})