import sanityClient from "@/lib/sanityClient";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import {urlFor} from "@/lib/imageBuilder";
import ImageGrid from "@/components/ImageGrid";

const PostIT = ({post}) => {
    if (!post) return <p>Loading...</p>;

    // Link to english page
    const language = `/en/${post.slug.en.current}`;

    return (<>
        {/* Head */}
        <Head>
            <title>{post.title.it}</title>
        </Head>

        {/* Content */}
        <main>
            <Layout languageLink={language}>
                <div className="flex flex-row gap-y-16 my-10">
                    <h2 className="w-1/2 uppercase">{post.title.it}</h2>
                    <p className="w-1/2">{post.description.it}</p>
                </div>

                {post.mainImage && (<Image
                    src={urlFor(post.mainImage).url()}
                    alt="test"
                    width={1800}
                    height={1000}
                    className="w-full mx-auto aspect-[16/9] relative object-cover"
                />)}

                <div className="flex flex-row my-10 gap-x-10 justify-center">
                    <div className="w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[350px] sticky top-0 self-start">
                        <div className="sticky-wrapper">
                            <h3>STEFANO</h3>
                            <span className="flex flex-row justify-between">
                                    <p>Data</p>
                                    <p>{new Intl.DateTimeFormat("it-IT", {month: "long", year: "numeric"})
                                        .format(new Date(post.publishedAt))
                                        .replace(/^./, str => str.toUpperCase())}</p>
                                </span>
                            <span className="flex flex-row justify-between">
                                    <p>Lettura</p>
                                    <p>{post.readingTime} min</p>
                                </span>
                        </div>
                    </div>
                    <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[650px] whitespace-pre-wrap">
                        {/* Render first half */}
                        <p className={"my-0"}>{post.firstHalf}</p>

                        {/* Render quote if exists */}
                        <div className="flex flex-col">
                            <h1 className={"self-start mb-[-10%]"}>&ldquo;</h1>
                            <h3>{post.quote.it}</h3>
                            <h1 className={"self-end mt-[-5%] mb-[-5%]"}>&rdquo;</h1>
                        </div>

                        {/* Render second half */}
                        <p className={"my-0"}>{post.secondHalf}</p>
                    </div>
                </div>

                <ImageGrid images={post.images} />
            </Layout>
        </main>
    </>);
};

export default PostIT;

/**
 *  Fetch post data at build time
 */
export async function getStaticProps ({params}) {
    const query = `*[_type == "post" && slug.it.current == $slug][0] {
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

    const post = await sanityClient.fetch(query, {slug: params.slug});

    if (!post) {
        return {notFound: true};
    }


    // Split text in two after full stop
    // Convert the body blocks into a plain text string
    const bodyText = post.body.it
        .map(block => block.children.map(child => child.text).join("\n"))
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
    // Count words in the body text
    const wordCount = bodyText.split(/\s+/).filter(Boolean).length;

    // Calculate reading time (in minutes), assuming average reading speed of 200 WPM
    const readingTime = Math.ceil(wordCount / 200);

    return {
        props: {
            post: {
                ...post,
                firstHalf,
                secondHalf,
                readingTime
            }
        }
    };
}


/**
 *  Define slugs
 */
export async function getStaticPaths () {
    const query = `*[_type == "post"]{ "slug": slug.it.current }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: {slug: post.slug}
    }));

    return {
        paths, fallback: "blocking"
    };
}
