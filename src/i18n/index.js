import { createI18n } from "vue-i18n";
import zh from "./language/zh-TW.json";
import en from "./language/en-US.json";
import ja from "./language/ja-JP.json";

const i18n = createI18n({
  legacy: false,
  locale: "en-US",
  fallbackLocale: "en-US",
  messages: {
    "zh-TW": zh,
    "en-US": en,
    "ja-JP": ja
  }
});

export default i18n;