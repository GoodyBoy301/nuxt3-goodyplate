import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/mdc",
    "@nuxt/image",
    "nuxt-svgo",
    [
      "nuxt-mail",
      {
        message: {
          to: "lilmalixx@gmail.com",
        },
        smtp: {
          host: "smtp.resend.com",
          port: 465,
          auth: {
            user: "resend",
            pass: "re_CX3DMHEU_4br2qKHySSB8kWjB1KcJKq71",
          },
        },
      },
    ],
  ],
})
