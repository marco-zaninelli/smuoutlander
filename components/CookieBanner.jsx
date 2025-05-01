import CookieConsent, {Cookies} from "react-cookie-consent";
import {useRouter} from "next/router";

export default function CookieBanner () {
    const router = useRouter();
    const isEnglish = router.pathname.startsWith("/en");

    return (
        <CookieConsent
            location="bottom"
            buttonText={isEnglish ? "Accept all cookies" : "Accetta tutti i cookie"}
            declineButtonText={isEnglish ? "Only necessary" : "Solo tecnici"}
            enableDeclineButton
            cookieName="CookieConsent"
            style={{background: "#000"}}
            buttonStyle={{color: "#4e503b", fontSize: "12px"}}
            declineButtonStyle={{color: "#fff", background: "#888", fontSize: "13px"}}
            expires={150}
        >
            {isEnglish ? (
                <>
                    We use cookies to collect anonymous statistics (Google Analytics). By clicking “Accept,” you consent according to our{" "}
                    <a href={"/en/cookie"} className="underline">Cookie Policy</a>.
                </>
            ) : (
                <>
                    Utilizziamo cookie per raccogliere dati anonimi (Google Analytics). Cliccando “Accetta” autorizzi il trattamento secondo la nostra{" "}
                    <a href={"/it/cookie"} className="underline">Cookie Policy</a>.
                </>
            )}
        </CookieConsent>
    );
}
