"use client";

import useCanvas from "@/hooks/useCanvas";
import Image from "next/image";
import Link from "next/link";


const HeaderComponent = () => {
    const {openCanvas} = useCanvas();
    return (
        <header className="header">
        <nav className="mx-0 lg:mx-6 w-auto flex justify-between items-center z-30 px-4! py-4 transition-all duration-200">
            <Link href="/">
                <Image src="/assets/images/inforisen.png" alt="logo" width={100} height={20} />
            </Link>
            <ul className="text-base font-normal hidden lg:flex gap-1 items-center">
                <li><Link className="py-2 px-3 rounded-lg" href="/pricing">Pricing</Link></li>
                <li><Link className="py-2 px-3 rounded-lg" href="/partner-program">Partner Program</Link></li>
            </ul>

            <div className="flex items-center gap-2">
                <Link href="/login" className="landing-primary-button h-10 lg:h-11 px-4! hidden! lg:flex! items-center">
                    <i className="lab-fill-profile-circle text-lg"></i>
                    <span className="capitalize">Login</span>
                </Link>
                <div className="py-2 px-1 border border-primary rounded max-lg:block hidden">
                    <button onClick={()=>openCanvas("menu-sidebar")} className="flex flex-col gap-1">
                        <span className="w-8 h-1 bg-primary"></span>
                        <span className="w-8 h-1 bg-primary"></span>
                        <span className="w-8 h-1 bg-primary"></span>
                    </button>
                </div>
            </div>
        </nav>
        </header>
    );
};

export default HeaderComponent;