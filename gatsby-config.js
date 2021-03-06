module.exports = {
  siteMetadata: {
    title: "John Wang",
    baseUrl: "localhost:8000"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `merriweather\:300,300i,400i,400,700,700i,900,900i`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`
      }
    },{
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'static',
        path: `${__dirname}/src/static`,
      }
    }
  ],
};
