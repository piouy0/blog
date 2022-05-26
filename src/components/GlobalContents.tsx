import React, { useEffect } from "react";
import { useSnackbar } from "recoil/atom/snackbar/snackbar";

import { useTheme } from "recoil/atom/theme/theme";
import storage from "utils/storage";
import Snackbar from "./common/snackbar/Snackbar";
import GlobalDrawer from "./drawer/GlobalDrawer";
import GlobalStyles from "./GlobalStyles";

interface Props {}

const GlobalContents: React.FC<Props> = () => {
  const { enableDarkMode, enableLightMode } = useTheme();
  const { state: snackbar, closeSnackbar } = useSnackbar();

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

  const handleSnackbarClose = () => {
    if (snackbar.handleClose) {
      snackbar.handleClose();
    }
    closeSnackbar();
  };

  useEffect(() => {
    loadTheme();
  });

  return (
    <>
      <GlobalStyles />
      <GlobalDrawer />
      <Snackbar
        open={snackbar.open}
        handleClose={handleSnackbarClose}
        message={snackbar.message}
        status={snackbar.status}
      />
    </>
  );
};

export default GlobalContents;
