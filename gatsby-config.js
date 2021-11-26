module.exports = {
  pathPrefix: `/nuslibraries/dsprojects/heatinurbanasia`,
  siteMetadata: {
    title: `Heat in Urban Asia`,
    description: `Asian cities are getting hotter. This website presents data, maps, stories, and images that help us to examine the past, present, and future of heat in urban Asia.`,
    author: `Asia Research Institute - NUS Libraries`,
    siteUrl: `https://libds.nus.edu.sg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-google-docs",
      options: {
        folder: "1FZ4PlHetvvpseOmV-R1LX-HOx5piD1dk",
        createPages: true,
        debug: true,
        imagesOptions: { width: `800` },
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [`gatsby-remark-unwrap-images`, `gatsby-remark-images`],
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
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 95,
          breakpoints: [576, 768, 992, 1200, 1400],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-leaflet`,
      options: {
        linkStyles: false,
      },
    },
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
