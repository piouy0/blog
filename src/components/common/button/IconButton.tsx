import React from "react";
import { IconButton as BaseIconButton } from "@mui/material";
import styled from "@emotion/styled";

import { themedPalette } from "styles/theme";

const IconButtonStyle = (animateBg: string) => ({
  width: "2.5rem",
  height: "2.5rem",
  "&:hover": {
    background: animateBg,
  },
});

const Icon = styled.div`
  height: 1.5rem;
  & svg {
    display: block;
    color: ${themedPalette.primaryText};
    font-size: 1.5rem;
  }
`;

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  animateBackground?: string;
}

const IconButton: React.FC<Props> = ({
  children,
  onClick,
  animateBackground = themedPalette.iconPrimaryBackground,
}) => (
  <BaseIconButton sx={[IconButtonStyle(animateBackground)]} onClick={onClick}>
    <Icon>{children}</Icon>
  </BaseIconButton>
);

export default IconButton;
