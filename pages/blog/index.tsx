import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../../components/post/index";
import { sortByDate } from "../../utils/index";
import { Key } from "react";
import { IPost, PostsType } from "../../models";

export default function Blog({ posts }: PostsType) {
  return (
    <div>
      <Head>
        <title>Jonathan Dyallo - Blog</title>
      </Head>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {posts.map((post: IPost, index: Key | null | undefined) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      // @ts-ignore
      posts: posts.sort(sortByDate),
    },
  };
}
