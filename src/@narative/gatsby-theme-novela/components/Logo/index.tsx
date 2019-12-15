import { css } from "@emotion/core";
import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";
import React, { useMemo } from "react";
import { useColorMode } from "theme-ui";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  const [colorMode] = useColorMode();
  const primaryColor = useMemo(
    () =>
      colorMode === "dark"
        ? novelaTheme.colors.modes.dark.primary
        : novelaTheme.colors.primary,
    [colorMode]
  );
  return (
    <svg
      aria-hidden="true"
      css={css`
        color: ${primaryColor};
      `}
      data-icon="code"
      data-prefix="fad"
      focusable="false"
      height="30px"
      role="img"
      viewBox="0 0 640 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="fa-group">
        <path
          className="fa-secondary"
          d="M422.12 18.16a12 12 0 0 1 8.2 14.9l-136.5 470.2a12 12 0 0 1-14.89 8.2l-61-17.7a12 12 0 0 1-8.2-14.9l136.5-470.2a12 12 0 0 1 14.89-8.2z"
          fill="currentColor"
          opacity="0.4"
        ></path>
        <path
          className="fa-primary"
          d="M636.23 247.26l-144.11-135.2a12.11 12.11 0 0 0-17 .5L431.62 159a12 12 0 0 0 .81 17.2L523 256l-90.59 79.7a11.92 11.92 0 0 0-.81 17.2l43.5 46.4a12 12 0 0 0 17 .6l144.11-135.1a11.94 11.94 0 0 0 .02-17.54zm-427.8-88.2l-43.5-46.4a12 12 0 0 0-17-.5l-144.11 135a11.94 11.94 0 0 0 0 17.5l144.11 135.1a11.92 11.92 0 0 0 17-.5l43.5-46.4a12 12 0 0 0-.81-17.2L117 256l90.6-79.7a11.92 11.92 0 0 0 .83-17.24z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
}