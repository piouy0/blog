import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import { extractFromCookie } from "util/theme";

export default class MyDocument extends Document<any> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);

    let cookie;

    if (ctx.req && ctx.req.headers.cookie) {
      cookie = ctx.req.headers.cookie;
    }

    return { ...initialProps, cookie };
  }

  render() {
    const theme = extractFromCookie(this.props.cookie, "theme");

    return (
      <Html>
        <Head />
        <body data-theme={theme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
