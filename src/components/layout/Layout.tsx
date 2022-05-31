import styled from "@emotion/styled";
import React from "react";

import { themedPalette } from "styles/theme";
import useThemeEffect from "hooks/theme/useThemeEffect";
import Header from "./header/Header";
import FloatingHeader from "./header/FloatingHeader";
import PostFilter from "./filter/PostFilter";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${themedPalette.primaryBackground};
  transition: all 0.125s ease-in;
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`;

const HeaderWrapper = styled.div``;

const PostFilterWrapper = styled.div`
  padding: 24px 0;
`;

const Contents = styled.div``;

interface Props {
  children: React.ReactNode;
  withFilter?: boolean;
}

const Layout: React.FC<Props> = ({ children, withFilter = false }) => {
  useThemeEffect();

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <Header />
          <FloatingHeader />
        </HeaderWrapper>
        {withFilter && (
          <PostFilterWrapper>
            <PostFilter />
          </PostFilterWrapper>
        )}
        <Contents>{children}</Contents>
      </Container>
    </Wrapper>
  );
};

export default Layout;
