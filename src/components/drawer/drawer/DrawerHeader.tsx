import styled from "@emotion/styled";
import React from "react";
import { themedPalette } from "styles/theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  color: ${themedPalette.primaryText};
`;
const Button = styled.div``;

interface Props {
  title: string;
  handleClose: () => void;
}

const DrawerHeader: React.FC<Props> = ({ title, handleClose }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Button>
        <button onClick={handleClose}>button</button>
      </Button>
    </Wrapper>
  );
};

export default DrawerHeader;
