import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";
import {fetchLatest} from "@/lib/fetchLatest";

const PostEN = ({post, latest}) => {
    if (!post) return <div className="loader"></div>;

    return (
        <PostComponent
            language={"en"}
            post={post}
            latest={latest}
        />
    );
};

export default PostEN;


export async function getStaticProps ({params}) {
    const {post} = await fetchPostData(params.slug, "en");
    const {latest} = await fetchLatest(params.slug, "en", true);

    if (!post) {
        return {notFound: true};
    }

    if (!latest) {
        return {notFound: true};
    }

    return {
        props: {
            post,
            latest
        },
        revalidate: 60,
    }
}

export async function getStaticPaths () {
    const query = `*[_type == "post"]{ "slug": slug.en.current }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: {slug: post.slug}
    }));

    return {
        paths,
        fallback: true,
    };
}