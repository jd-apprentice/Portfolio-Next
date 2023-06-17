import BlogList from "../../components/common/blog/BlogList";

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
                    };
                };
            }
        }
    };
}

export default function Home({ publications }: Props) {
    return (
        <div>
            <BlogList publications={publications} />
        </div>
    );
}

export async function getServerSideProps() {
    const KEY = process.env.HASHNODE_KEY || "";
    const res = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: KEY,
        },
        body: JSON.stringify({
            query:
                'query {user(username: "dyallo") {publication {posts(page: 0) {title brief slug coverImage dateAdded}}}}',
        }),
    });
    const publications = await res.json();

    if (!publications) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            publications,
        },
    };
}
