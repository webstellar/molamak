module.exports = {
  siteMetadata: {
    title: `Molamak Security Services Limited`,
    description: `Longest serving security outfit`,
    author: `@tobypetez`,
    siteUrl: `https://molamaksecurityservices.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://site.molamaksecurityservices.com/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        short_name: `Molamak`,
        name: `Molamak Security Services Limited`,
        description: `The application allows you access Molamak website directly on your device.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#1A237E`,
        theme_color: `#1A237E`,
        display: `standalone`,
        icon: `src/images/molamak-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,

      options: {
        trackingId: `G-10FKWT1WSW`,
        head: true,
      },
    },
    `gatsby-plugin-styled-components`,

    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
