import React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

import { extractFromCookie } from "utils/theme";

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
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin={true} />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body data-theme={theme}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
