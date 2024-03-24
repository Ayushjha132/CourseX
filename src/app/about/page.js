import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import AboutBanner from "@/components/about/AboutBanner";


const About = () => {
    return (
        <section className="bg-white">
            <NavBar/>
            <div className="bg-blue-50 rounded-b-large border-b-4 border-blue-shadow ">

                <AboutBanner />
                <h1 className={`text-blue-600`}>Contact Us</h1>

            </div>
            <Footer/>
        </section>
    )
}

export default About;