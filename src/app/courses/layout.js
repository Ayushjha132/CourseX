import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CourseLayout({ children }) {
    return (
        <section>{children}</section>);
}
