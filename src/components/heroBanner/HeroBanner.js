import Link from "next/link";
import {BsDiscord, BsInstagram, BsTwitterX, BsYoutube} from "react-icons/bs";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function HeroBanner() {
    return (
        <section className="text-black max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div className="flex justify-between space-x-16">
                <div className="flex justify-between">
                    <div className={`flex flex-col m-4 text-2xl mt-32`}>
                        <Link href="#">
                            <BsYoutube className="text-blue-600"/>
                        </Link>
                        <Link href="#" className='pt-5'>
                            <BsTwitterX className="text-blue-600"/>
                        </Link>
                        <Link href="#" className='pt-5'>
                            <BsInstagram className="text-blue-600"/>
                        </Link>
                        <Link href="#" className='pt-5'>
                            <BsDiscord className="text-blue-600"/>
                        </Link>
                    </div>
                    <Image src="banner-image.svg" width={730} height={730} alt={"banner image"} className="pt-9"/>
                </div>

                <div className="flex flex-col">
                    <div className='flex flex-col pt-32'>
                        <p className="text-4xl text-center font-semibold">100xDevs</p>
                        <p className="text-5xl font-bold text-blue-600 py-3 pl-5">Full Stack Cohort <span className="text-black">2.0</span></p>
                        <p className="font-semibold text-gray-500 pl-5">Acquire proficiency in Full Stack Development and secure a remote employment
                            opportunity.</p>
                        <div className="font-medium text-lg mt-4 w-36 pl-5">
                            <Button text={"Join Now"} type={'fill'} link={"#"}/>
                        </div>
                    </div>
                    <div className='flex flex-col pt-32'>
                        <p className="text-5xl font-bold">Harkirat Singh</p>
                        <p className="font-medium text-blue-600 text-3xl">Founder, 100xDevs</p>
                        <div className="flex space-x-1">
                            <Image src={'amazon.svg'} alt={'amazon'} width={100} height={100} />
                            <Image src={'gsoc.svg'} alt={'amazon'} width={100} height={750} />
                            <Image src={'goldman-sach.svg'} alt={'amazon'} width={75} height={75} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}