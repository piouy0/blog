import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents as IMDXComponents } from "mdx/types";

import Layout from "components/layout/Layout";
import Core from "components/Core";

import "../css/reset.css";
import "../css/global.css";

const MDXComponents: IMDXComponents = {
  h1: props => <h2 {...props} />,
  h2: props => <h1 {...props} />,
};

const BlogApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <RecoilRoot>
      <MDXProvider components={MDXComponents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Core />
      </MDXProvider>
    </RecoilRoot>
  );
};

export default BlogApp;
