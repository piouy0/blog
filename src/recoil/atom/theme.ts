import produce from "immer";
import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";
import storage from "util/storage";

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

export const useTheme = () => {
  const [state, dispatch] = useRecoilState(themeState);

  const checkTheme = (() => {
    if (state.systemTheme === "not-ready") return "light";
    if (state.theme !== "default") return state.theme;
    return state.systemTheme;
  })();

  const setSystemTheme = useCallback(
    (theme: "light" | "dark") => {
      dispatch(
        produce(draft => {
          draft.systemTheme = theme;
        }),
      );
    },
    [dispatch],
  );

  const enableDarkMode = useCallback(() => {
    dispatch(
      produce(draft => {
        draft.theme = "dark";
      }),
    );
  }, [dispatch]);

  const enableLightMode = useCallback(() => {
    dispatch(
      produce(draft => {
        draft.theme = "light";
      }),
    );
  }, [dispatch]);

  const loadTheme = () => {
    const theme = storage.getItem("theme");
    if (!theme) return;
    if (theme === "dark") {
      enableDarkMode();
    } else {
      enableLightMode();
    }
    document.body.dataset.theme = theme;
  };

  return { state, checkTheme, loadTheme, enableDarkMode, enableLightMode, setSystemTheme };
};
