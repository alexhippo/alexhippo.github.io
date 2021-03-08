module.exports = {
  siteMetadata: {
    title: `Alex Hipolito | Web Developer based in Sydney, Australia`,
    description: `Alex Hipolito is a Web Developer based in Sydney, Australia.`,
    author: `@alexhippo`,
    siteUrl: `https://alexhippo.github.io`,
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
        icon: `src/images/favicon.png`,
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
    'gatsby-plugin-testing',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://alexhippo.github.io',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-sitemap`
  ],
}
