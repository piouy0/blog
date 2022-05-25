export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;

  primaryBackground: string;
  secondaryBackground: string;
  destructiveBackground: string;

  primaryText: string;
  secondaryText: string;

  primaryBorder: string;
  secondaryBorder: string;

  iconPrimaryBackground: string;
  layoutBackground: string;
  boxShadow: string;
}

const palette = {
  primary: {
    25: "#2BC2BD80",
    50: "#2BC2BDC2",
    100: "#2AC1BC",
  },
  gray: {
    0: "#FFFFFF",
    5: "#FAFAFA",
    10: "#F5F5F5",
    20: "#EEEEEE",
    30: "#E0E0E0",
    40: "#BDBDBD",
    50: "#9E9E9E",
    60: "#757575",
    70: "#616161",
    80: "#424242",
    90: "#212121",
    100: "#121212",
  },
  shadow: {
    light: "0 4px 8px rgb(0 0 0 / 15%)",
    dark: "0 4px 6px -2px rgba(255, 255, 255, 0.05)",
  },
  state: {
    error: {
      100: "#ff1659",
    },
    disabled: {
      default: "#D2D3D5",
      bg: "#ECEEF0",
    },
  },
};

const lightTheme = {
  primaryColor: palette.primary[100],
  secondaryColor: palette.primary[50],
  tertiaryColor: palette.primary[25],

  primaryBackground: palette.gray[0],
  secondaryBackground: palette.gray[5],
  destructiveBackground: palette.state.error[100],

  primaryText: palette.gray[90],
  secondaryText: palette.gray[60],

  primaryBorder: palette.gray[10],
  secondaryBorder: palette.gray[20],

  iconPrimaryBackground: palette.gray[5],
  layoutBackground: palette.gray[0],
  boxShadow: palette.shadow.light,
};

const darkTheme = {
  primaryColor: palette.primary[100],
  secondaryColor: palette.primary[50],
  tertiaryColor: palette.primary[25],

  primaryBackground: palette.gray[100],
  secondaryBackground: palette.gray[90],
  destructiveBackground: palette.state.error[100],

  primaryText: palette.gray[0],
  secondaryText: palette.gray[30],

  primaryBorder: palette.gray[70],
  secondaryBorder: palette.gray[80],

  iconPrimaryBackground: palette.gray[80],
  layoutBackground: palette.gray[90],
  boxShadow: palette.shadow.dark,
};

export { palette, lightTheme, darkTheme };
