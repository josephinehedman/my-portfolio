require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.API_KEY,
      },
    },
  ],
  siteMetadata: {
    title: 'Josephine Hedman',
    description: 'My portfolio'
  }, 
}
