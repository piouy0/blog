import styled from "@emotion/styled";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { themedPalette } from "styles/theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const Title = styled.div`
  color: ${themedPalette.primaryText};
  font-size: 1.125rem;
`;
const Button = styled.div`
  cursor: pointer;
  & svg {
    font-size: 24px;
    color: ${themedPalette.primaryText};
  }
`;

interface Props {
  title?: string;
  handleClose?: () => void;
}

const DrawerHeader: React.FC<Props> = ({ title, handleClose }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button onClick={handleClose}>
        <CloseIcon />
      </Button>
    </Wrapper>
  );
};

export default DrawerHeader;
