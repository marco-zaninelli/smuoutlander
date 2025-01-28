import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Layout({ children, languageLink }) {
    return (
        <div className={"px-4 max-w-screen-xl mx-auto"}>
            <NavBar languageLink = {languageLink} />
            {children}
            <Footer/>
        </div>
    )
}