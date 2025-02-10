import { reactive } from 'vue';
import i18n from '@/i18n';

const { locale } = i18n.global;

export const store = reactive({
  lang: locale.value,
  changeLang(lang: 'ar' | 'fr') {
    locale.value = lang;
    this.lang = lang;
    localStorage.setItem("formatik_lang", lang);
  }
})