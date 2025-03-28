import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";
import {urlFor} from "@/lib/imageBuilder";

const PostIT = ({post, latest}) => {
    if (!post) return <p>Loading...</p>;

    return (
        <PostComponent
            language={'it'}
            post={post}
            latest={latest}
        />
    );
};

export default PostIT;


export async function getStaticProps({ params }) {
    const { post } = await fetchPostData(sanityClient, params.slug, 'it');

    if (!post) {
        return { notFound: true };
    }

    // Fetch the latest 3 posts excluding the current post
    const latestQuery = `
        *[_type == "post" && slug.it.current != $slug] 
        | order(publishedAt desc)[0...3] {
            title { it, en },
            slug { it, en },
            description { it, en },
            location { it, en },
            mainImage,
            publishedAt
        }
    `;

    const latestPosts = await sanityClient.fetch(latestQuery, { slug: params.slug });

    // Format the images
    const formattedLatest = latestPosts.map(post => ({
        ...post,
        image: post.mainImage ? urlFor(post.mainImage).width(500).url() : null
    }));

    return {
        props: {
            post,
            latest: formattedLatest
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