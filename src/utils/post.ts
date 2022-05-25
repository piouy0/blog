import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export default function getTest() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames;
}
