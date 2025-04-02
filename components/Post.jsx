import Link from "next/link";
import Image from "next/image";

export default function Post ({image, title, date, location, description, link}) {
    return (
        <Link href={link}>
            <div className={"border border-black p-4 flex flex-col justify-between h-full"}>
                <div>
                    <div className={"flex flex-row justify-between m-0"}>
                        <p className={'-mt-2 mb-1'}>{date}</p>
                        <p className={'-mt-2 mb-1'}>{location}</p>
                    </div>
                        <Image className={'w-full aspect-[3/2] object-cover'} src={image} alt={"test"} width={600} height={400} />
                    <p className={'font-bold mt-4 mb-3'}>{title}</p>
                    <p className={'mb-4'}>{description}</p>
                </div>
            </div>
        </Link>
    );
}