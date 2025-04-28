import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";
import {fetchLatest} from "@/lib/fetchLatest";

import LoadingScreen from "@/components/LoadingScreen";

const PostIT = ({post, latest}) => {
    if (!post) return <LoadingScreen />;

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
    const {latest} = await fetchLatest(params.slug, "it", true);

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