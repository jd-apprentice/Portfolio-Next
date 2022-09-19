import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { IPost } from "../../models";
import Head from "next/head";
import { config } from "../../config";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function PostPage({
  frontmatter: { title, date, cover_image, alt, excerpt },
  content,
}: IPost) {
  return (
    <>
      <Head>
        <title>Jonathan Dyallo - Blog</title>
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="https://raw.githubusercontent.com/jd-apprentice/Portfolio-Next/main/public/favicon.png"
        />
        <meta property="og:image" content={config.github.url} />
        <meta name="description" content={excerpt}></meta>
        <meta property="og:description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://jonathandyallo.vercel.app" />
      </Head>
      <div className="container mx-auto">
        <div className="flex justify-start text-center">
          <Link href="/blog">
            <button
              type="button"
              className="me-5 mt-3 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:focus:bg-blue-700"
            >
              Go back
            </button>
          </Link>
        </div>
        <div>
          <div className="text-center">
            <h1 className="text-3xl">{title}</h1>
            <div className="text-xl">Posted on {date}</div>
            <img src={cover_image} alt={alt} />
          </div>
          <div className="text-base mx-auto mt-3 py-3">
            {/* @ts-ignore */}
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.flatMap((filename) => {
    return locales.map((locale) => {
      return {
        params: {
          slug: filename.replace(".md", ""),
        },
        locale,
      };
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string; locale: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
