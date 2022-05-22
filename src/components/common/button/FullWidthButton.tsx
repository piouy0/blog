import { Button } from "@mui/material";
import React from "react";
import { themedPalette } from "styles/theme";

const FullWidthButtonStyle = () => ({
  width: "100%",
  height: "50px",
  lineHeight: "50px",
  padding: 0,
  background: themedPalette.buttonBackground,
  borderRadius: "4px",
  color: themedPalette.buttonText,
  fontSize: "1rem",
  fontWeight: "600",
  letterSpacing: "normal",
  transition: "opacity 0.125s ease",
  "&:hover": {
    opacity: 0.6,
    background: themedPalette.buttonBackground,
  },
  "&:active": {
    opacity: 1,
    background: themedPalette.buttonBackground,
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
