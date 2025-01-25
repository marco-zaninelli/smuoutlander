import "../styles/globals.css";
import Head from "next/head";
import {LanguageProvider} from "@/context/LanguageContext";
import {useRouter} from "next/router";
import {useEffect} from "react";

function MyApp ({Component, pageProps}) {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady && (router.pathname === "/" || router.pathname === "/_error")) {
            console.log("Redirecting to /it...");
            router.replace("/it");
        }
    }, [router.isReady]);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <LanguageProvider>
                <Component {...pageProps} />
            </LanguageProvider>
        </>
    );
}

export default MyApp;
