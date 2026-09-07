import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
    return (
        <footer className="footer-part pt-12 mb-14 lg:mb-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6">
                    <div>
                        <Link href="/"><Image className="mb-8 w-36" src="/assets/images/inforisen.png" alt="logo" width={100} height={20} /></Link>
                        <p className="text-xs mb-3 text-white">Subscribe to our newsletter to get latest updates</p>
                        <form className="flex items-center rounded-lg sm:max-w-xs w-full h-12 p-2 mb-8 bg-white">
                            <input type="email" placeholder="Your email address" className="w-full h-full pl-2"/>
                            <button type="submit" className="capitalize text-xs font-medium rounded-md shrink-0 p-2.5 text-white bg-primary">Subscribe</button>
                        </form>
                        <h3 className="text-xs capitalize mb-4 text-white">Follow us on</h3>
                        <nav className="flex items-center gap-5">
                            <a href="#" className="fa-brands fa-facebook-f inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                            <a href="#" className="fa-brands fa-twitter inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                            <a href="#" className="fa-brands fa-instagram inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                            <a href="#" className="fa-brands fa-youtube inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                        </nav>
                    </div>
                    <div>
                        <div className="sm:w-fit sm:mx-auto">
                            <h3 className="capitalize text-lg font-semibold mb-6 text-white">Legal</h3>
                            <nav className="flex flex-col items-start gap-3">
                                <a href="../../pages/client/cookie-setting.html" className="capitalize text-white hover:underline">Cookie setting</a>
                                <a href="../../pages/client/terms.html" className="capitalize text-white hover:underline">Terms & conditions</a>
                                <a href="../../pages/client/privacy.html" className="capitalize text-white hover:underline">Privacy policy</a>
                                <a href="../../pages/client/about-us.html" className="capitalize text-white hover:underline">About Us</a>
                                <Link href="#" className="capitalize text-white hover:underline">contact Us</Link>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <h3 className="capitalize text-lg font-semibold mb-3 text-white">Download Our Apps</h3>
                        <nav className="flex items-center gap-3 mb-7 w-full max-w-66.25">
                            <Link href="#"><Image className="rounded-lg w-full" src="/assets/images/play-store.png" alt="app" width={100} height={20} /></Link>
                            <Link href="#"><Image className="rounded-lg w-full" src="/assets/images/app-store.png" alt="app" width={100} height={20} /></Link>
                        </nav>
                        <ul className="flex flex-col gap-5">
                            <li className="flex items-center gap-2.5 text-white">
                               
                                <span className="text-lg">example@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2.5 text-white">
                                
                                <span className="text-lg font-medium">0123659874563</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-8 mt-8 border-t border-primary-slate">
                <p className="text-sm text-center text-white">&copy; Tomato by <Link target="_blank" href="../../https://inilabs.net/">iNiLabs</Link> 2022, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default FooterComponent;