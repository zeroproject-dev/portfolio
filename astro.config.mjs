import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://zeroproject.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      es: "en",
    },
  },
});
