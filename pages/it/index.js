import Head from "next/head";
import Layout from "@/components/Layout";
import LastPost from "@/components/LastPost";
import Post from "@/components/Post";
import sanityClient from '@/lib/sanityClient';

import test from '@/public/img/test.png'
import {urlFor} from "@/lib/imageBuilder";

export default function HomeIt({posts}) {
    const languageLink = "/en";

    return (
        <>
            <Head>
                <title>ITA</title>
            </Head>
            <main>
                <Layout languageLink={languageLink}>
                    <h1 className={'w-full text-center'}>DIARIO DI BORDO</h1>
                    <LastPost
                        title={'Prparazione alla partenza'}
                        date={'Agosto 2024'}
                        location={'Italia'}
                        image={test}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis.'}
                    />
                    <div className={'mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'}>
                        {posts.map((post, index) => (
                            <Post
                                key={index}
                                title={post.title.it}
                                date={post.publishedAt}
                                location={"Italia"}
                                image={post.image}
                                description={post.description.it}
                                link={'#'}
                            />
                        ))}
                    </div>
                </Layout>
            </main>
        </>
    );
}

export async function getStaticProps() {
    const query = `
    *[_type == "post"] {
      title { it, en },
      slug { it, en },
      description { it, en },
      mainImage,
      publishedAt
    }
  `;

    const posts = await sanityClient.fetch(query);

    const formattedPosts = posts.map(post => ({
        ...post,
        image: post.mainImage ? urlFor(post.mainImage).width(500).url() : null
    }));

    try {
        const posts = await sanityClient.fetch(query);
        console.log("Fetched posts:", posts); // Debugging output

        const formattedPosts = posts.map(post => ({
            ...post,
            image: post.mainImage ? urlFor(post.mainImage).width(500).url() : null
        }));

        console.log("Formatted posts:", formattedPosts); // Debugging output

        return {
            props: {
                posts: formattedPosts,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error("Error fetching posts:", error);
        return {
            props: {
                posts: [],
            },
        };
    }
}
