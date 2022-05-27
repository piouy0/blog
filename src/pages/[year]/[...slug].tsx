import React from "react";
import type { NextPage } from "next";

import { useRouter } from "next/router";

const Slug: NextPage = props => {
  const router = useRouter();

  return (
    <>
      <div>Test</div>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      // String variant:
      "/2022/05/15",
      // Object variant:
    ],
    fallback: false,
  };
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Slug;
