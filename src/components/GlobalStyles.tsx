import React from "react";
import { css, Global } from "@emotion/react";
import { themes } from "styles/theme";

const Style = css`
  body {
    ${themes.light}
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${themes.dark}
    }
  }

  body[data-theme="light"] {
    ${themes.light};
  }

  body[data-theme="dark"] {
    ${themes.dark};
  }
`;

interface Props {}

const GlobalStyles: React.FC<Props> = () => <Global styles={Style} />;

export default GlobalStyles;
