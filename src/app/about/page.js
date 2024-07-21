import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import AboutBanner from "@/components/about/AboutBanner";
import ContactUs from "@/components/contact/ContactUs";


const About = () => {
    return (
        <section className="bg-white">
            <NavBar/>
            <div className="bg-blue-50 rounded-b-large border-b-4 border-blue-shadow ">

                <AboutBanner />
                <ContactUs />
            </div>
            <Footer/>
        </section>
    )
}

export default About;