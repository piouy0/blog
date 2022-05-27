import React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import BlogHead from "components/BlogHead";

import { getAllPosts } from "utils/post";

const TempBoxForSceollEvent = styled.div`
  height: 400vh;
`;

interface Props {
  posts: any;
}

const Home: NextPage<Props> = () => {
  return (
    <>
      <BlogHead />
      <TempBoxForSceollEvent />
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts(); // the argument has no effect yet

  console.log(posts);

  return {
    props: {
      // posts,
    },
  };
};

export default Home;
