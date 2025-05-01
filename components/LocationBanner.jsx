import Link from "next/link";
import Image from "next/image";
import LocationImage from "@/public/img/location-image.jpg";
import {useState} from "react";

export default function LocationBanner () {
    const [hover, setHover] = useState(false);

    return (
        <Link
            href="https://share.garmin.com/E32A8"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="relative bg-black w-full m-auto h-60 mt-4 overflow-hidden flex flex-row items-center">
                <Image alt={"Location SVG"} src={LocationImage}
                       className={`absolute w-full h-full object-cover z-0 transition-all duration-500 ${hover ? 'scale-105' : 'scale-100'}`} />
                <div className={" z-10 p-10"}>
                    <h3>DOVE SONO ORA?</h3>
                    <p>Clicca qui per soprire dove mi trovo e vedere la traccia dei miei viaggi</p>
                </div>
            </div>
        </Link>
    );
}