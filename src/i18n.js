import {createI18n} from "vue-i18n";
import en from "./locales/en.js";
import es from "./locales/es.js";
const i18n = createI18n({
    legacy: false,
    locale: en,
    fallbackLocale: "en",
    messages: {en, es}
});

export default i18n;