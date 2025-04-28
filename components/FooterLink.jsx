import Link from "next/link";

// Reusable link component for the footer, with optional external link behavior
export default function FooterLink ({children, link, external = false}) {
    return (
        <Link
            href={link}
            // Adds underline effect on hover, and different border if external
            className={`border-b border-transparent hover:border-white transition-colors duration-300 ${external ? "border-gray-700" : "border-transparent"}`}
            // Opens in new tab if external, otherwise in same tab
            target={external ? "_blank" : "_self"}
        >
            {children}
        </Link>
    );
}
