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
  width: 100%;
`;

const HeaderWrapper = styled.div``;

const Contents = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

const PostFilterWrapper = styled.div`
  padding: 24px 0;
`;

const Page = styled.div``;

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
        <Contents>
          {withFilter && (
            <PostFilterWrapper>
              <PostFilter />
            </PostFilterWrapper>
          )}
          <Page id="page-wrapper">{children}</Page>
        </Contents>
      </Container>
    </Wrapper>
  );
};

export default Layout;
