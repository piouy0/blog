import React from "react";
import { IconButton as BaseIconButton } from "@mui/material";

import { themedPalette } from "styles/theme";

const IconButtonStyle = () => ({
  width: "2.5rem",
  height: "2.5rem",
  "&:hover": {
    background: themedPalette.iconPrimaryBackground,
  },
});

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ children, onClick }) => (
  <>
    <BaseIconButton sx={IconButtonStyle} onClick={onClick}>
      {children}
    </BaseIconButton>
  </>
);

export default IconButton;
