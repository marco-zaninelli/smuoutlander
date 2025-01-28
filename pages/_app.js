import '../styles/globals.css';
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                      rel="stylesheet" />
            </Head>
            <LanguageProvider>
                <Component {...pageProps} />
            </LanguageProvider>
        </>
    );
}

export default MyApp;
