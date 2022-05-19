import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
  imgUrl?: string;
}

const siteUrl = "";
const siteName = "piouy0";

const BlogHead: React.FC<Props> = ({
  title = "Blog",
  description = "개인 기술 블로그입니다.",
  keywords = "Blog, 블로그",
  imgUrl = "",
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:url" content={`${siteUrl}${router.asPath}`} />
      <meta property="og:image" content={imgUrl} />
      <meta charSet="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`${siteUrl}${router.asPath}`} />
    </Head>
  );
};

export default BlogHead;
