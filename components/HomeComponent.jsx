import Head from "next/head";
import Layout from "@/components/Layout";
import LastPost from "@/components/LastPost";
import Post from "@/components/Post";

export default function HomeComponent ({posts, language}) {
    const isEnglish = language === "en";
    const lastPost = posts[0];
    const otherPosts = posts.slice(1);

    const title = {
        en: "The blog of SMU",
        it: "Il blog di SMU"
    };
    const description = {
        en: "Boundless explorations: stories and images of journeys through distant lands, told with authenticity.",
        it: "Esplorazioni senza confini: storie e immagini di viaggi attraverso terre lontane, raccontate con autenticità."
    };

    return (
        <>
            <Head>
                <title>{isEnglish ? title.en : title.it}</title>


                <meta name="description" content={isEnglish ? description.en : description.it} />
                <meta name="author" content="Stefano Brucato" />
                <meta name="robots" content="index, follow" />

                {/* Canonical URL */}
                <link rel="canonical" href={`https://www.smuoverlander.it/${isEnglish ? "en/" : "it/"}`} />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={isEnglish ? title.en : title.it} />
                <meta property="og:description" content={isEnglish ? description.en : description.it} />
                {/*<meta property="og:image" content={urlFor(post.mainImage).url()} />*/}
                <meta property="og:url" content={`https://www.smuoverlander.it/${isEnglish ? "en/" : "it/"}`} />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={isEnglish ? title.en : title.it} />
                <meta name="twitter:description" content={isEnglish ? description.en : description.it} />
                {/*<meta name="twitter:image" content={urlFor(post.mainImage).url()} />*/}
            </Head>
            <main>

                <Layout languageLink={""} language={language}>
                    <div className={"max-w-screen-xl mx-auto"}>
                        <h1 className={"w-full text-center"}>{isEnglish ? "TRAVEL JOURNAL" : "DIARIO DI BORDO"}</h1>
                        <LastPost
                            title={isEnglish ? lastPost.title.en : lastPost.title.it}
                            date={lastPost.publishedAt}
                            location={isEnglish ? lastPost.location.en : lastPost.location.it}
                            image={lastPost.image}
                            description={isEnglish ? lastPost.description.en : lastPost.description.it}
                            link={language + "/" + isEnglish ? lastPost.slug.en.current : lastPost.slug.it.current}
                        />
                        <div className={"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
                            {otherPosts.map((post, index) => (
                                <Post
                                    key={index}
                                    title={isEnglish ? post.title.en : post.title.it}
                                    date={post.publishedAt}
                                    location={isEnglish ? post.location.en : post.location.it}
                                    image={post.image}
                                    description={isEnglish ? post.description.en : post.description.it}
                                    link={language + "/" + isEnglish ? post.slug.en.current : post.slug.it.current}
                                />
                            ))}
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}