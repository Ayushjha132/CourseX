import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button/Button";
import {RxHamburgerMenu} from "react-icons/rx";

const NavBar = () => {
    return (
       <nav className="bg-white">
           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
               <div className="flex flex-wrap justify-between">
                   <Link href={"/"} className="text-gray-700">
                       <Image src={"/logo.svg"} width={60} height={60}  alt="logo"/>
                   </Link>
                   <div className="items-center justify-between hidden w-full mx-12 md:flex md:w-auto md:order-1">
                       <ul className="flex flex-col font-medium text-xl p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 hover:text-blue-700">
                           <li>
                               <Link href={"/"}
                                     className="text-gray-500 hover:text-blue-600">
                                   Home
                               </Link>
                           </li>
                           <li>
                               <Link href={"/courses"}
                                     className="text-gray-500 hover:text-blue-600">
                               Courses
                               </Link>
                           </li>
                           <li>
                               <Link href={"/#about"}
                                     className="text-gray-500 hover:text-blue-600">
                                   About
                               </Link>
                           </li>
                           <li>
                               <Link href={"/blog"}
                                     className="text-gray-500 hover:text-blue-600">
                                   Blog
                               </Link>
                           </li>

                       </ul>
                   </div>
               </div>

               {/*web view*/}
               <div className="hidden md:flex font-medium text-lg p-4 md:p-0 mt-4 md:space-x-4 md:mt-0">
                      <Button link={"#"} text={"Signin"}/>
                      <Button link={"#"} text={"Signup"}/>
               </div>

               {/*mobile view*/}
               <div className="text-gray-700 text-3xl md:hidden">
                   <RxHamburgerMenu className="text-gray-700 text-3xl"/>
               </div>

           </div>
       </nav>
    )
}

export  default NavBar;




