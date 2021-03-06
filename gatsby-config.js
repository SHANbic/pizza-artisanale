require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Pizza Artisanale 77 - Melun - Vert Saint Denis`,
    description: `Dégustez les meilleures pizzas artisanales sur Melun - Vert Saint Denis - Cesson - Dammarye-lès-Lys, Voisenon - 77, Seine et Marne `,
    author: `Pierre Lambert`,
    author_website: "https://github.com/shanbic",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fredericka the Great`,
            variants: [`400`],
          },
          {
            family: `Tangerine`,
            variants: [`400`],
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pizza Artisanale`,
        short_name: `Pizza Artisanale`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-pizza-artisanale.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint:
          "https://gmail.us2.list-manage.com/subscribe/post?u=496869b99ea948b923a2301d7&amp;id=72f6a59e02",
        timeout: 3500,
      },
    },
    /* {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `pizzaartisanale`,
      },
    }, */
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
