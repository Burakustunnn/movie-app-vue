// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{head:{
    title: 'Movie App',
    meta:[{name:"description",content:"Movie description"}],
  }},
  pages:true,
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  css: ["@/assets/style.css"],
  // router: {
  //   middleware: ['authControl']
  // }

});
