import Image from "next/image";
import Button from "@/components/button/Button";

export default function CourseCard({image, title, link}){
    return (
        <>
            <div className="flex flex-col space-y-8 items-center rounded-xl bg-white rounded-b-large border-b-4 border-blue-shadow  w-[400px]">
                <Image src={image} alt={title} width={400} height={60}/>
                <p className="text-black font-semibold text-center text-2xl text-wrap">{title}</p>
                <div className="w-40 font-bold items-center text-lg pb-8">
                <Button text="View Details" type="fill" link={link}/>
                </div>
            </div>
        </>
    )
}