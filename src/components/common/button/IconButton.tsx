import React from "react";
import { IconButton as BaseIconButton } from "@mui/material";

const IconButtonStyle = () => ({
  width: "40px",
  height: "40px",
});

interface Props {
  children: React.ReactNode;
}

const IconButton: React.FC<Props> = ({ children }) => {
  return <BaseIconButton sx={IconButtonStyle}>{children}</BaseIconButton>;
};

export default IconButton;
