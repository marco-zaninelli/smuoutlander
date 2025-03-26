import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";

const PostEN = ({post}) => {
    if (!post) return <p>Loading...</p>;

    console.log("lang: ", post.slug.it.current);

    return (
        <PostComponent
            language={"en"}
            post={post}
        />
    );
};

export default PostEN;


export async function getStaticProps ({params}) {
    const {post} = await fetchPostData(sanityClient, params.slug, "en");

    if (!post) {
        return {notFound: true};
    }

    return {
        props: {
            post
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