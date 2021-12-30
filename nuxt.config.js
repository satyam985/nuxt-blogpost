export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Satyam BlogPost",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "This is my first Nuxt App",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blogpost-3b1e0-default-rtdb.firebaseio.com",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blogpost-3b1e0-default-rtdb.firebaseio.com",
    fbAPIKey: "AIzaSyCzO7vOSkhKhGqzbscb_29GodeAX3t3T3k",
  },
  transition: {
    name: "fade",
    mode: "out-in",
  },
};
