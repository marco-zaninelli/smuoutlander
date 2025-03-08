import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import sanityClient from "@/lib/sanityClient";

const PostEN = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (slug) {
            sanityClient
                .fetch(
                    `*[_type == "post" && slug.en.current == $slug][0] {
                        title, 
                        description, 
                        mainImage, 
                        publishedAt, 
                        location, 
                        body, 
                        quote, 
                        images
                    }`,
                    { slug }
                )
                .then((data) => setPost(data))
                .catch(console.error);
        }
    }, [slug]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h1>{post.title.en}</h1>
            <p>{post.description.en}</p>
            {/* Render other post details here */}
        </div>
    );
};

export default PostEN;
