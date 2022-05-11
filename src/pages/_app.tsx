import React from "react";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { MDXComponents as IMDXComponents } from "mdx/types";
import Layout from "components/layout/Layout";

import "../css/reset.css";
import "../css/global.css";

const MDXComponents: IMDXComponents = {
  h1: props => <h2 {...props} />,
  h2: props => <h1 {...props} />,
};

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
};

export default BlogApp;
