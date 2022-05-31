import { serialize } from "next-mdx-remote/serialize";
// remark-gfm remark-math remark-prism remark-slug remark-toc unist-util-visit unist rehype-autolink-headings rehype-katex

export const parseMarkdownToMdx = (body: string, path: string) => {
  return serialize(body, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
};
