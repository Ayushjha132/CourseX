import Image from "next/image";
import Button from "@/components/button/Button";

export default function AboutBanner({button}) {

    return (
        <>
            <h1 id="about" className="flex justify-center item-center text-blue-600 font-semibold text-4xl pt-10">About
                100xDevs</h1>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <div className="flex flex-row flex-wrap">
                    <div className="text-black text-2xl font-normal basis-1/2">
                        <p className="mt-16 ">Welcome to 100xdevs!!</p>
                        <p className="mt-10">This is an initiative by <span
                            className="text-blue-600 font-semibold">Harkirat Singh</span> to
                            personally mentor folks in the field of Programming.</p>
                        <p className="mt-5">Harkirat strongly feels that today you are either a 1x engineer or a 100x engineer and
                            nothing in
                            the
                            middle, and his hope is to take everyone in this community to be a 100x Engineer.</p>
                        <p className="mt-8">Join him in his course on Full Stack development with a heavy focus on Open source projects
                            to
                            learn
                            programming practically.</p>
                        {
                            button === "true" && (<div className="flex mt-5">
                                <Button type="fill" link="/about#contact" text="Contact Us"/>
                            </div>)
                        }

                    </div>

                    <div className="basis-1/2">
                        <Image src="/about.svg" alt="about-us image" height={650} width={650}/>
                    </div>
                </div>

            </div>

        </>
    )
}