import Link from "next/link";
import Image from "next/image";

import Location from "@/public/img/Location.svg";

export default function LocationBanner () {
    return (
        <Link href="https://share.garmin.com/E32A8" target="_blank" rel="noopener noreferrer">
            <div className="bg-black w-full m-auto h-60 mt-4 overflow-hidden flex flex-row items-center">
                <Image alt={"Location SVG"} src={Location} className="h-80 w-auto top-10 left-40" />
                <h2 className={'text-white w-1/2'}>DOVE SONO ORA?</h2>
            </div>
        </Link>
    );
}