// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/styles.scss"],
  modules: ["unplugin-icons/nuxt", "@vueuse/nuxt", "@pinia/nuxt"],
  ssr: false,
  vue: { compilerOptions: { whitespace: "preserve" } },
  app: {
    head: {
      title: "CSS Boilerplates",
    },
  },
});
