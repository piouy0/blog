import React from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import BlogHead from "components/BlogHead";
import Layout from "components/layout/Layout";

import { getAllPosts, Post } from "utils/post";
import { themedPalette } from "styles/theme";
import { getDateString } from "utils/date";
import { DEFAULT_NUMBER_OF_POSTS } from "constants/post";

const Wrapper = styled.div`
  padding-top: 16px;
`;

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -16px;
`;

const PostBox = styled.div`
  overflow: hidden;
  width: 320px;
  margin: 16px;
  background: ${themedPalette.layoutBackground};
  border-radius: 4px;
  box-shadow: ${themedPalette.boxShadow};
  transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
  cursor: pointer;

  &:hover {
    box-shadow: ${themedPalette.boxHighlightingShadow};
    transform: translateY(-4%);
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
  const router = useRouter();

  const handleRoute = slug => () => {
    router.push(slug);
  };

  return (
    <Layout withFilter={true}>
      <>
        <BlogHead />
      </>
      <Wrapper>
        <PostContainer>
          {posts.map(post => {
            const { frontMatter, fields } = post;

            return (
              <PostBox key={frontMatter.title} onClick={handleRoute(fields.slug)}>
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
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps = () => {
  // TODO : Paging 처리 고민하기
  const posts: Post[] = getAllPosts().slice(0);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
