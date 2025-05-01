import "../styles/globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        if (router.isReady && (router.pathname === "/" || router.pathname === "/_error")) {
            console.log("Redirecting to /it...");
            router.replace("/it");
        }
    }, [router.isReady]);

    return (
        <LanguageProvider>
            <GoogleAnalytics />

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

            <CookieBanner />
        </LanguageProvider>
    );
}

export default MyApp;
