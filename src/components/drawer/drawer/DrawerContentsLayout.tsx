import React from "react";
import styled from "@emotion/styled";

import { themedPalette } from "styles/theme";
import FullWidthButton from "components/common/button/FullWidthButton";
import DrawerHeader from "./DrawerHeader";

const Wrapper = styled.div`
  overflow-y: scroll;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  background: ${themedPalette.layoutBackground};
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 36px;
`;

interface Props {
  title?: string;
  handleClose?: () => void;
  handleApply: () => void;
  withHeader?: boolean;
  children: React.ReactNode;
}

const DrawerContentLayout: React.FC<Props> = ({ title, handleClose, handleApply, withHeader = true, children }) => {
  return (
    <Wrapper>
      {withHeader && <DrawerHeader title={title} handleClose={handleClose} />}
      {children}
      <ButtonWrapper>
        <FullWidthButton label="적용" onClick={handleApply} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default DrawerContentLayout;
