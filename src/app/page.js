import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import HeroBanner from "@/components/heroBanner/HeroBanner";
import CourseCard from "@/components/courseCard/CourseCard";
import Image from "next/image";
import Why100x from "@/components/why100x/Why100x";
import FreeResources from "@/components/freeResources/FreeResources";


export default function Home() {

    const data =
        {
            image: "/course.png",
            title: "full stack development",
            link: "#"
        }


    return (
        <>
            <section className="bg-white">
                <NavBar/>
                <div className="bg-blue-50 rounded-b-large border-b-4 border-blue-shadow">
                    <HeroBanner/>

                    {/*courses section*/}
                    <h1 id="courses" className="flex justify-center item-center text-blue-600 font-semibold text-4xl pt-11 pb-10">Live
                        Courses</h1>
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <div className="flex flex-row flex-wrap space-x-10">
                            <CourseCard title={data.title} image={data.image} link={data.link}/>
                            <CourseCard title={data.title} image={data.image} link={data.link}/>
                            <CourseCard title={data.title} image={data.image} link={data.link}/>
                        </div>
                    </div>

                    {/*why 100x*/}
                    <Why100x/>

                    {/*testimonials*/}
                    <h1
                        className="flex justify-center item-center text-blue-600 font-semibold text-4xl pt-16 pb-8">Testimonials</h1>
                    <div className="text-black flex justify-center items-center">

                        <div className="flex justify-center items-center w-[800px] h-[480px]">
                            <div
                                className="w-[600px] h-[350px] bg-white flex flex-col space-y-6 items-center rounded-2xl">
                                <Image
                                    className="-mt-10 rounded-full"
                                    src="/testimonials-1.svg" alt={"image"} width={100} height={100}/>
                                <p className="text-xl text-center">I couldn't be happier with the
                                    Full Stack course! The
                                    instructor's expertise is unmatched, and the content is both comprehensive and
                                    practical. I now feel confident in my full-stack development skills.</p>
                                <div className="w-[300px] h-[1px] bg-black"></div>
                                <p>Remote Full Stack Engineer</p>
                                <p className="text-2xl ">Romit Kumar</p>
                            </div>

                        </div>
                    </div>

                    {/*free resource section*/}
                    <FreeResources/>
                    <AboutBanner button="true"/>
                    <div className="p-8"/>
                </div>
                <Footer/>
            </section>
        </>
    )
}