import styled from "@emotion/styled";
import React from "react";

import { themedPalette } from "styles/theme";
import useThemeEffect from "hooks/theme/useThemeEffect";
import Header from "./Header";
import FloatingHeader from "./FloatingHeader";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${themedPalette.primaryBackground};
  transition: 0.125s all ease-in;
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`;

const Contents = styled.div``;

const Layout: React.FC<Props> = ({ children }) => {
  useThemeEffect();

  return (
    <Wrapper>
      <Container>
        <Header />
        <FloatingHeader />
        <Contents>{children}</Contents>
      </Container>
    </Wrapper>
  );
};

export default Layout;
