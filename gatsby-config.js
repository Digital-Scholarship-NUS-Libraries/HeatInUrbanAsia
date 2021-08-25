module.exports = {
  siteMetadata: {
    title: `Heat in Urban Asia`,
    description: `for SEO`,
    author: `Asia Research Institute - NUS Libraries`,
      siteUrl: `https://libds.nus.edu.sg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-source-google-docs",
      options: {
        folder: "1FZ4PlHetvvpseOmV-R1LX-HOx5piD1dk",
        createPages: true,
        debug: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // You need some transformations?
          // Checkout https://www.gatsbyjs.com/plugins/?=gatsby-remark
          // And pick-up some plugins
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1400,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          breakpoints: [576, 768, 992, 1200, 1400],
          backgroundColor: `transparent`,
        }
      }
    },
    `gatsby-plugin-react-leaflet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Heat in Urban Asia`,
        short_name: `heat`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Heat_favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
