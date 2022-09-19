import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { PostType } from "../../models";

export default function Post({ post }: PostType) {
  const { t } = useTranslation("index");
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href="#">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src={post.frontmatter.cover_image}
          />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a
              className="no-underline hover:underline dark:text-white"
              href="#"
            >
              {post.frontmatter.title}
            </a>
          </h1>
        </header>

        <main className="flex items-center justify-between leading-tight p-2 md:p-4">
          <p className="dark:text-white">{post.frontmatter.excerpt} </p>
        </main>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <Link
            className="no-underline text-grey-darker hover:text-red-dark"
            href={`/blog/${post.slug}`}
          >
            <button
              type="button"
              className="me-5 mt-3 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:focus:bg-blue-700"
            >
              {t("read_more")}
            </button>
          </Link>
          <p className="text-grey-darker text-sm">{post.frontmatter.date}</p>
        </footer>
      </article>
    </div>
  );
}
