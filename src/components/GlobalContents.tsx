import React, { useEffect } from "react";

import { useTheme } from "recoil/atom/theme";
import storage from "util/storage";
import GlobalDrawer from "./drawer/GlobalDrawer";
import GlobalStyles from "./GlobalStyles";

interface Props {}

const GlobalContents: React.FC<Props> = () => {
  const { enableDarkMode, enableLightMode } = useTheme();

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

  useEffect(() => {
    loadTheme();
  });

  return (
    <>
      <GlobalStyles />
      <GlobalDrawer />
    </>
  );
};

export default GlobalContents;
