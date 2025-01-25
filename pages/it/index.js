import Head from "next/head";
import Layout from "@/components/Layout";

export default function HomeIt() {
    const languageLink = "/en";

    return (
        <>
            <Head>
                <title>ITA</title>
            </Head>
            <main>
                <Layout languageLink={languageLink}>
                    <h1>Italian Site</h1>
                </Layout>
            </main>
        </>
    );
}
