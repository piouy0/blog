import styled from "@emotion/styled";
import React from "react";

import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`;

const Contents = styled.div``;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Contents>{children}</Contents>
      </Container>
    </Wrapper>
  );
};

export default Layout;
