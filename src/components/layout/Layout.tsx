import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      {/* <Header /> */}
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;
