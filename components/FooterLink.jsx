import Link from "next/link";

export default function FooterLink ({children, link, external=false}) {
    return (
        <Link href={link} className={`border-b border-transparent hover:border-white transition-colors duration-300 ${external ? "border-gray-700" : "border-transparent"}`} target={external ? "_blank" : "_self"}>{children}</Link>
    )
}