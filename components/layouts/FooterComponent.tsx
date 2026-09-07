import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
    return (
        <footer className="footer pt-20 pb-5 bg-[#82330C] relative">
            <Image className="w-full absolute top-0 z-0" src="/images/footer-shape.png" alt="footer-bg" width={500} height={100}/>
            <Image className="w-full absolute bottom-0 z-0" src="/images/footer-shape-2.png" alt="footer-bg" width={500} height={100}/>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-12.5 relative z-10">
                    <div>
                        <Link href="/"><Image className="mb-8 w-36" src="/assets/images/inforisen.png" alt="logo" width={100} height={20} /></Link>
                        <p className="text-xs mb-3 text-white">Subscribe to our newsletter to get latest updates</p>
                        
                        <h3 className="text-xs capitalize mb-4 text-white">Follow us on</h3>
                        <nav className="flex items-center gap-5">
                            <a href="#" className="fa-brands fa-facebook-f inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                            <a href="#" className="fa-brands fa-twitter inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                            <a href="#" className="fa-brands fa-instagram inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                            <a href="#" className="fa-brands fa-youtube inline-block text-sm w-7 h-7 leading-7 text-center rounded-full shadow-lg bg-white text-primary"></a>
                        </nav>
                    </div>
                    <div>
                        <div className="sm:w-fit">
                            <h3 className="capitalize font-inter font-bold text-xl mb-5 text-white">Quick Links</h3>
                            <nav className="flex flex-col items-start gap-2.5">
                                <a href="../../pages/client/cookie-setting.html" className="text-base font-inter font-bold text-white">Cookie setting</a>
                                <a href="../../pages/client/terms.html" className="text-base font-inter font-bold text-white">Terms & conditions</a>
                                <a href="../../pages/client/privacy.html" className="text-base font-inter font-bold text-white">Privacy policy</a>
                                <a href="../../pages/client/about-us.html" className="text-base font-inter font-bold text-white">About Us</a>
                                <Link href="#" className="text-base font-inter font-bold text-white">contact Us</Link>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <div className="w-full sm:w-fit sm:mx-auto">
                            <h3 className="capitalize font-inter font-bold text-xl mb-5 text-white">Quick Links</h3>
                            <nav className="flex flex-col items-start gap-2.5">
                                <a href="../../pages/client/cookie-setting.html" className="text-base font-inter font-bold text-white">Cookie setting</a>
                                <a href="../../pages/client/terms.html" className="text-base font-inter font-bold text-white">Terms & conditions</a>
                                <a href="../../pages/client/privacy.html" className="text-base font-inter font-bold text-white">Privacy policy</a>
                                <a href="../../pages/client/about-us.html" className="text-base font-inter font-bold text-white">About Us</a>
                                <Link href="#" className="text-base font-inter font-bold text-white">contact Us</Link>
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
                <div className="bg-[#82330C] p-5 rounded-lg relative z-10">
                    <p className="text-white font-inter text-sm font-bold text-center">© 2026 SMM Limited. All Rights Reserved. | Operated under the Bangladesh ICT framework.</p>
                </div>
            </div>
            <Image className="w-full absolute bottom-0 z-0" src="/images/footer-gradient.png" alt="footer-bg" width={100} height={100}/>
        </footer>
    );
};

export default FooterComponent;