import FooterLink from "@/components/FooterLink";

export default function Footer ({language}) {
    const isEnglish = language === "en";

    return (
        <footer className="bg-black text-white px-4 mt-4 pt-12">
            <div className="max-w-screen-xl mx-auto">
                <div>
                    <div className={"flex flex-col sm:flex-row justify-between"}>
                        <div className={"mb-8"}>
                            <h3>{isEnglish ? "THE BLOG OF SMU" : "IL BLOG DI SMU"}</h3>
                            <p className={"max-w-[300px] md:max-w-[450px]"}>{isEnglish ? "Adventure begins where the map ends - follow curiosity, not just directions." : "L'avventura inizia dove finisce la mappa - segui la curiosità, non solo le direzioni.."}</p>
                        </div>
                        <div className={"flex flex-row gap-x-8 transition-all duration-300 mb-4"}>
                            <div className={"flex flex-col items-start sm:items-end"}>
                                <h3 className={"border-b border-white mb-2"}>SOCIAL</h3>
                                {/*TODO:: Insert correct link*/}
                                <FooterLink link={"#"}>Instagram</FooterLink>
                                <FooterLink link={"mailto:info@smuoverlander.it"}>Email</FooterLink>
                            </div>
                            <div className={"flex flex-col items-start sm:items-end"}>
                                <h3 className={"border-b border-white mb-2"}>{isEnglish ? "LEGAL" : "LEGALE"}</h3>
                                {/*TODO:: Insert correct link*/}
                                <FooterLink link={"#"}>Privacy Policy</FooterLink>
                                {/*TODO:: Insert correct link*/}
                                <FooterLink link={"#"}>Cookie Policy</FooterLink>
                            </div>
                        </div>
                    </div>
                    <div className={"py-4"}>
                        © {isEnglish ? "Website developed by" : "Sito sviluppato da"} <FooterLink link={"https://www.marco.zaninelli.me/"} external={true}>
                        Marco Zaninelli.
                    </FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}