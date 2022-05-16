import React, { useEffect } from "react";

import { useTheme } from "recoil/atom/theme";
import GlobalDrawer from "./drawer/GlobalDrawer";
import GlobalStyles from "./GlobalStyles";

interface Props {}

const GlobalContents: React.FC<Props> = () => {
  const { loadTheme } = useTheme();

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
