import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkPrism from "remark-prism";
import rehypeSlug from "rehype-slug";

// remark-prism  unist-util-visit unist rehype-autolink-headings rehype-katex

// eslint-disable-next-line import/prefer-default-export
export const parseMarkdownToMdx = (body: string, path: string) => {
  return serialize(body, {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm, // GFM 지원(자동 링크 리터럴, 각주, 취소선, 표, 작업 목록)
        remarkMath, // 수학을 위한 새로운 구문(새로운 노드 유형, rehype 호환 가능)
        remarkPrism, // Prism이 있는 코드 블록 강조 표시 ( 대부분의 Prism 플러그인 지원)
      ],
      rehypePlugins: [
        rehypeSlug, // 타이틀 텍스트를 아이디로 추가
      ],
    },
  });
};
