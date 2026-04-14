// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  ssr: true,

  typescript: {
    typeCheck: false,
    strict: true,
  },

  nitro: {
    preset: 'node-server',     // для Docker будет удобно
  },

  runtimeConfig: {
    // Публичные переменные (если вдруг понадобятся на клиенте)
    public: {
      apiPath: process.env.NUXT_PUBLIC_API_PATH,
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  },
})
