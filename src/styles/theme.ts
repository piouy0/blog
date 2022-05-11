import { lightTheme, darkTheme, Theme as ITheme } from "./palette";

type ThemeKey = keyof ITheme;
type ThemedPalette = Record<ThemeKey, string>;

const buildCssVariables = (palette: ThemedPalette) => {
  const keys = Object.keys(palette) as ThemeKey[];

  return keys.reduce((acc, key) => acc.concat(`--${key}:${palette[key]};`, "\n"), "");
};

// for global css valiable
const themes = {
  light: buildCssVariables(lightTheme),
  dark: buildCssVariables(darkTheme),
};

const cssVar = (name: string) => `var(--${name})`;

const themeKeys = Object.keys(lightTheme) as ThemeKey[];

// for styled
const themedPalette: Record<ThemeKey, string> = themeKeys.reduce((acc, key) => {
  acc[key] = cssVar(key);
  return acc;
}, {} as ThemedPalette);

export { themes, themedPalette };
