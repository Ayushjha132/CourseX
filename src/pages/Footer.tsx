import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import Logo from "../assets/logo.svg";


const Footer = () => {
    const colorUnderline = "text-primary-500 underline underline-offset-4";

    return (
        <div className="flex flex-col justify-center items-center">
        
        <img className="hover:drop-shadow-[0_35px_35px_rgba(0,0,225,0.30)]" src={Logo} alt="logo" />
        <strong className="text-black text-lg mt-2 mb-1">Quick Links</strong>
        <p className={colorUnderline}>Terms & conditions</p>
        <p className={colorUnderline}>Privacy Policy</p>
        <p className={colorUnderline}>Refunds & Cancellation Policy</p>

        <div className="text-primary-500 flex flex-row text-3xl gap-3 mt-3 mb-3">
            <a href="" ><FaYoutube /></a>
            <a href="" ><AiOutlineInstagram /></a>
            <a href="" ><FaXTwitter /></a>
            <a href="" ><BsDiscord /></a>
        </div>
        <p>Design & Developed by Ayush Jha</p>
        <p  className={colorUnderline}>Inspired form <span><a href="https://100xdevs.com">100xdev.com</a></span></p>
        {/* </div> */}
    </div>
    )
}

export default Footer;