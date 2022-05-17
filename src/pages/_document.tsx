import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { extractFromCookie } from "util/theme";

export default class MyDocument extends Document<{ theme: string }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    let theme;
    if (ctx.req && ctx.req.headers.cookie) {
      theme = extractFromCookie(ctx.req.headers.cookie, "theme");
    }

    return { ...initialProps, theme };
  }

  render() {
    const { theme } = this.props;
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
