import React from "react";
import type { NextPage } from "next";
import { AppContext } from "next/app";
import styled from "@emotion/styled";

import BlogHead from "components/BlogHead";
import getTest from "utils/post";

const TempBoxForSceollEvent = styled.div`
  height: 400vh;
`;

interface Props {
  dates: string[];
}

interface Props {
  dates: string[];
}

const Home: NextPage<Props> = ({ dates }) => {
  return (
    <>
      <BlogHead />
      <TempBoxForSceollEvent />
    </>
  );
};

export async function getServerSideProps(context: AppContext) {
  const test = getTest();

  console.log(test);

  return {
    props: {
      dates: test,
    },
  };
}

export default Home;
