import Logo from "../assets/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import Button from "./Button";


export default function Navbar() {
    return (
        <nav className="bg-white">
            <div>
                <div>
                    {/* left side */}
                    <img src={Logo} alt="logo" />

                    {/* right side */}
                    <div>
                    <a>Home</a>
                    <a>Courses</a>
                    <a>About</a>
                    <a>Blog</a>
                    </div>
                    <div>
                        <button>
                            <BiSearchAlt2 className="h-6 w-6 text-blue-600"/>
                        </button>
                        <div>
                        {/* <Button />
                        <Button /> */}
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    )
}