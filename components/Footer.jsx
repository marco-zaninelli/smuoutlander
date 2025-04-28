import FooterLink from "@/components/FooterLink";

// Footer component with multilingual support (English/Italian)
export default function Footer({ language }) {
    // Check if the selected language is English
    const isEnglish = language === "en";

    return (
        <footer className="bg-black text-white px-4 mt-4 pt-12">
            <div className="max-w-screen-xl mx-auto">
                <div>

                    {/* Main layout: column on small screens, row on larger */}
                    <div className={"flex flex-col sm:flex-row justify-between"}>
                        <div className={"mb-8"}>

                            {/* Blog title and slogan based on selected language */}
                            <h3>{isEnglish ? "THE BLOG OF SMU" : "IL BLOG DI SMU"}</h3>
                            <p className={"max-w-[300px] md:max-w-[450px]"}>
                                {isEnglish
                                    ? "Adventure begins where the map ends - follow curiosity, not just directions."
                                    : "L'avventura inizia dove finisce la mappa - segui la curiosità, non solo le direzioni.."}
                            </p>
                        </div>

                        {/* Social and Legal links sections */}
                        <div className={"flex flex-row gap-x-8 transition-all duration-300 mb-4"}>

                            {/* Social links (Instagram & Email) */}
                            <div className={"flex flex-col items-start sm:items-end"}>
                                <h3 className={"border-b border-white mb-2"}>SOCIAL</h3>
                                <FooterLink link={"https://www.instagram.com/brucatostefano"}>Instagram</FooterLink>
                                <FooterLink link={"mailto:info@smuoverlander.it"}>Email</FooterLink>
                            </div>

                            {/* Legal links (Privacy & Cookie Policy) */}
                            <div className={"flex flex-col items-start sm:items-end"}>
                                <h3 className={"border-b border-white mb-2"}>
                                    {isEnglish ? "LEGAL" : "LEGALE"}
                                </h3>
                                {/* TODO: Replace "#" with actual Privacy Policy link */}
                                <FooterLink link={"#"}>Privacy Policy</FooterLink>
                                {/* TODO: Replace "#" with actual Cookie Policy link */}
                                <FooterLink link={"#"}>Cookie Policy</FooterLink>
                            </div>
                        </div>
                    </div>

                    {/* Developer credit line */}
                    <div className={"py-4"}>
                        © {isEnglish ? "Website developed by" : "Sito sviluppato da"}{" "}
                        <FooterLink link={"https://www.marco.zaninelli.me/"} external={true}>
                            Marco Zaninelli.
                        </FooterLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
