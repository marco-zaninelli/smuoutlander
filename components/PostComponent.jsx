import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import {urlFor} from "@/lib/imageBuilder";
import ImageGrid from "@/components/ImageGrid";

import Stefano from "@/public/img/Stefano-Brucato.png";

const PostComponent = ({post, language}) => {

    const isEnglish = language === "en";

    return (<>
        {/* Head */}
        <Head>
            <title>{isEnglish ? post.title.en : post.title.it}</title>
            <meta name="description" content={isEnglish ? post.description.en : post.description.it} />
            <meta name="author" content="Stefano Brucato" />
            <meta name="robots" content="index, follow" />

            {/* Canonical URL */}
            <link rel="canonical" href={`https://www.smuoverlander.it/it/${isEnglish ? post.slug.en.current : post.slug.it.current}`} />

            {/* Open Graph (Facebook, LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={isEnglish ? post.title.en : post.title.it} />
            <meta property="og:description" content={isEnglish ? post.description.en : post.description.it} />
            <meta property="og:image" content={urlFor(post.mainImage).url()} />
            <meta property="og:url" content={`https://www.smuoverlander.it/it/${post.currentLink}`} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={isEnglish ? post.title.en : post.title.it} />
            <meta name="twitter:description" content={isEnglish ? post.description.en : post.description.it} />
            <meta name="twitter:image" content={urlFor(post.mainImage).url()} />
        </Head>

        {/* Content */}
        <main>
            <Layout languageLink={isEnglish ? post.slug.it.current : post.slug.en.current}>
                <div className="flex flex-col items-start sm:flex-row sm:gap-y-16 my-6 sm:my-10 sm:items-center">
                    <h2 className="w-full sm:w-1/2 uppercase mb-2 sm:mb-0">{isEnglish ? post.title.en : post.title.it}</h2>
                    <p className="w-full sm:w-1/2">{isEnglish ? post.description.en : post.description.it}</p>
                </div>

                {post.mainImage && (<Image
                    src={urlFor(post.mainImage).url()}
                    alt="test"
                    width={1800}
                    height={1000}
                    className="w-full mx-auto aspect-[16/9] relative object-cover"
                />)}

                <div className="flex flex-col sm:flex-row my-10 gap-x-10 justify-center">
                    <div className="mx-auto max-w-[350px] w-full md:w-[250px] lg:w-[300px] 2xl:w-[350px] sm:sticky top-10 self-start mb-8 sm:mb-0">
                        <div
                            className="min-w-[200px] flex flex-row gap-x-4 lg:gap-x-8 items-center sm:items-start md:items-center pb-6 mb-6 border-b border-black">
                            <Image
                                src={Stefano}
                                alt={"Stefano Brucato"}
                                className={"w-10 md:w-11 h-10 md:h-11 lg:w-12 xl:w-[70px] lg:h-12 xl:h-[70px] rounded-full"}
                                height={50}
                                width={50} />
                            <h3>STEFANO</h3>
                        </div>
                        <span className="flex flex-row justify-between">
                            <p>{isEnglish ? "Date" : "Data"}</p>
                            <p className={"text-right"}>{post.formattedPublishedAt}</p>
                        </span>
                        <span className="flex flex-row justify-between">
                            <p>{isEnglish ? "Reading" : "Lettura"}</p>
                            <p className={"text-right"}>{post.readingTime} min</p>
                        </span>
                    </div>
                    <div className="mx-auto max-w-[450px] md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[650px] whitespace-pre-wrap">

                        {/* Render first half */}
                        <p className={"my-0"}>{post.firstHalf}</p>

                        {/* Render quote if exists */}
                        <div className="flex flex-col my-10 md:my-4">
                            <h1 className={"self-start mb-[-10%]"}>&ldquo;</h1>
                            <h3 className={"px-[5%] text-center"}>{isEnglish ? post.quote.en : post.quote.it}</h3>
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

export default PostComponent;