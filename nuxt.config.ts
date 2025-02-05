// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-svgo",
    "nuxt-anchorscroll",
  ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap",
        },
      ],
    },
  },
  ssr: true,
  image: { formats: ["webp", "jpeg", "png"] },
  anchorscroll: {
    hooks: [
      // Or any valid hook if needed
      // Default is `page:finish`
      "page:transition:finish",
    ],
  },
});
