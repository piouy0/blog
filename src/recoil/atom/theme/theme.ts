import produce from "immer";
import { useMemo } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import storage from "utils/storage";

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

const themeActions = () => {
  const dispatch = useSetRecoilState(themeState);

  return useMemo(
    () => ({
      setSystemTheme: (theme: "light" | "dark") => {
        dispatch(
          produce(draft => {
            draft.systemTheme = theme;
          }),
        );
      },

      enableDarkMode: () => {
        dispatch(
          produce(draft => {
            draft.theme = "dark";
          }),
        );
      },

      enableLightMode: () => {
        dispatch(
          produce(draft => {
            draft.theme = "light";
          }),
        );
      },
    }),
    [dispatch],
  );
};

export const useTheme = () => {
  const state = useRecoilValue(themeState);
  const { setSystemTheme, enableDarkMode, enableLightMode } = themeActions();

  const checkTheme = (() => {
    if (state.systemTheme === "not-ready") return "light";
    if (state.theme !== "default") return state.theme;
    return state.systemTheme;
  })();

  return { state, checkTheme, enableDarkMode, enableLightMode, setSystemTheme };
};
