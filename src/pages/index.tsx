import React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import BlogHead from "components/BlogHead";

import { getAllPosts, Post } from "utils/post";
import { themedPalette } from "styles/theme";
import { getDateString } from "utils/date";

const TempBoxForSceollEvent = styled.div`
  height: 400vh;
`;

const PostContainer = styled.div`
  display: flex;
  margin: -16px;
`;

const PostBox = styled.div`
  overflow: hidden;
  width: 33.3%;
  margin: 16px;
  background: ${themedPalette.layoutBackground};
  border-radius: 4px;
  box-shadow: ${themedPalette.boxShadow};
  transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: ${themedPalette.boxHighlightingShadow};
    transform: translateY(-5%);
  }
`;

const Thumbnail = styled.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;

const Contents = styled.div`
  padding: 1rem;
  color: ${themedPalette.primaryText};
`;

const Title = styled.div`
  overflow: hidden;
  width: 100%;
  line-height: 1.5;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  overflow: hidden;
  width: 100%;
  height: 64px;
  line-height: 1.5;
  margin-bottom: 24px;
  font-size: 14px;

  display: -webkit-box;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  line-height: 1.5;
  font-size: 0.75rem;
  color: ${themedPalette.secondaryText};
`;

interface Props {
  posts: Post[];
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <BlogHead />
      <TempBoxForSceollEvent>
        <PostContainer>
          {posts.map(post => {
            const { frontMatter } = post;

            return (
              <PostBox key={frontMatter.title}>
                <Thumbnail>
                  <img src={frontMatter.thumbnail} />
                </Thumbnail>
                <Contents>
                  <Title>{frontMatter.title}</Title>
                  <Description>{frontMatter.description}</Description>
                  <Date>{getDateString(frontMatter.date)}</Date>
                </Contents>
              </PostBox>
            );
          })}
        </PostContainer>
      </TempBoxForSceollEvent>
    </>
  );
};

export const getStaticProps = () => {
  const posts = getAllPosts().slice(0);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
