module.exports = {
  siteMetadata: {
    title: `Pejuang Kode`,
    name: `Zain Fathoni`,
    siteUrl: `https://pejuangkode.com`,
    description: `Collaborative Programming Blog for Indonesian Developers`,
    hero: {
      heading: `🇮🇩 Berjuang dengan 👨🏻‍💻 Kode`,
      maxWidth: 500,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/zainfathoni/pejuangkode`,
      },
      {
        name: `medium`,
        url: `https://medium.com/pejuang-kode`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pejuang Kode by Zain Fathoni`,
        short_name: `Pejuang Kode`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
