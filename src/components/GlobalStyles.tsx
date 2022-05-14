import React from "react";
import { css, Global } from "@emotion/react";
import { themedPalette, themes } from "styles/theme";

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

  body {
    background: ${themedPalette.primaryBackground};
  }
`;

interface Props {}

const GlobalStyles: React.FC<Props> = () => <Global styles={Style} />;

export default GlobalStyles;
