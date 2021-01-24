module.exports = {
  siteMetadata: {
    title: `Alex Hipolito - Web Developer & QA Engineer based in Sydney, Australia`,
    description: `Alex Hipolito is a Web Developer based in Sydney, Australia.`,
    author: `@alexhippo`,
    keywords: `web developer software engineer quality engineer sydney australia women in tech javascript react cypress`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `asap`,
          `miriam libre`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-testing'
  ],
}
