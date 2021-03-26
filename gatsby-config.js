const dotenv = require('dotenv');
dotenv.config();


module.exports = {
  siteMetadata: {
    title: `Machine Learning Robotics AI`,
    author: 'Abduttayyeb Mazhar',
    description: `Abduttayyeb Mazhar personal portfolio made with gatsby and contentful original author Felix Lopez`,
    siteUrl: `https://abduttayyeb.github.io/`,
    social: {
      twitter: `abtab_m`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/icons`,
        name: `icons`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abduttayyeb Mazhar's Personal Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0C141C`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // spaceId: "-------PRIVATE KEY-------",
        // accessToken: "-------PRIVATE KEY-------",
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
            'Poppins\:300,400,500,700'
        ],
      },
    }
  ],
}
