import Script from "next/script";
import { Cookies } from "react-cookie-consent";

export default function GoogleAnalytics() {
    const accepted = Cookies.get("CookieConsent");

    if (accepted !== "true") return null;

    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {/*TODO:: configure google analytics*/}
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID}', { anonymize_ip: true });
                `}
            </Script>
        </>
    );
}
