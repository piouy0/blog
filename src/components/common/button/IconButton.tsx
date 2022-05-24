import React from "react";
import { IconButton as BaseIconButton } from "@mui/material";
import styled from "@emotion/styled";

import { themedPalette } from "styles/theme";

const IconButtonStyle = () => ({
  width: "2.5rem",
  height: "2.5rem",
  "&:hover": {
    background: themedPalette.iconPrimaryBackground,
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
}

const IconButton: React.FC<Props> = ({ children, onClick }) => (
  <BaseIconButton sx={IconButtonStyle} onClick={onClick}>
    <Icon>{children}</Icon>
  </BaseIconButton>
);

export default IconButton;
