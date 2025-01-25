import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({ children, languageLink }) {
    return (
        <>
            <NavBar languageLink = {languageLink} />
            {children}
            <Footer/>
        </>
    )
}