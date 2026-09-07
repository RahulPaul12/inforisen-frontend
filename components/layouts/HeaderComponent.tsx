"use client";

import useCanvas from "@/hooks/useCanvas";
import useSticky from "@/hooks/useSticky";
import Image from "next/image";
import Link from "next/link";


const HeaderComponent = () => {
    const sticky = useSticky();
    const {openCanvas} = useCanvas();
    return (
        <header className={`db-header ${sticky ? "fixed" : ""}`}>
        <nav className="flex items-center justify-between lg:gap-36 container">
            <Link href="/">
                <Image src="/assets/images/inforisen.png" alt="logo" width={100} height={20} />
            </Link>
            <ul className="text-base font-medium font-inter hidden lg:flex gap-1 items-center">
                <li><Link className="py-2 px-3 rounded-lg" href="/pricing">Home</Link></li>
                <li><Link className="py-2 px-3 rounded-lg" href="/partner-program">Services</Link></li>
                <li><Link className="py-2 px-3 rounded-lg" href="/partner-program">Blog</Link></li>
                <li><Link className="py-2 px-3 rounded-lg" href="/partner-program">About Us</Link></li>
                <li><Link className="py-2 px-3 rounded-lg" href="/partner-program">Contact Us</Link></li>
                <li><Link className="py-2 px-3 rounded-lg" href="/partner-program">Api</Link></li>
            </ul>
            <div className="hidden lg:flex items-center gap-2">
                <button className="outline-btn">
                    <span className="capitalize">Login</span>
                </button>
                <button className="gradient-btn">
                    <span className="capitalize">Signup</span>
                </button>
            </div>
            <div className="max-lg:block hidden">
                    <button onClick={()=>openCanvas("menu-sidebar")} className="flex flex-col gap-1">
                        <span className="w-8 h-1 bg-primary"></span>
                        <span className="w-8 h-1 bg-primary"></span>
                        <span className="w-8 h-1 bg-primary"></span>
                    </button>
            </div>
        </nav>
        </header>
    );
};

export default HeaderComponent;