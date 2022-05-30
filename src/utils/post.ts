import fs from "fs";
import path from "path";
import { sync } from "glob";
import frontMatter from "front-matter";

export interface FrontMatter {
  thumbnail: string;
  title: string;
  group: string[];
  tags: string[];
  published: boolean;
  date: string;
  description: string;
}

export interface Post {
  fields: {
    slug: string;
  };
  frontMatter: FrontMatter;
  body: string;
  path: string;
}

const POST_DIR_NAME = "/posts";
const POST_PATH = path.join(process.cwd(), POST_DIR_NAME);

export function getAllPosts() {
  const files = sync(`${POST_PATH}/**/*.md*`).reverse();

  const posts = files
    .reduce((acc, path) => {
      const file = fs.readFileSync(path, { encoding: "utf8" });
      const { attributes, body } = frontMatter<FrontMatter>(file);
      const fm: FrontMatter = attributes;
      const { tags: fmTags, published, date } = fm;

      const slug = path
        .slice(path.indexOf(POST_DIR_NAME) + POST_DIR_NAME.length + 1)
        .replace(".mdx", "")
        .replace(".md", "");

      if (published) {
        const tags: string[] = (fmTags || []).map((tag: string) => tag.trim());

        const result: Post = {
          frontMatter: {
            ...fm,
            tags,
            date: new Date(date).toISOString().substring(0, 19),
          },
          body,
          fields: {
            slug,
          },
          path,
        };

        acc.push(result);
      }

      return acc;
    }, [])
    .sort((a, b) => {
      if (a.frontMatter.date < b.frontMatter.date) {
        return 1;
      }
      if (a.frontMatter.date > b.frontMatter.date) {
        return -1;
      }
      return 0;
    });

  return posts;
}

const convertToDates = datas => datas.map(data => parseInt(data, 10));

export function getPostDates() {
  const fileNames = fs.readdirSync(POST_PATH);
  const postDates = convertToDates(fileNames);

  return postDates;
}
