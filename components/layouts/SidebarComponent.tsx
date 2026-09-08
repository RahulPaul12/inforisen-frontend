'use client'
import useCanvas from "@/hooks/useCanvas";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const SidebarComponent = () => {
     const { closeCanvas, closeBackdrop } = useCanvas()
    return (
       <aside onClick={closeBackdrop} className="drawer" id="menu-sidebar">
            <div className="drawer-content">
                <div className="py-4 flex items-center justify-between px-4 border-b border-slate-100">
                    <Link href={"/"} className="shrink-0" aria-current="page">
                        <img className="h-10 w-auto" alt="logo" src="/images/logo.png"/>
                    </Link>
                    <button onClick={()=>closeCanvas('menu-sidebar')} type="button">
                        <FontAwesomeIcon icon={faClose}/>
                    </button>
                </div>
                <div className="px-4 pb-10 h-full">
                    <nav className="flex flex-col max-h-[calc(100dvh-200px)] h-full overflow-scroll">
                        <Link href={"/"} className="navbar-menu">Home</Link>
                        <Link href={""} className="navbar-menu">Services</Link>
                        <Link href={""} className="navbar-menu">Blog</Link>
                        <Link href={""} className="navbar-menu">About Us</Link>
                        <Link href={""} className="navbar-menu">Contact Us</Link>
                        <Link href={""} className="navbar-menu">Api</Link>
                    </nav>
                    <div className="lg:hidden flex flex-col items-center gap-2">
                        <button className="outline-btn w-full">
                            <span className="capitalize">Login</span>
                        </button>
                        <button className="gradient-btn w-full">
                            <span className="capitalize">Signup</span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default SidebarComponent;