import Link from "next/link";
import Instagram from "@/public/img/instagram.svg";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function NavBar({ languageLink }) {
    const { language, handleChange } = useLanguage();

    return (
        <div className="max-w-screen-2xl mx-auto flex flex-row justify-between items-center border-b p-4">
            {/* Blog Title */}
            <h3>IL BLOG DI SMU</h3>

            {/* Navigation Items */}
            <div>
                <Link href="#">
                    <Image src={Instagram} alt="Instagram" width={24} height={24} />
                </Link>
                <div>
                    <button onClick={() => handleChange(languageLink)}>
                        {language === 'it' ? 'ITA' : 'ENG'}
                    </button>
                </div>
            </div>
        </div>
    );
}
