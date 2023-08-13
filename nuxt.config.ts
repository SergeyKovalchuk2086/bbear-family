// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "netlify",
  },

  devtools: { enabled: true },

  experimental: {
    renderJsonPayloads: false,
  },

  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  css: ["~/assets/main/index.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styleResources/index.scss";',
        },
      },
    },
  },
});
