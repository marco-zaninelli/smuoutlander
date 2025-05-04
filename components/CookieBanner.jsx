import CookieConsent from "react-cookie-consent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CookieBanner() {
    const router = useRouter();
    const isEnglish = router.pathname.startsWith("/en");
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const consent = document.cookie.includes("CookieConsent");
        if (consent) {
            setShowBanner(false);
        } else {
            document.body.style.overflow = "hidden"; // block scrolling
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleAcceptOrDecline = () => {
        document.body.style.overflow = "auto";
        setShowBanner(false); // Hide the banner once a button is clicked
    };

    if (!showBanner) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-85 z-[9999] flex justify-center items-center">
            <div className="mx-auto">
                <CookieConsent
                    location="none"
                    cookieName="CookieConsent"
                    style={{
                        position: "relative",
                        background: "transparent",
                        maxWidth: "600px",
                        textAlign: "center",
                        padding: "1rem",
                        color: "#fff",
                        fontSize: "14px",
                        lineHeight: "1.6",
                    }}
                    contentStyle={{ flex: "1 1 100%", marginBottom: "1.5rem" }}
                    expires={150}
                >
                    {isEnglish ? (
                        <>
                            We use cookies to collect anonymous statistics (Google Analytics). By clicking “Accept,” you consent according to our{" "}
                            <a href="/en/cookie" className="underline text-white hover:text-gray-300">
                                Cookie Policy
                            </a>.
                        </>
                    ) : (
                        <>
                            Utilizziamo cookie per raccogliere dati anonimi (Google Analytics). Cliccando “Accetta” autorizzi il trattamento secondo la nostra{" "}
                            <a href="/it/cookie" className="underline text-white hover:text-gray-300">
                                Cookie Policy
                            </a>.
                        </>
                    )}
                    <div className="flex flex-col sm:flex-row justify-center mt-16">

                        {/* Custom Decline Button */}
                        <button
                            onClick={handleAcceptOrDecline}
                            className="mb-4 sm:mb-0 sm:mr-16 text-white bg-transparent underline font-medium hover:text-gray-300"
                        >
                            {isEnglish ? "Only necessary" : "Solo tecnici"}
                        </button>

                        {/* Custom Accept Button */}
                        <button
                            onClick={handleAcceptOrDecline}
                            className="text-white bg-transparent border border-white py-2 px-6 font-medium hover:bg-white hover:text-black"
                        >
                            {isEnglish ? "Accept all cookies" : "Accetta tutti i cookie"}
                        </button>
                    </div>
                </CookieConsent>
            </div>
        </div>
    );
}
