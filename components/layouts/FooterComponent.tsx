import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
    return (
        <footer className="footer">
            <Image className="w-full absolute top-0 z-0" src="/images/footer-shape.png" alt="footer-bg" width={5000} height={1000}/>
            <Image className="w-full absolute bottom-0 z-0" src="/images/footer-shape-2.png" alt="footer-bg" width={5000} height={1000}/>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-12.5 relative z-10">
                    <div>
                        <Link href="/"><Image className="mb-2.5 h-12 w-auto" src="/images/logo.png" alt="logo" width={500} height={50} /></Link>
                        <p className="text-sm font-bold text-white mb-4">SMM is Bangladesh's most trusted SMM panel. We offer fast, affordable social media growth services for every platform, with full support for local payments like bKash and Nagad.</p>
                        <div className="flex flex-wrap gap-2">
                            <Link href={""} className="social-link">
                                <Image className="" src="/images/facebook.png" width={30} height={30} alt="" />
                            </Link>
                            <Link href={""} className="social-link">
                                <Image className="" src="/images/instagram.png" width={30} height={30} alt="" />
                            </Link>
                            <Link href={""} className="social-link">
                                <Image className="" src="/images/youtube.png" width={30} height={30} alt="" />
                            </Link>
                            <Link href={""} className="social-link">
                                <Image className="" src="/images/twitter.png" width={30} height={30} alt="" />
                            </Link>
                            <Link href={""} className="social-link">
                                <Image className="" src="/images/linkedin.png" width={30} height={30} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="sm:w-fit">
                            <h3 className="capitalize font-inter font-bold text-xl mb-5 text-white">Quick Links</h3>
                            <nav className="flex flex-col items-start gap-2.5">
                                <Link href="#" className="footer-link">Home</Link>
                                <Link href="#" className="footer-link">About Us</Link>
                                <Link href="#" className="footer-link">Services</Link>
                                <Link href="#" className="footer-link">Blog</Link>
                                <Link href="#" className="footer-link">contact Us</Link>
                                <Link href="#" className="footer-link">Terms of Service</Link>
                                <Link href="#" className="footer-link">Privacy Policy</Link>
                                <Link href="#" className="footer-link">Refund Policy</Link>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <div className="w-full sm:w-fit sm:mx-auto">
                            <h3 className="capitalize font-inter font-bold text-xl mb-5 text-white">Services Pages</h3>
                            <nav className="flex flex-col items-start gap-2.5">
                                <Link href="#" className="footer-link">Facebook SMM Panel</Link>
                                <Link href="#" className="footer-link">Instagram SMM Panel</Link>
                                <Link href="#" className="footer-link">YouTube SMM Panel</Link>
                                <Link href="#" className="footer-link">TikTok SMM Panel</Link>
                                <Link href="#" className="footer-link">Telegram SMM Panel</Link>
                                <Link href="#" className="footer-link">X-Twitter SMM Panel</Link>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <h3 className="capitalize text-lg font-semibold mb-3 text-white">Download Our Apps</h3>
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2.5 text-white">
                               <div className="social-link w-8! h-8!">
                                    <Image className="" src="/images/mail.png" width={20} height={20} alt="" />
                               </div>
                               <p className="text-base font-bold">info@smmsun.com</p>
                            </li>
                            <li className="flex items-center gap-2.5 text-white">
                               <div className="social-link w-8! h-8!">
                                    <Image className="" src="/images/whatsapp.png" width={20} height={20} alt="" />
                               </div>
                                <p className="text-base font-bold">+1 833 252 278</p>
                            </li>
                            <li className="flex items-start gap-2.5 text-white">
                               <div className="social-link w-8! h-8!">
                                    <Image className="" src="/images/support.png" width={20} height={20} alt="" />
                               </div>
                                <p className="text-base font-bold">Serving all of Bangladesh <br/> Support: 24/7</p>
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