import Image from 'next/image'
import Link from "next/link";

export default function LastPost ({image, title, date, location, description}){
    return (
        <div className={"border border-black p-4 flex flex-row gap-x-4"}>
            <Image src={image} className={"w-1/2 object-cover aspect-[3/2]"} alt={'title'} />
            <div className="flex flex-col gap-x-4 justify-between">
                <div>
                    <div className="w-full flex flex-row justify-between items-center">
                        <p>{date}</p>
                        <p>{location}</p>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Link href={'#'}>Laggi di piu</Link>
            </div>
        </div>
    )
}