import { Button } from "@mui/material";
import React from "react";

import { palette } from "styles/palette";
import { themedPalette } from "styles/theme";

const baseButtonStyle = () => ({
  height: "36px",
  fontSize: "14px",
  fontFamily: "Roboto",
  lineHeight: "20px",
  letterSpacing: "0.3px",
  padding: "8px 14px",
  minWidth: "initial",
  textTransform: "inherit",

  "&.MuiButton-sizeSmall": {
    height: "28px",
    fontSize: "12px",
    fontFamily: "Roboto",
    lineHeight: "16px",
    letterSpacing: "0.3px",
    padding: "6px 10px",
    fontWeight: 500,
  },

  "&.MuiButton-sizeLarge": {
    height: "48px",
    fontSize: "15px",
    fontFamily: "Roboto",
    lineHeight: "24px",
    letterSpacing: "0.3px",
    padding: "12px 20px",
  },
});

const primaryButtonStyle = () => ({
  background: themedPalette.primaryColor,
  color: palette.gray[0],

  "&:hover": {
    background: themedPalette.tertiaryColor,
    "@media (hover: none)": {
      background: themedPalette.primaryColor,
    },
  },
  "&:active": {
    background: themedPalette.secondaryColor,
    color: "rgba(255,255,255, 0.4)",
  },
  "&:disabled": {
    background: palette.state.disabled.bg,
    color: palette.state.disabled.default,
  },
});

const outlineButtonStyle = () => ({
  background: themedPalette.primaryBackground,
  color: themedPalette.primaryText,
  border: `1px solid ${themedPalette.primaryBorder}`,
  borderRadius: "4px",

  "&:hover": {
    border: 0,
    "@media (hover: none)": {
      border: `1px solid ${themedPalette.primaryBorder}`,
    },
  },

  "&:active": {
    background: themedPalette.primaryBackground,
    color: themedPalette.primaryText,
    borderColor: themedPalette.primaryBorder,
  },

  "&:disabled": {
    background: palette.state.disabled.bg,
    color: palette.state.disabled.default,
  },
});

export type BaseButtonTheme = "primary" | "outline" | "transparent";
export type BaseButtonSize = "small" | "medium" | "large";

export interface BaseButtonProps {
  theme: BaseButtonTheme;
  size: BaseButtonSize;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  styles?: any;
  children: React.ReactNode;
}

const BaseButton: React.FC<BaseButtonProps> = ({
  theme,
  size,
  type,
  onClick,
  children,
  disabled = false,
  fullWidth = false,
  styles,
  ...other
}) => {
  let variant: "text" | "contained" | "outlined" = "contained";
  let themeStyles = {};

  if (theme === "transparent") variant = "text";
  else if (theme === "outline") variant = "outlined";

  switch (theme) {
    case "primary":
      themeStyles = primaryButtonStyle;
      break;
      break;
    case "outline":
      themeStyles = outlineButtonStyle;
      break;
    default:
  }

  return (
    <Button
      size={size}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      sx={[baseButtonStyle, themeStyles, styles]}
      onClick={onClick}
      disabled={disabled}
      disableElevation
      {...other}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
