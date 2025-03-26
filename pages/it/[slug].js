import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";

const PostIT = ({post}) => {
    if (!post) return <p>Loading...</p>;

    console.log("lang: EN/", post.slug.en.current);

    return (
        <PostComponent
            language={'it'}
            post={post}
        />
    );
};

export default PostIT;


export async function getStaticProps({ params }) {
    const { post } = await fetchPostData(sanityClient, params.slug, 'it');

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post
        }
    };
}

export async function getStaticPaths() {
    const query = `*[_type == "post"]{ "slug": slug.it.current }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: { slug: post.slug }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
}