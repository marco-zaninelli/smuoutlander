import Link from "next/link";
import Instagram from "@/public/img/instagram.svg";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// Navigation bar with title, Instagram link, and language switcher
export default function NavBar({ languageLink }) {
    const { language, handleChange } = useLanguage(); // Get current language and language switch function

    return (
        <header className="w-full mx-auto flex flex-row justify-between border-b border-black items-center py-2 mt-2 px-4">
            {/* Blog title links to homepage in current language */}
            <Link href={language === "it" ? "/it" : "/en"}>
                <h3>IL BLOG DI SMU</h3>
            </Link>

            {/* Social + Language Switcher */}
            <div className="flex flex-row gap-x-4 items-center">
                {/* Instagram Icon */}
                <Link href="https://www.instagram.com/brucatostefano">
                    <Image
                        src={Instagram}
                        alt="Instagram"
                        width={30}
                        height={30}
                        className="w-4 md:w-5 lg:w-6 xl:w-7"
                    />
                </Link>

                {/* Language toggle button */}
                <div>
                    <button
                        onClick={() => handleChange(languageLink)}
                        className="hover:underline focus:outline-none"
                    >
                        <h4 className="my-0">{language === "it" ? "ENG" : "ITA"}</h4>
                    </button>
                </div>
            </div>
        </header>
    );
}
