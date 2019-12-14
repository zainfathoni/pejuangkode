import React from "react";
import { css } from "@emotion/core";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

interface CodeSandboxProps {
  src: string;
}

/**
 * CodeSandbox styling is based on Code.Prism.Container component styling
 */
const CodeSandbox: React.FC<CodeSandboxProps> = ({ src }) => (
  <iframe
    css={css`
      margin: 15px auto 50px;
      width: 100%;
      max-width: 750px;
      height: 400px;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      position: relative;

      ${mediaqueries.desktop`
        left: -26px;
      `};

      ${mediaqueries.tablet`
        max-width: 526px;
        left: 0;

        textarea,
        pre {
          padding: 20px !important;
        }
      `};

      ${mediaqueries.phablet`
        border-radius: 0;
        margin: 0 auto 25px;
        overflow: initial;
        width: unset;
        max-width: unset;
        float: left;
        min-width: 100%;
        overflow: initial;
        position: relative;
      `};
    `}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    src={src}
  ></iframe>
);

export default CodeSandbox;
