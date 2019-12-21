import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  colors: {
    ...novelaTheme.colors,
    grey: "hsl(0, 0%, 45%)",
    modes: {
      dark: {
        ...novelaTheme.colors.modes.dark,
        grey: "hsl(0, 0%, 55%)",
      },
    },
    prism: {
      ...novelaTheme.colors.prism,
      background: "hsla(224, 12%, 6%)",
      comment: "hsl(210, 11%, 65%)",
    },
  },
};
