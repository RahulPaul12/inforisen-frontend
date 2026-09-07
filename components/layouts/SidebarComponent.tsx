'use client'
import useCanvas from "@/hooks/useCanvas";
import Link from "next/link";

const SidebarComponent = () => {
     const { closeCanvas, closeBackdrop } = useCanvas()
    return (
       <aside onClick={closeBackdrop} className="drawer" id="menu-sidebar">
            <div className="drawer-content">
                <div className="py-4 flex items-center justify-between px-4 border-b border-slate-100">
                    <Link href={"/"} className="active router-link-exact-active router-link-active router-link-exact-active flex-shrink-0" aria-current="page">
                        <img className="w-28 sm:w-32" alt="logo" src="/images/logo.png"/>
                    </Link>
                    <button onClick={()=>closeCanvas('menu')} type="button">
                        <i className="icon-close-circle text-xl text-red-500"></i>
                    </button>
                </div>
                <div className="px-4 pb-10">
                    <nav className="flex flex-col">
                        <Link href={"/home"} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Home</Link>
                        <Link href={"/offers"} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Offers</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">FAQ</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Return &amp; Exchange</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Shipping</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Size Charts</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Cookies Policy</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Terms &amp; Conditions</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Privacy Policy</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">About Us</Link>
                        <Link href={""} className="text-base font-medium capitalize py-3 border-b border-slate-100 text-heading">Contact Us</Link>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default SidebarComponent;