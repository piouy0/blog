export interface Palette {
  primary: {
    [key: number]: string;
  };
  gray: {
    [key: number]: string;
  };

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
}

const colors = {
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
  ...colors,

  primaryBackground: colors.gray[0],
  secondaryBackground: colors.gray[5],
  highlightBackground: colors.primary[100],

  primaryText: colors.gray[90],
  secondaryText: colors.gray[60],
  tertiaryText: colors.gray[40],
  quaternaryText: colors.gray[20],

  primaryBorder: colors.gray[10],
  secondaryBorder: colors.gray[5],
  tertiaryBorder: colors.gray[60],
  quaternaryBorder: colors.gray[20],
};

const darkTheme = {
  ...colors,

  primaryBackground: colors.gray[100],
  secondaryBackground: colors.gray[90],
  highlightBackground: colors.gray[100],

  primaryText: colors.gray[0],
  secondaryText: colors.gray[30],
  tertiaryText: colors.gray[40],
  quaternaryText: colors.gray[50],

  primaryBorder: colors.gray[70],
  secondaryBorder: colors.gray[80],
  tertiaryBorder: colors.gray[40],
  quaternaryBorder: colors.gray[60],
};

export { colors, lightTheme, darkTheme };
