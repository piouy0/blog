import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { themeState, useTheme } from "recoil/atom/theme";

const useThemeEffect = () => {
  const [_theme, setTheme] = useRecoilState(themeState);
  const { setSystemTheme } = useTheme();

  const { theme } = _theme;

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
