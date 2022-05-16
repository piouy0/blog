import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { MDXProvider } from "@mdx-js/react";

import Layout from "components/layout/Layout";
import GlobalContents from "components/GlobalContents";
import MdxComponents from "components/MdxComponents";

import "../css/reset.css";
import "../css/global.css";

const BlogApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <RecoilRoot>
      <MDXProvider components={MdxComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalContents />
      </MDXProvider>
    </RecoilRoot>
  );
};

export default BlogApp;
