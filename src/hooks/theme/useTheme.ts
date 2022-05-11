import produce from "immer";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { themeState } from "recoil/atom/theme";
import storage from "util/storage";

const useTheme = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const checkTheme = (() => {
    if (theme.systemTheme === "not-ready") return "light";
    if (theme.theme !== "default") return theme.theme;
    return theme.systemTheme;
  })();

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

  const setSystemTheme = (theme: "light" | "dark") => {
    setTheme(
      produce(state => {
        state.systemTheme = theme;
      }),
    );
  };

  const enableDarkMode = useCallback(() => {
    setTheme(
      produce(state => {
        state.theme = "dark";
      }),
    );
  }, [setTheme]);

  const enableLightMode = useCallback(() => {
    setTheme(
      produce(state => {
        state.theme = "light";
      }),
    );
  }, [setTheme]);

  return { checkTheme, loadTheme, enableDarkMode, enableLightMode, setSystemTheme };
};

export default useTheme;
