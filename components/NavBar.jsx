import Link from "next/link";
import Instagram from "@/public/img/instagram.svg";
import Image from "next/image";
import {useLanguage} from "@/context/LanguageContext";

export default function NavBar ({languageLink}) {
    const {language, handleChange} = useLanguage();

    return (
        <div className="max-w-screen-2xl mx-auto flex flex-row border-b items-center border-black space-between">
            {/* Blog Title */}
            <h3>IL BLOG DI SMU</h3>

            {/* Navigation Items */}
            <div className="flex flex-row">
                <Link href="#">
                    <Image src={Instagram} alt="Instagram" width={18} height={18} />
                </Link>
                <div>
                    <button
                        onClick={() => handleChange(languageLink)}
                        className="hover:underline focus:outline-none"
                    >
                        {language === "it" ? "ITA" : "ENG"}
                    </button>
                </div>
            </div>
        </div>
    );
}
