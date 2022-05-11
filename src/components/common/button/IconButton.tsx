import React from "react";
import { IconButton as BaseIconButton } from "@mui/material";

import { themedPalette } from "styles/theme";

const IconButtonStyle = () => ({
  width: "40px",
  height: "40px",
  "&:hover": {
    background: themedPalette.iconPrimaryBackground,
  },
});

interface Props {
  children: React.ReactNode;
}

const IconButton: React.FC<Props> = ({ children }) => (
  <>
    <BaseIconButton sx={IconButtonStyle}>{children}</BaseIconButton>
  </>
);

export default IconButton;
