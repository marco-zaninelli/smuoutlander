import Head from "next/head";
import Layout from "@/components/Layout";
import LastPost from "@/components/LastPost";

export default function HomeIt() {
    const languageLink = "/en";

    return (
        <>
            <Head>
                <title>ITA</title>
            </Head>
            <main>
                <Layout languageLink={languageLink}>
                    <h1 className={'w-full text-center'}>DIARIO DI BORDO</h1>
                    <LastPost></LastPost>
                </Layout>
            </main>
        </>
    );
}
