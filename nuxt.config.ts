// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  ssr: true,

  typescript: {
    typeCheck: false,
    strict: true,
  },

  modules: ['@nuxtjs/mdc', '@nuxt/ui' ],

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

  vite: {
    optimizeDeps: {
      include: [
        '@tiptap/extension-emoji',
        '@tiptap/extension-text-align',
        'tiptap-extension-code-block-shiki',
        '@tiptap/core',
        '@tiptap/vue-3',
        '@ai-sdk/vue',
        '@tiptap/pm/view',
        '@tiptap/pm/state',
        '@vueuse/core',
      ]
    }
  },
})