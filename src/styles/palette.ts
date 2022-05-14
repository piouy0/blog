export interface Theme {
  primaryBackground: string;
  secondaryBackground: string;
  highlightBackground: string;

  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  quaternaryText: string;

  primaryBorder: string;
  secondaryBorder: string;
  tertiaryBorder: string;
  quaternaryBorder: string;

  iconPrimaryBackground: string;
  floatingBackground: string;
}

const palette = {
  primary: {
    5: "#F7F8FF",
    10: "#EEF0FD",
    20: "#E0E3FD",
    40: "#C4C9FA",
    60: "#9BA0F6",
    80: "#7B7BF3",
    100: "#5A41F5",
    120: "#3F23EB",
  },
  gray: {
    0: "#FFFFFF",
    5: "#F6F7F8",
    10: "#EAECEE",
    20: "#DCDDE1",
    30: "#C1C2C7",
    40: "#A2A3AA",
    50: "#73757D",
    60: "#50525A",
    70: "#3A3C46",
    80: "#242631",
    85: "#20232D",
    90: "#191B23",
    100: "#0C0C0F",
  },
};

const lightTheme = {
  primaryBackground: palette.gray[0],
  secondaryBackground: palette.gray[5],
  highlightBackground: palette.primary[100],

  primaryText: palette.gray[90],
  secondaryText: palette.gray[60],
  tertiaryText: palette.gray[40],
  quaternaryText: palette.gray[20],

  primaryBorder: palette.gray[10],
  secondaryBorder: palette.gray[5],
  tertiaryBorder: palette.gray[60],
  quaternaryBorder: palette.gray[20],

  iconPrimaryBackground: palette.gray[5],
  floatingBackground: palette.gray[0],
};

const darkTheme = {
  primaryBackground: palette.gray[100],
  secondaryBackground: palette.gray[90],
  highlightBackground: palette.gray[100],

  primaryText: palette.gray[0],
  secondaryText: palette.gray[30],
  tertiaryText: palette.gray[40],
  quaternaryText: palette.gray[50],

  primaryBorder: palette.gray[70],
  secondaryBorder: palette.gray[80],
  tertiaryBorder: palette.gray[40],
  quaternaryBorder: palette.gray[60],

  iconPrimaryBackground: palette.gray[80],
  floatingBackground: palette.gray[90],
};

export { lightTheme, darkTheme };
