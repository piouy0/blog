import { Button } from "@mui/material";
import React from "react";

import { palette } from "styles/palette";
import { themedPalette } from "styles/theme";

const FullWidthButtonStyle = () => ({
  width: "100%",
  height: "50px",
  lineHeight: "50px",
  padding: 0,
  background: themedPalette.primaryColor,
  borderRadius: "4px",
  color: palette.gray[0],
  fontSize: "1rem",
  fontWeight: "600",
  letterSpacing: "normal",
  transition: "opacity 0.125s ease",
  "&:hover": {
    opacity: 0.6,
    background: themedPalette.primaryColor,
  },
  "&:active": {
    opacity: 1,
    background: themedPalette.primaryColor,
  },
});

interface Props {
  label: string;
}

const FullWidthButton: React.FC<Props> = ({ label }) => {
  return (
    <Button fullWidth sx={FullWidthButtonStyle}>
      {label}
    </Button>
  );
};

export default FullWidthButton;
