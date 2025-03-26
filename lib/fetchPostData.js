export async function fetchPostData(sanityClient, slug, language) {
    const query = `*[_type == "post" && slug.${language}.current == $slug][0] {
        title, 
        description, 
        mainImage, 
        publishedAt, 
        location, 
        body, 
        quote, 
        images,
        slug
    }`;

    const post = await sanityClient.fetch(query, { slug });

    if (!post) {
        return { notFound: true };
    }

    // Format publishedAt properly
    const formattedPublishedAt = new Intl.DateTimeFormat(language === 'en' ? 'en-GB' : 'it-IT', {
        month: 'long',
        year: 'numeric'
    }).format(new Date(post.publishedAt)).replace(/^./, (str) => str.toUpperCase());

    // Convert the body blocks into a plain text string
    const bodyText = post.body[language]
        .map((block) => block.children.map((child) => child.text).join("\n"))
        .join("\n");

    // Find the middle index of the bodyText
    const middleIndex = Math.floor(bodyText.length / 2);

    // Find the first full stop after the middle index
    const nextFullStopIndex = bodyText.indexOf(".", middleIndex);

    let firstHalf, secondHalf;

    if (nextFullStopIndex !== -1) {
        // Split at the first full stop after the middle index
        firstHalf = bodyText.slice(0, nextFullStopIndex + 1);
        secondHalf = bodyText.slice(nextFullStopIndex + 1).trim();
    } else {
        // If no full stop is found, just split the text in the middle
        firstHalf = bodyText.slice(0, middleIndex);
        secondHalf = bodyText.slice(middleIndex).trim();
    }

    // Calculate reading time
    const wordCount = bodyText.split(/\s+/).filter(Boolean).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
        post: {
            ...post,
            firstHalf,
            secondHalf,
            readingTime,
            formattedPublishedAt
        }
    };
}
