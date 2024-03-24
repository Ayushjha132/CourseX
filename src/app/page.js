import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import HeroBanner from "@/components/heroBanner/HeroBanner";


export default function Home() {
    return (
        <>
            <section className="bg-white">
                <NavBar/>
                <div className="bg-blue-50 rounded-b-large border-b-4 border-blue-shadow">
                    <HeroBanner />


                    <AboutBanner button="true"/>
                    <div className="p-8"/>
                </div>
                <Footer/>
            </section>
        </>
    )
}