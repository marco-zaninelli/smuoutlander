import Head from "next/head";
import Layout from "@/components/Layout";

export default function HomeEn () {
    const languageLink = "";

    return (
        <>
            <Head>
                <title>ENG</title>
            </Head>
            <Layout languageLink={languageLink} language={"en"} />
            <main>
                <h1>English Site</h1>
            </main>
        </>
    );
}
