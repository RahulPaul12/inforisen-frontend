"use client";

import useCanvas from "@/hooks/useCanvas";
import useSticky from "@/hooks/useSticky";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";


const HeaderComponent = () => {
    const sticky = useSticky();
    const { openCanvas } = useCanvas();
    return (
        <header className={` header ${sticky ? "fixed" : ""}`}>
            <nav className="navbar container">
                <Link href="/">
                    <Image src="/images/logo.png" className="h-12 lg:h-13.75 w-auto" alt="logo" width={100} height={20} />
                </Link>
                <ul className="text-base font-medium font-inter hidden lg:flex gap-1 items-center">
                    <li><Link className="navbar-menu" href="/pricing">Home</Link></li>
                    <li><Link className="navbar-menu" href="/partner-program">Services</Link></li>
                    <li><Link className="navbar-menu" href="/partner-program">Blog</Link></li>
                    <li><Link className="navbar-menu" href="/partner-program">About Us</Link></li>
                    <li><Link className="navbar-menu" href="/partner-program">Contact Us</Link></li>
                    <li><Link className="navbar-menu" href="/partner-program">Api</Link></li>
                </ul>
                <div className="hidden lg:flex items-center gap-4">
                    <button className="outline-btn">
                        <span className="capitalize">Login</span>
                    </button>
                    <button className="gradient-btn">
                        <span className="capitalize">Signup</span>
                    </button>
                </div>
                <div className="max-lg:block hidden">
                    <button onClick={() => openCanvas("menu-sidebar")} className="flex flex-col gap-1">
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default HeaderComponent;