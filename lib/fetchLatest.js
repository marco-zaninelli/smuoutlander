import sanityClient from "@/lib/sanityClient";
import {urlFor} from "@/lib/imageBuilder";

export async function fetchLatest (slug, language) {
    const latestQuery = `
        *[_type == "post"${language ? ` && slug.${language}.current != $slug]` : ""}
        | order(publishedAt desc)[0...3] {
            title,
            slug,
            description,
            location,
            mainImage,
            publishedAt
        }
    `;

    const latestPosts = await sanityClient.fetch(latestQuery, {slug});

    // Format the images
    const formattedLatest = latestPosts.map(post => ({
        ...post,
        image: post.mainImage ? urlFor(post.mainImage).width(500).url() : null,
        publishedAt: post.publishedAt
            ? new Intl.DateTimeFormat('it-IT', { month: 'long', year: 'numeric' })
                .format(new Date(post.publishedAt))
                .replace(/^./, str => str.toUpperCase())
            : null
    }));

    return {
        latest: formattedLatest
    };
}