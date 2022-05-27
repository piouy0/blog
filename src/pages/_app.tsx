import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { MDXProvider } from "@mdx-js/react";
import styled from "@emotion/styled";

import Layout from "components/layout/Layout";
import GlobalContents from "components/GlobalContents";
import MdxComponents from "components/MdxComponents";

import muiTheme from "styles/muiTheme";
import { ThemeProvider } from "@mui/material";

import "../css/reset.css";
import "../css/global.css";

const PageWrapper = styled.div``;

const BlogApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  let test = 0;

  console.log(test);

  return (
    <RecoilRoot>
      <ThemeProvider theme={muiTheme}>
        <MDXProvider components={MdxComponents}>
          <Layout>
            <PageWrapper id="page-wrapper">
              <button
                onClick={() => {
                  test += 1;
                  console.log(test);
                }}
              >
                button
              </button>
              <Component {...pageProps} />
            </PageWrapper>
          </Layout>
          <GlobalContents />
        </MDXProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default BlogApp;
