import React from "react";
import styled from "@emotion/styled";

import { themedPalette } from "styles/theme";
import DrawerHeader from "./DrawerHeader";

interface Props {
  title?: string;
  handleClose?: () => void;
  withHeader?: boolean;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  overflow-y: scroll;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  background: ${themedPalette.primaryBackground};
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DrawerContentLayout: React.FC<Props> = ({ title, handleClose, withHeader = true, children }) => {
  return (
    <Wrapper>
      {withHeader && <DrawerHeader title="title" handleClose={() => {}} />}
      {children}
    </Wrapper>
  );
};

export default DrawerContentLayout;
