const { flatMap } = require('lodash')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const fetch = require("node-fetch");

module.exports = {
  siteMetadata: {
    title: 'Gatsby starter ecommerce',
    subtitle:'fetch data',
    author: 'Parminder Sanghera',
    description: 'A starter e-commerce site made using Gatsby.',
    siteUrl: 'https://parmsang.github.io/gatsby-starter-ecommerce/',
  },
  pathPrefix: '/gatsby-starter-ecommerce',
  plugins: [

    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
          key: `AIzaSyCAKYwzvX26frpBq3Wi_d483YybzulqaLw`,
          center: `30.476779,-91.161143`,
      },
  },

    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_APIKEY,
          authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
          databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
          projectId: process.env.GATSBY_FIREBASE_PROJECTID,
          storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
          appId: process.env.GATSBY_FIREBASE_APPID
        }
      }
    },



    {
      resolve: '@moltin/gatsby-source-moltin',
      options: {
        client_id:
          process.env.MOLTIN_CLIENT_ID ||
          'EdP3Gi1agyUF3yFS7Ngm8iyodLgbSR3wY4ceoJl0d2',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Price"],
        secretKey: 'sk_test_51IGhToG3l6YaloTgdDGmKANMJI2BIzPoYA0PzqZtvSPS2QNCEZMnUlBTdUBJdpggwvekuvTT3hYA2xyLeN5PODOn00oUV07CKP',
        downloadFiles: false,
      }
    },    
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Shop App',
        short_name: 'Shop App',
        start_url: '/gatsby-starter-ecommerce/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
