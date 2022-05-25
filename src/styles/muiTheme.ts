import { createTheme } from "@mui/material";

import { palette } from "styles/palette";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const muiTheme = createTheme({
  palette: {
    primary: {
      main: palette.primary[100],
    },
  },
  status: {
    danger: palette.state.error[100],
  },
});

export default muiTheme;
