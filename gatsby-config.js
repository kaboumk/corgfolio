/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//space ID: z3k5upsnb6nz
//API: 0JF1GKYM3YLWoAWDXocCmaQZrQNWXaZ7auIshFWYi3A
require("dotenv").config()
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "z3k5upsnb6nz",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "0JF1GKYM3YLWoAWDXocCmaQZrQNWXaZ7auIshFWYi3A",
      },
    },
  ],
}
