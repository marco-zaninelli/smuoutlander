import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Common layout wrapper that includes the navbar and footer
export default function Layout({ children, languageLink, language }) {
    return (
        <div>
            {/* Main content area with padding */}
            <div className="px-4">
                {/* Navigation bar at the top */}
                <NavBar languageLink={languageLink} />

                {/* Page-specific content */}
                {children}
            </div>

            {/* Footer at the bottom */}
            <Footer language={language} />
        </div>
    );
}
