import sanityClient from "@/lib/sanityClient";
import PostComponent from "@/components/PostComponent";
import {fetchPostData} from "@/lib/fetchPostData";
import {urlFor} from "@/lib/imageBuilder";

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


export async function getStaticProps({ params }) {
    const { post } = await fetchPostData(sanityClient, params.slug, "en");

    if (!post) {
        return { notFound: true };
    }

    // Fetch the latest 3 posts excluding the current one
    const latestQuery = `
        *[_type == "post" && slug.en.current != $slug] 
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

    // Format images
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