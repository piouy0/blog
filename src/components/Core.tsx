import React, { useEffect } from "react";

import { useTheme } from "recoil/atom/theme";
import GlobalStyles from "./GlobalStyles";

interface Props {}

const Core: React.FC<Props> = () => {
  const { loadTheme } = useTheme();

  useEffect(() => {
    loadTheme();
  });

  return (
    <>
      <GlobalStyles />
    </>
  );
};

export default Core;
