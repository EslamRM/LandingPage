export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        name: "English",
        file: "en.json",
        iso: "en-US",
        dir: "ltr",
      },
      {
        code: "ar-JO",
        name: "Arabic",
        file: "ar.json",
        iso: "ar-JO",
        dir: "rtl",
      },
    ],
    defaultLocale: "ar-JO",
    detectBrowserLanguage: false,
  },
});
