import useTranslation from "next-translate/useTranslation";
import BlogItem from "./BlogItem";

interface Props {
    publications: {
        data: {
            user: {
                publication: {
                    posts: {
                        title: string;
                        brief: string;
                        slug: string;
                        coverImage: string;
                        dateAdded: string;
                    }[]
                }
            };
        };
    }
}

export default function BlogList({ publications }: Props) {
    const { t } = useTranslation("index");
    let posts = publications.data.user.publication.posts;

    return (
        <div className="mt-5">
            <div className="mb-4">
                <h2 className="text-2xl font-bold">{t("publications")}</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {posts.map((post, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center p-4 bg-white rounded-lg shadow-md inline-block px-6 py-2.5 bg-red-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:text-white hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:text-white active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:focus:bg-blue-700"
                        >
                            <BlogItem post={post} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
