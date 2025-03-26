import Link from "next/link";
import Instagram from "@/public/img/instagram.svg";
import Image from "next/image";
import {useLanguage} from "@/context/LanguageContext";

export default function NavBar ({languageLink}) {
    const {language, handleChange} = useLanguage();

    return (
        <div className="w-full mx-auto flex flex-row justify-between border-b border-black items-center py-2 mt-2">
            {/* Blog Title */}
            <Link href={language === "it" ? "/it" : "/en"}>
                <h3>IL BLOG DI SMU</h3>
            </Link>

            {/* Navigation Items */}
            <div className="flex flex-row gap-x-4 items-center">
                <Link href="#">
                    <Image src={Instagram} alt="Instagram" width={30} height={30} className={"w-4 md:w-5 lg:w-6 xl:w-7"} />
                </Link>
                <div>
                    <button
                        onClick={() => handleChange(languageLink)}
                        className="hover:underline focus:outline-none"
                    >
                        <h4 className={"my-0"}>{language === "it" ? "ENG" : "ITA"}</h4>
                    </button>
                </div>
            </div>
        </div>
    );
}
