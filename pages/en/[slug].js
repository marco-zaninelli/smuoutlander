import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";
import {urlFor} from "@/lib/imageBuilder";
import {fetchLatest} from "@/lib/fetchLatest";

const PostEN = ({post, latest}) => {
    if (!post) return <p>Loading...</p>;

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
    const {latest} = await fetchLatest(params.slug, "en");

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
        }
    };
}

export async function getStaticPaths () {
    const query = `*[_type == "post"]{ "slug": slug.en.current }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: {slug: post.slug}
    }));

    return {
        paths,
        fallback: "blocking"
    };
}