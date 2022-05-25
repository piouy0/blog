import React, { useEffect } from "react";

import { useTheme } from "recoil/atom/theme/theme";
import storage from "utils/storage";
import Snackbar from "./common/snackbar/Snackbar";
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
      <Snackbar />
    </>
  );
};

export default GlobalContents;
