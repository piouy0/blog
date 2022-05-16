import React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import Test from "posts/2022/05/test.mdx";
import { useRouter } from "next/router";

const TempBoxForSceollEvent = styled.div`
  height: 400vh;
`;

const Home: NextPage = () => {
  return (
    <>
      <TempBoxForSceollEvent>
        <Test />
      </TempBoxForSceollEvent>
    </>
  );
};

export default Home;
