import Image from 'next/image'
import test from '@/public/img/test.png'
import Link from "next/link";

export default function LastPost (){
    return (
        <div className={"border border-black p-4 flex flex-row gap-x-4"}>
            <Image src={test} className={"w-1/2 object-cover"} />
            <div className="flex flex-col gap-x-4 justify-between">
                <div>
                    <div className="w-full flex flex-row justify-between items-center">
                        <p>Agosto 2024</p>
                        <p>Iran</p>
                    </div>
                    <h3>Preparazione all apartenza</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                       minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ...</p>
                </div>
                <Link href={'#'}>Laggi di piu</Link>
            </div>
        </div>
    )
}