import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";
import ImageGrid from "@/components/ImageGrid";

import Stefano from "@/public/img/Stefano-Brucato.png";
import Post from "@/components/Post";

const PostComponent = ({ post, language, latest }) => {
    const isEnglish = language === "en";

    return (
        <>
            {/* Meta Head for SEO and social sharing */}
            <Head>
                <title>{isEnglish ? post.title.en : post.title.it}</title>
                <meta name="description" content={isEnglish ? post.description.en : post.description.it} />
                <meta name="author" content="Stefano Brucato" />
                <meta name="robots" content="index, follow" />

                {/* Canonical link */}
                <link
                    rel="canonical"
                    href={`https://www.smuoverlander.it/${isEnglish ? "en/" + post.slug.en.current : "it/" + post.slug.it.current}`}
                />

                {/* Open Graph meta tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={isEnglish ? post.title.en : post.title.it} />
                <meta property="og:description" content={isEnglish ? post.description.en : post.description.it} />
                <meta property="og:image" content={urlFor(post.mainImage).url()} />
                <meta property="og:url" content={`https://www.smuoverlander.it/it/${post.currentLink}`} />

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={isEnglish ? post.title.en : post.title.it} />
                <meta name="twitter:description" content={isEnglish ? post.description.en : post.description.it} />
                <meta name="twitter:image" content={urlFor(post.mainImage).url()} />
            </Head>

            <main>
                <Layout languageLink={isEnglish ? post.slug.it.current : post.slug.en.current} language={language}>
                    <div className="max-w-screen-xl mx-auto">

                        {/* Title and short description */}
                        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-16 my-6 sm:my-10 sm:items-center gap-x-4">
                            <h2 className="w-full sm:w-1/2 xl:w-3/5 uppercase leading-snug">{isEnglish ? post.title.en : post.title.it}</h2>
                            <p className="w-full sm:w-1/2 xl:w-2/5">{isEnglish ? post.description.en : post.description.it}</p>
                        </div>

                        {/* Featured image */}
                        {post.mainImage && (
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title.en}
                                width={1800}
                                height={1000}
                                className="w-full mx-auto aspect-[16/9] object-cover"
                            />
                        )}

                        {/* Content section with author info and text */}
                        <div className="flex flex-col sm:flex-row my-10 gap-x-10 justify-center">
                            {/* Author & meta info sidebar */}
                            <div className="mx-auto max-w-[350px] w-full sm:sticky top-10 self-start mb-8 sm:mb-0">
                                <div className="flex gap-x-4 items-center pb-6 mb-6 border-b border-black">
                                    <Image
                                        src={Stefano}
                                        alt="Stefano Brucato"
                                        width={50}
                                        height={50}
                                        className="rounded-full w-10 h-10 md:w-12 md:h-12 xl:w-[70px] xl:h-[70px]"
                                    />
                                    <h3>STEFANO</h3>
                                </div>
                                <span className="flex justify-between">
                                    <p>{isEnglish ? "Date" : "Data"}</p>
                                    <p className="text-right">{post.formattedPublishedAt}</p>
                                </span>
                                <span className="flex justify-between">
                                    <p>{isEnglish ? "Reading" : "Lettura"}</p>
                                    <p className="text-right">{post.readingTime} min</p>
                                </span>
                            </div>

                            {/* Main blog content */}
                            <div className="mx-auto max-w-[650px] whitespace-pre-wrap">
                                <p className="my-0">{post.firstHalf}</p>

                                {/* Pull quote */}
                                <div className="flex flex-col my-10 py-4 border-y border-black">
                                    <h3 className="self-start mb-[-10%] text-[2rem] sm:text-[3rem] lg:text-[6rem]">&ldquo;</h3>
                                    <h3 className="px-[5%] text-center lg:text-left">{isEnglish ? post.quote.en : post.quote.it}</h3>
                                    <h3 className="self-end mt-[-5%] mb-[-5%] text-[2rem] sm:text-[3rem] lg:text-[6rem]">&rdquo;</h3>
                                </div>

                                <p className="my-0">{post.secondHalf}</p>
                            </div>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="max-w-screen-2xl mx-auto">
                        <ImageGrid images={post.images} />
                    </div>

                    {/* Latest blog post previews */}
                    <div className="mt-12 md:mt-24 border-t border-black max-w-screen-xl mx-auto">
                        <h2 className="uppercase mb-6">{isEnglish ? "Latest Posts" : "Ultimi Articoli"}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {latest.map((latestPost, index) => (
                                <Post
                                    key={index}
                                    title={isEnglish ? latestPost.title.en : latestPost.title.it}
                                    date={latestPost.publishedAt}
                                    location={isEnglish ? latestPost.location.en : latestPost.location.it}
                                    image={latestPost.image}
                                    description={isEnglish ? latestPost.description.en : latestPost.description.it}
                                    link={isEnglish ? latestPost.slug.en.current : latestPost.slug.it.current}
                                />
                            ))}
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default PostComponent;
