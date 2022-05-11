import React from "react";

import useTheme from "hooks/theme/useTheme";
import GlobalStyles from "./GlobalStyles";

interface Props {}

const Core: React.FC<Props> = () => {
  const { loadTheme } = useTheme();

  loadTheme();

  return (
    <>
      <GlobalStyles />
    </>
  );
};

export default Core;
