import Image from "next/image";
import Link from "next/link";
import {BsDiscord, BsInstagram, BsTwitterX, BsYoutube} from "react-icons/bs";

export default function Footer() {
    return (
        <div className=" flex flex-col items-center justify-center bg-white pt-12 pb-8">
            <Image src="/logo.svg" alt="logo" width={130} height={130}/>

            <p className="text-black font-semibold mt-4 mb-4">Quick Link</p>

            <Link href={"#"} className="text-blue-600 underline">Terms & Conditions</Link>
            <Link href={"#"} className="text-blue-600 underline">Privacy Policy</Link>
            <Link href={"#"} className="text-blue-600 underline">Refunds & Cancellation Policy</Link>


            <div className="flex m-4 text-2xl">
                <Link href="#" className="pr-5">
                    <BsYoutube className="text-blue-600"/>
                </Link>
                <Link href="#" className="pr-5">
                    <BsTwitterX className="text-blue-600"/>
                </Link>
                <Link href="#" className="pr-5">
                    <BsInstagram className="text-blue-600"/>
                </Link>
                <Link href="#">
                    <BsDiscord className="text-blue-600"/>
                </Link>
            </div>

            <p className="text-black">Design and Developed by <span className="text-blue-600 underline">Ayush
                Jha</span></p>
            <p className="text-gray-500">© All copyright reserved</p>
        </div>
    )
}