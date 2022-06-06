import React from "react";
import { renderToString } from "react-dom/server";
import styled from "@emotion/styled";

import BlogHead from "components/BlogHead";

import { FrontMatter } from "utils/post";

const PostHeader = styled.div``;

const PostContent = styled.div``;

const PostFooter = styled.div``;

interface Props {
  children: any;
  frontMatter: FrontMatter;
  slug: string;
}

const PostLayout: React.FC<Props> = ({ children, frontMatter, slug }) => {
  const contentString = renderToString(children);

  return (
    <>
      {/* TODO : next-seo로 seo 변경 */}
      <BlogHead />
      <PostHeader>PostHeader</PostHeader>
      <PostContent>{children}</PostContent>
      <PostFooter>PostFooter</PostFooter>
    </>
  );
};

export default PostLayout;
