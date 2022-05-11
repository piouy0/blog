import { atom } from "recoil";

export interface ThemeState {
  theme: "light" | "dark" | "default";
  systemTheme: "light" | "dark" | "not-ready";
}

export const themeState = atom<ThemeState>({
  key: "themeState",
  default: {
    theme: "default",
    systemTheme: "not-ready",
  },
});
