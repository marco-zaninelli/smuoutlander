import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";
import {urlFor} from "@/lib/imageBuilder";
import {fetchLatest} from "@/lib/fetchLatest";

const PostIT = ({post, latest}) => {
    if (!post) return <p>Loading...</p>;

    return (
        <PostComponent
            language={"it"}
            post={post}
            latest={latest}
        />
    );
};

export default PostIT;


export async function getStaticProps ({params}) {

    const {post} = await fetchPostData(params.slug, "it");
    const {latest} = await fetchLatest(params.slug, "it");

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
    const query = `*[_type == "post"]{ "slug": slug.it.current }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: {slug: post.slug}
    }));

    return {
        paths,
        fallback: "blocking"
    };
}