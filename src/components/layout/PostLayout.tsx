import React, { useEffect } from "react";
import { renderToString } from "react-dom/server";
import styled from "@emotion/styled";
import { TocState, useToc } from "recoil/atom/toc/toc";

import BlogHead from "components/BlogHead";

import { FrontMatter } from "utils/post";
import { parseHeadings } from "utils/heading";
import PostToc from "./PostToc";

const Wrapper = styled.div`
  width: 768px;
  margin: 0 auto;
`;

const PostHeader = styled.div`
  height: 300px;
`;

const Post = styled.div`
  & img {
    width: 100%;
  }
`;

const PostFooter = styled.div`
  height: 100vh;
`;

interface Props {
  children: React.ReactElement;
  frontMatter: FrontMatter;
  slug: string;
}

const PostLayout: React.FC<Props> = ({ children, frontMatter, slug }) => {
  const [_, setToc] = useToc();

  useEffect(() => {
    const contentString = renderToString(children);
    const toc: TocState = parseHeadings(contentString);

    setToc(toc);
  }, []);

  return (
    <Wrapper>
      {/* TODO : next-seo로 seo 변경 */}
      <BlogHead />
      <PostHeader>PostHeader</PostHeader>
      <PostToc />
      <Post>{children}</Post>
      <PostFooter>PostFooter</PostFooter>
    </Wrapper>
  );
};

export default PostLayout;
