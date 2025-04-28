import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import Post from "@/components/Post";

// Displays the latest blog post differently on mobile and desktop
export default function LastPost ({image, title, date, location, description, link}) {
    const [hover, setHover] = useState(false);

    const [isMobile, setIsMobile] = useState(false); // Track if screen is mobile-sized

    useEffect(() => {
        // Update isMobile state based on window size
        const handleResize = () => setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' breakpoint
        handleResize(); // Run once on initial load

        window.addEventListener("resize", handleResize); // Listen to resize events
        return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }, []);

    // Use compact Post component for mobile screens
    return isMobile ? (
        <Post
            image={image}
            title={title}
            date={date}
            location={location}
            description={description}
            link={link}
        />
    ) : (
        // Custom layout for desktop view
        <Link href={link}>
            <div
                className="border border-black p-4 flex flex-row gap-x-4"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className={'w-3/5 aspect-[3/2] overflow-hidden'}>
                    <Image
                        src={image}
                        className={`w-full h-full object-cover transition-all duration-500 ${hover ? "scale-105" : "scale-100"}`}
                        alt={title}
                        width={600}
                        height={400}
                    />
                </div>
                <div className="flex flex-col gap-x-4 justify-between">
                    <div>
                        <div className="w-full flex flex-row justify-between items-center">
                            <p>{date}</p>
                            <p>{location}</p>
                        </div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
