import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";

const MDXComponents = {
  p: props => {
    console.log("test", props);
    return <p {...props} />;
  },
  a: props => <a {...props} />,
  h1: props => <h2 {...props} />,
};

const BlogApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
};

export default BlogApp;
