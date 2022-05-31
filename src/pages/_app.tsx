import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material";

import GlobalContents from "components/GlobalContents";

import muiTheme from "styles/muiTheme";

import "../css/reset.css";
import "../css/global.css";

const PageWrapper = styled.div``;

const BlogApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <RecoilRoot>
      <ThemeProvider theme={muiTheme}>
        <PageWrapper id="page-wrapper">
          <Component {...pageProps} />
        </PageWrapper>
        <GlobalContents />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default BlogApp;
