import Head from "next/head";
import Layout from "@/components/Layout";
import LastPost from "@/components/LastPost";
import Post from "@/components/Post";
import LocationBanner from "@/components/LocationBanner";

// Home page component that displays the latest blog posts with multilingual support
export default function HomeComponent ({posts, language}) {
    // Check if the selected language is English
    const isEnglish = language === "en";

    // Extract the most recent post and the rest of the posts
    const lastPost = posts[0];
    const otherPosts = posts.slice(1);

    // Page title and meta description in both languages
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
            {/* SEO and social meta tags */}
            <Head>
                <title>{isEnglish ? title.en : title.it}</title>
                <meta name="description" content={isEnglish ? description.en : description.it} />
                <meta name="author" content="Stefano Brucato" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://www.smuoverlander.it/${isEnglish ? "en/" : "it/"}`} />

                {/* Open Graph tags for social sharing */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={isEnglish ? title.en : title.it} />
                <meta property="og:description" content={isEnglish ? description.en : description.it} />
                {/* Optional: og:image */}
                <meta property="og:url" content={`https://www.smuoverlander.it/${isEnglish ? "en/" : "it/"}`} />

                {/* Twitter Card metadata */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={isEnglish ? title.en : title.it} />
                <meta name="twitter:description" content={isEnglish ? description.en : description.it} />
                {/* Optional: twitter:image */}
            </Head>

            <main>
                {/* Layout wrapper with language support */}
                <Layout languageLink={""} language={language}>
                    <div className={"max-w-screen-xl mx-auto"}>
                        {/* Page heading */}
                        <h1 className={"w-full text-center"}>
                            {isEnglish ? "TRAVEL JOURNAL" : "DIARIO DI BORDO"}
                        </h1>

                        {/* Featured latest post */}
                        <LastPost
                            title={isEnglish ? lastPost.title.en : lastPost.title.it}
                            date={lastPost.publishedAt}
                            location={isEnglish ? lastPost.location.en : lastPost.location.it}
                            image={lastPost.image}
                            description={isEnglish ? lastPost.description.en : lastPost.description.it}
                            link={
                                isEnglish
                                    ? language + "/" + lastPost.slug.en.current
                                    : language + "/" + lastPost.slug.it.current
                            }
                        />

                        <LocationBanner />

                        {/* Grid of other recent posts */}
                        <div className={"mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"}>
                            {otherPosts.map((post, index) => (
                                <Post
                                    key={index}
                                    title={isEnglish ? post.title.en : post.title.it}
                                    date={post.publishedAt}
                                    location={isEnglish ? post.location.en : post.location.it}
                                    image={post.image}
                                    description={isEnglish ? post.description.en : post.description.it}
                                    link={
                                        isEnglish
                                            ? language + "/" + post.slug.en.current
                                            : language + "/" + post.slug.it.current
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
