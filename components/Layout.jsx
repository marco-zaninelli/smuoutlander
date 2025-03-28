import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({ children, languageLink, language }) {
    return (
        <div>
            <div className={'px-4'}>
                <NavBar languageLink = {languageLink} />
                {children}
            </div>
            <Footer language={language} />
        </div>
    )
}