import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

// Post card component used to display individual blog entries
export default function Post ({image, title, date, location, description, link}) {
    const [hover, setHover] = useState(false);

    return (
        <Link href={link}>
            <div
                className="border border-black p-4 flex flex-col justify-between h-full"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div>
                    {/* Date and location at the top */}
                    <div className="flex flex-row justify-between m-0">
                        <p className="-mt-2 mb-1">{date}</p>
                        <p className="-mt-2 mb-1">{location}</p>
                    </div>

                    {/* Post image */}
                    <div className="overflow-hidden relative w-full aspect-[3/2]">
                        <Image
                            className={`w-full h-full object-cover transition-all duration-500 ${hover ? "scale-105" : "scale-100"}`}
                            src={image}
                            alt="Post image"
                            width={600}
                            height={400}
                        />
                    </div>

                    {/* Post title */}
                    <p className="font-bold mt-4 mb-3">{title}</p>

                    {/* Post short description */}
                    <p className="mb-4">{description}</p>
                </div>
            </div>
        </Link>
    );
}
