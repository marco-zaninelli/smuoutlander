import Head from "next/head";
import Layout from "@/components/Layout";
import LastPost from "@/components/LastPost";
import Post from "@/components/Post";
import sanityClient from "@/lib/sanityClient";

import {urlFor} from "@/lib/imageBuilder";

export default function HomeIt ({posts}) {
    const languageLink = "/en";
    const latestPost = posts[0];
    const otherPosts = posts.slice(1);

    const slug = posts[1].slug.it;

    return (
        <>
            <Head>
                <title>ITA</title>
            </Head>
            <main>
                <Layout languageLink={languageLink}>
                    <h1 className={"w-full text-center"}>DIARIO DI BORDO</h1>
                    <LastPost
                        title={latestPost.title.it}
                        date={latestPost.publishedAt}
                        location={latestPost.location.it}
                        image={latestPost.image}
                        description={latestPost.description.it}
                    />
                    <div className={"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
                        {otherPosts.map((post, index) => (
                            <Post
                                key={index}
                                title={post.title.it}
                                date={post.publishedAt}
                                location={post.location.it}
                                image={post.image}
                                description={post.description.it}
                                link={"it/" + post.slug.it.current}
                            />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
}

export async function getStaticProps () {
    const query = `
    *[_type == "post"] {
      title { it },
      slug { it },
      description { it },
      location { it },
      mainImage,
      publishedAt,
    }
  `;

    const posts = await sanityClient.fetch(query);

    const formattedPosts = posts.map(post => ({
        ...post,
        image: post.mainImage ? urlFor(post.mainImage).width(500).url() : null
    }));

    try {
        const posts = await sanityClient.fetch(query);

        const formattedPosts = posts.map(post => ({
            ...post,
            image: post.mainImage ? urlFor(post.mainImage).width(500).url() : null
        }));

        return {
            props: {
                posts: formattedPosts
            },
            revalidate: 60
        };
    } catch (error) {
        return {
            props: {
                posts: []
            }
        };
    }
}
