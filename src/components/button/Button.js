import Link from "next/link";


const Button = ({link, text, type}) => {

    let value = "";

     type === "fill" ? value = "text-white bg-blue-600 block px-5 py-2 rounded hover:bg-blue-700 hover:ring-2 hover:ring-blue-600 hover:ring-offset-2"
         :  value = "text-blue-600 block border border-blue-400 px-5 py-2 rounded hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

    return (
        <Link href={link}
              className={value}>
            {text}
        </Link>
    )
}

export default Button;