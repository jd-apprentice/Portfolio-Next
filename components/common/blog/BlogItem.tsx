import React from "react";

interface Props {
    post: {
        title: string;
        brief: string;
        slug: string;
        coverImage: string;
        dateAdded: string;
    };
}

export default function BlogItem({ post }: Props) {
    const redirectToHashnode = () => {
        window.open("https://blog.jonathan.com.ar/" + post.slug, "_blank");
    };

    const getDateAdded = () => {
        const d = new Date(post.dateAdded);
        const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
        const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
        const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
        return `${mo} ${da}, ${ye}`;
    };

    const formattedDate = getDateAdded();

    return (
        <div
            className="card mb-3 border-light cursor-pointer"
            onClick={redirectToHashnode}
        >
            <img src={post.coverImage} className="img-fluid" alt="Post Cover" />
            <div className="card-body">
                <h3 className="card-title text-xl font-bold">{post.title}</h3>
                <h6 className="card-subtitle mb-2 text-gray-600">{formattedDate}</h6>
                <p className="card-text text-gray-800">{post.brief}</p>
            </div>
        </div>
    );
}
