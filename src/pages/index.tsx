import React from "react";
import type { NextPage } from "next";
import { AppContext } from "next/app";
import styled from "@emotion/styled";

import Test from "posts/2022/05/test.mdx";
import BlogHead from "components/BlogHead";

const TempBoxForSceollEvent = styled.div`
  height: 400vh;
`;

const Home: NextPage = () => {
  return (
    <>
      <BlogHead />
      <TempBoxForSceollEvent>
        <Test />
        <img src="/assets/vercel.svg" alt="" />
      </TempBoxForSceollEvent>
    </>
  );
};

export async function getServerSideProps(context: AppContext) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default Home;
