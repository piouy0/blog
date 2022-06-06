import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Layout from "components/layout/Layout";
import MdxComponents from "components/MdxComponents";
import PostLayout from "components/layout/PostLayout";

import { getAllPosts, Post } from "utils/post";
import { parseMarkdownToMdx } from "utils/markdown";

const Wrapper = styled.div``;

interface Props {
  post: Post;
  mdx: MDXRemoteSerializeResult;
}

const PostPage: NextPage<Props> = ({ post, mdx }) => {
  const router = useRouter();

  return (
    <Layout>
      <Wrapper>
        <PostLayout frontMatter={post.frontMatter} slug={post.fields.slug}>
          <MDXRemote {...mdx} components={MdxComponents} />
        </PostLayout>
      </Wrapper>
    </Layout>
  );
};

export async function getStaticPaths() {
  const posts: Post[] = getAllPosts();

  const paths: {
    params: {
      year: string;
      slugs: string[];
    };
  }[] = posts.reduce<
    Array<{
      params: {
        year: string;
        slugs: string[];
      };
    }>
  >((acc, { fields: { slug } }) => {
    const [year, ...slugs] = slug.split("/");

    acc.push({
      params: {
        year,
        slugs,
      },
    });

    return acc;
  }, []);

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async ({ params }) => {
  const posts = getAllPosts();
  const { year, slugs } = params;
  const slug = [year, ...slugs].join("/");

  const post = posts.find(post => post.fields?.slug === slug);

  if (post) {
    const source = await parseMarkdownToMdx(post.body, post.path);
    return {
      props: {
        post,
        mdx: source,
      },
    };
  }

  return {
    notFound: true,
  };
};

export default PostPage;
