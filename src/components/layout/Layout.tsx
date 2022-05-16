import styled from "@emotion/styled";
import React from "react";

import { themedPalette } from "styles/theme";
import useThemeEffect from "hooks/theme/useThemeEffect";
import Header from "./Header";
import FloatingHeader from "./FloatingHeader";
import Category from "./Category";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  min-height: 100vh;
  background: ${themedPalette.primaryBackground};
  transition: all 0.125s ease-in;
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`;

const HeaderWrapper = styled.div``;

const CategoryWrapper = styled.div`
  padding: 32px 0;
`;

const Contents = styled.div``;

const Layout: React.FC<Props> = ({ children }) => {
  useThemeEffect();

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <Header />
          <FloatingHeader />
        </HeaderWrapper>
        <CategoryWrapper>
          <Category />
        </CategoryWrapper>
        <Contents>{children}</Contents>
      </Container>
    </Wrapper>
  );
};

export default Layout;
