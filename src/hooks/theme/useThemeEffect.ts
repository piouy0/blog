import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { themeState } from "recoil/atom/theme";
import useTheme from "./useTheme";

const useThemeEffect = () => {
  const [_theme, setTheme] = useRecoilState(themeState);
  const { setSystemTheme } = useTheme();

  const theme = _theme.theme;

  useEffect(() => {
    const systemPreferDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    setSystemTheme(systemPreferDark ? "dark" : "light");
  }, [setTheme]);

  useEffect(() => {
    if (theme !== "default") {
      document.body.dataset.theme = theme;
    }
  }, [theme]);
};

export default useThemeEffect;
