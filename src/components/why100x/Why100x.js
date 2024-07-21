import Image from "next/image";
import {VscSourceControl} from "react-icons/vsc";

export default function Why100x(){
    return (
        <>
            <h1
                className="flex justify-center item-center text-blue-600 font-semibold text-4xl pt-16 pb-8">Why
                100xDevs ?</h1>
            <div className="max-w-screen-xl grid grid-rows-2 mx-auto text-black grid-flow-col ">

                <div className="w-3/4 p-8 items-center">
                    <p className="text-xl text-blue-600 font-medium py-5 flex gap-2">Learn from the best
                        <Image src="/learnfrombest.svg" alt={'learn from best'} width={30} height={30}/></p>
                    <p className="text-lg">Harkirat is the best in India when it comes to learning about
                        remote work
                        and open
                        source.</p>
                </div>
                <div className="w-3/4 p-8 items-center">
                    <p className="text-xl text-blue-600 font-medium py-5 flex gap-2">Beginner Friendly
                        <Image src="/beginner.svg" alt={'learn from best'} width={35} height={35}/></p>
                    <p className="text-lg">Start from the basics and go deep into the technology using
                        project.</p>
                </div>
                <div className="w-3/4 p-8 items-center">
                    <p className="text-xl text-blue-600 font-medium py-5 flex gap-2">Reach your inflection
                        point
                        <Image src="/rocket.svg" alt={'learn from best'} width={30} height={30}/></p>
                    <p className="text-lg">Become a self sufficient developer in tech</p>
                </div>
                <div className="w-3/4 p-8 items-center">
                    <p className="text-xl text-blue-600 font-medium py-5 flex gap-2">Open Source
                        <Image src="/github.svg" alt={'learn from best'} width={30} height={30}/></p>
                    <p className="text-lg">Helping you make your first open source contribution</p>
                </div>
                <div className="w-3/4 p-8 items-center">
                    <p className="text-xl text-blue-600 font-medium py-5 flex gap-2">Version
                        Control <VscSourceControl className="text-2xl"/></p>
                    <p className="text-lg">Helping you understand the basics of how version control is
                        implemented in the
                        industry</p>
                </div>
                <div className="w-3/4 p-8 items-center">
                    <p className="text-xl text-blue-600 font-medium py-5 flex gap-2">Assignment
                        <Image src="/course-assignment.svg" alt={'learn from best'} width={30} height={30}/></p>

                </div>
            </div>
        </>
    )
}