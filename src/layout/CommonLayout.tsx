import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { ReactNode } from "react";

interface IProps{
    children : ReactNode
}

export default function CommonLayout({children} : IProps) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
          
        </div>
    );
}