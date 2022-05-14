import React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import Test from "posts/2022/05/test.mdx";

const TempBoxForSceollEvent = styled.div`
  height: 400vh;
`;

const Home: NextPage = props => (
  <>
    <TempBoxForSceollEvent>
      <Test />
    </TempBoxForSceollEvent>
  </>
);

export default Home;
