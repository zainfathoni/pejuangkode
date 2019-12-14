import React from "react";
import { css } from "@emotion/core";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

interface CodeSandboxProps {
  src: string;
}

/**
 * CodeSandbox styling is based on Paragraph component margin
 */
const CodeSandbox: React.FC<CodeSandboxProps> = ({ src }) => (
  <iframe
    css={css`
      margin: 0 auto 35px;
      width: 100%;
      max-width: 680px;
      height: 500px;
      border: 0;
      border-radius: 4px;
      overflow: hidden;

      b {
        font-weight: 800;
      }

      ${mediaqueries.desktop`
        max-width: 507px;
      `}

      ${mediaqueries.tablet`
        max-width: 486px;
        margin: 0 auto 25px;
      `};

      ${mediaqueries.phablet`
        padding: 0 20px;
      `};
    `}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
    src={src}
  ></iframe>
);

export default CodeSandbox;
