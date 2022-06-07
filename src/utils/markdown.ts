import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

// remark-math remark-prism  unist-util-visit unist rehype-autolink-headings rehype-katex

// eslint-disable-next-line import/prefer-default-export
export const parseMarkdownToMdx = (body: string, path: string) => {
  return serialize(body, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm, // GFM 지원(자동 링크 리터럴, 각주, 취소선, 표, 작업 목록)
      ],
      rehypePlugins: [
        rehypeSlug, // 타이틀 텍스트를 아이디로 추가
      ],
    },
  });
};
