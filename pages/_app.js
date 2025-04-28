import "../styles/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    useEffect(() => {
        if (router.isReady && (router.pathname === "/" || router.pathname === "/_error")) {
            console.log("Redirecting to /it...");
            router.replace("/it");
        }
    }, [router.isReady]);

    return (
        <LanguageProvider>
            {/*{loading && <LoadingScreen />}*/}
            <AnimatePresence mode="wait">
                <motion.div
                    key={router.route}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </LanguageProvider>
    );
}

export default MyApp;
