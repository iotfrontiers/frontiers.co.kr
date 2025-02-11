import compression from 'vite-plugin-compression2'
import { resolve } from 'pathe'
// import { copySync } from 'fs-extra'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  // devtools: { enabled: true },
  modules: ['@nuxt/devtools', '@invictus.codes/nuxt-vuetify', 'nuxt-swiper'],
  // spaLoadingTemplate: true,
  routeRules: {
    '/**': { ssr: false },
  },
  typescript: {
    strict: false,
    shim: false,
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
      },
    },
  },
  runtimeConfig: {
    notion: {
      apiSecret: process.env.NOTION_API_SECRET,
      version: process.env.NOTION_API_SECRET,
      noticeDatabaseId: process.env.NOTION_NOTICE_DATABASE_ID,
      newsDatabaseId: process.env.NOTION_NEWS_DATABASE_ID,
      pdsDatabaseId: process.env.NOTION_PDS_DATABASE_ID,
      askDatabaseId: process.env.NOTION_ASK_DATABASE_ID,
      portFolioDatabaseId: process.env.NOTION_PORTFOLIO_DATABASE_ID,
    },
    email: {
      googleSmtpUser: process.env.GOOGLE_SMTP_USER,
      googleSmtpPassword: process.env.GOOGLE_SMTP_PASSWORD,
      emailReceivers: process.env.EMAIL_RECIEVERS,
    },
    cloudinary: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      uploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET,
    },
  },
  hooks: {
    'pages:extend'(pages) {
      // console.log('pages', JSON.stringify(pages, null, 2))

      const communityPage = pages.find(p => p.name === 'community')
      if (communityPage) {
        const noticePage = communityPage.children.find(p => p.name === 'community-notice')
        if (noticePage && noticePage.children.length === 1) {
          noticePage.children[0].path = 'notice/:id()'
          communityPage.children.push(noticePage.children[0])
          noticePage.children.splice(0, 1)
        }

        const newsPage = communityPage.children.find(p => p.name === 'community-news')
        if (newsPage && newsPage.children.length === 1) {
          newsPage.children[0].path = 'news/:id()'
          communityPage.children.push(newsPage.children[0])
          newsPage.children.splice(0, 1)
        }

        // const educationPage = communityPage.children.find(p => p.name === 'community-education')
        // if (educationPage && educationPage.children.length === 1) {
        //   educationPage.children[0].path = 'education/:id()'
        //   communityPage.children.push(educationPage.children[0])
        //   educationPage.children.splice(0, 1)
        // }
      }

      const inquiryPage = pages.find(p => p.name === 'inquiry')
      if (inquiryPage) {
        const pdsPage = inquiryPage.children.find(p => p.name === 'inquiry-pds')
        if (pdsPage && pdsPage.children.length === 1) {
          pdsPage.children[0].path = 'pds/:id()'
          inquiryPage.children.push(pdsPage.children[0])
          pdsPage.children.splice(0, 1)
        }
      }

      const corpPage = pages.find(p => p.name === 'corp')
      if (corpPage) {
        const portfolioPage = corpPage.children.find(p => p.name === 'corp-portfolio')
        if (portfolioPage && portfolioPage.children.length === 1) {
          portfolioPage.children[0].path = 'portfolio/:id()'
          corpPage.children.push(portfolioPage.children[0])
          portfolioPage.children.splice(0, 1)
        }
      }
    },
    'vite:extendConfig'(config) {
      config.plugins.push(
        compression({
          include: [/\.(js)$/, /\.(css)$/, /\.(png)$/, /\.(woff)$/, /\.(woff2)$/],
          threshold: 1400,
        }),
      )
    },
    // close(nuxt) {
    //   const outputPublicDir = resolve(__dirname, './.output/public/data')
    //   const dataDir = resolve(__dirname, './data')

    //   copySync(dataDir, outputPublicDir, {
    //     overwrite: true,
    //   })
    // },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
        { content: 'website', property: 'og:type' },
        { content: 'frontierit.vercel.app', property: 'og:site:name' },
        { content: '//frontierit.vercel.app', property: 'og:url' },
        { content: 'ko_KR', property: 'og:locale' },
        { content: 'en_US', property: 'og:locale:alternate' },
        { content: '(주) 프런티어', property: 'og:title' },
        { content: 'We are IT experts. FRONTIER', property: 'og:description' },
        { content: '//frontierit.vercel.app/_nuxt/banner-top.a3296987.png', property: 'og:image' },
      ],
      title: '(주) 프런티어',
    },
  },
  vuetify: {
    moduleOptions: {
      autoImport: true,
      // styles: {
      //   configFile: '~/assets/main.scss',
      // },
    },
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
    },
  },
  // experimental: {
  //   noVueServer: true,
  // },
})
