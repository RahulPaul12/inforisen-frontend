"use client";
import Image from "next/image";
import { useState } from "react";
import FaqSection from "@/components/FaqSection";

export default function Home() {
const [activeTab, setActiveTab] = useState("information");
  return (
    <main>
        {/* <!--==========================
                   HERO PART START 
          ==========================--> */}
        <section className="pt-10 sm:pt-16 pb-14 mb-16 sm:mb-24 bg-[#FFF8F2] bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat">
            <div className="container">
                <div className="grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-12 md:col-span-6">
                        <div className="ltr:lg:mr-20 rtl:lg:ml-20">
                            <h1 className="text-4xl text-primary leading-12 sm:text-[52px] sm:leading-15 font-normal font-secondary mb-6 w-full mobile:max-w-xs tablet:max-w-[500px]">Organic &amp; Tasty Food for your Table</h1>
                            <p className="mb-12 w-full mobile:max-w-sm tablet:max-w-lg">We have a collection of all kinds of delicious food here. Choose any food you like and buy it now.</p>
                            <h3 className="text-xl sm:text-2xl font-medium mb-4">Search restaurants in your area</h3>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <figure className="flex justify-center lg:justify-end max-md:mt-8 max-md:px-8">
                            <img alt="hero" className="w-full max-w-115" src="/images/hero.png"></img>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--==========================
                   HERO PART END 
        ==========================--> */}


        {/* <!--==========================
                  INFO PART START 
        ==========================--> */}
        <section className="py-16 md:py-20 lg:py-40">
            <div className="container py-12 ">
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>

                      </div>
                      <div></div>
                      <div></div>
                      <div></div>
                 </div>
            </div>
        </section>
        {/* <!--==========================
                  INFO PART END 
        ==========================--> */}

        {/* <!--==========================
             SERVICE PART START
        ==========================--> */}
        <section className="py-16 md:py-20 lg:py-40">
            <div className="container">
                <ul className="flex flex-wrap justify-center w-full gap-3">
                    <button
                    onClick={() => setActiveTab("information")}
                    className={`db-tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "information" ? "active" : ""}`}
                    >
                    <i className="fal fa-info-circle"></i>
                    <span>Information</span>
                    </button>

                    <button
                    onClick={() => setActiveTab("contact")}
                    className={`db-tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "contact" ? "active" : ""}`}
                    >
                    <i className="fal fa-user"></i>
                    <span>Contact</span>
                    </button>

                    <button
                    onClick={() => setActiveTab("blog")}
                    className={`db-tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "blog" ? "active" : ""}`}
                    >
                    <i className="fal fa-pen-to-square"></i>
                    <span>Blog</span>
                    </button>

                    <button
                    onClick={() => setActiveTab("documents")}
                    className={`db-tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "documents" ? "active" : ""}`}
                    >
                    <i className="fal fa-file-lines"></i>
                    <span>Documents</span>
                    </button>
                </ul>

                {/* Tabs Content */}
                <div className="mt-8">
                    <div className={`db-tabDiv ${activeTab === "information" ? "active" : ""}`}>
                    This is information content.
                    </div>

                    <div className={`db-tabDiv ${activeTab === "contact" ? "active" : ""}`}>
                    This is contact content.
                    </div>

                    <div className={`db-tabDiv ${activeTab === "blog" ? "active" : ""}`}>
                    This is blog content.
                    </div>

                    <div className={`db-tabDiv ${activeTab === "documents" ? "active" : ""}`}>
                    This is documents content.
                    </div>
                </div>
            </div>
        </section>
        {/* <!--==========================
              SERVICES PART END 
        ==========================--> */}

         {/* <!--==========================
              PAYMENT METHOD PART START
          ==========================--> */}

        <section className="py-16 md:py-20 lg:py-40">
           <div className="container">
              <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
                  <h2 className="font-parkinsans font-semibold text-[32px] sm:text-[36px] mb-4.5">
                    Payment
                  </h2>
                  <p className="font-inter text-lg font-normal">
                    In today’s digital age, having a strong presence on social media is no longer just an option—it’s a necessity for businesses and personal brands aiming to thrive. With the vast majority of internet users in Bangladesh spending significant time on platforms like Facebook, Instagram, and YouTube, your audience is actively engaging online. Ignoring this trend means missing out on invaluable opportunities to connect, influence, and grow.
                  </p>
              </div>
              <div className="orbit-viewport">
                  <div className="orbit-content">
                    <div className="orbit-center"></div>
                    <div className="orbit-ring" style={{width:'100px' , height:'100px'}}></div>
                    <div className="orbit-ring"  style={{width:"180px" ,height:"180px"}}></div>
                    <div className="orbit-ring" style={{width:"260px",height:"260px"}}></div>
                    <div className="orbit-item"></div>
                  </div>
              </div>
           </div>
        </section>

        {/* <!--==========================
              PAYMENT METHOD PART END
        ==========================--> */}

        {/* <!--==========================
              GROWTH PART START
        ==========================--> */}

        <section className="py-16 md:py-20 lg:py-40">
           <div className="container">
              <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
                  <h2 className="font-parkinsans font-semibold text-[32px] sm:text-[36px] mb-4.5">
                    Growing on Social Media in Bangladesh
                  </h2>
                  <p className="font-inter text-lg font-normal">
                    In today’s digital age, having a strong presence on social media is no longer just an option—it’s a necessity for businesses and personal brands aiming to thrive. With the vast majority of internet users in Bangladesh spending significant time on platforms like Facebook, Instagram, and YouTube, your audience is actively engaging online. Ignoring this trend means missing out on invaluable opportunities to connect, influence, and grow.
                  </p>
              </div>
               <div className="orbit-scene">
                    <div className="center-circle"></div>
                    <div className="orbit orbit-1">
                      <div className="satellite sat-1"></div>
                      <div className="satellite sat-2"></div>
                    </div>
               </div>
           </div>
        </section>

        {/* <!--==========================
              GROWTH PART END
        ==========================--> */}

        {/* <!--==========================
              ADVANTAGES PART START
        ==========================--> */}
        <section className="py-16 md:py-20 lg:py-40">
           <div className="container">
              <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
                  <h2 className="font-parkinsans font-semibold text-[32px] sm:text-[36px] mb-4.5">
                    Advantages of using {" "}
                    <span className="gradient-text">our panel services</span>
                  </h2>
                  <p className="font-inter text-lg font-normal">
                    Find clear and simple explanations to the most common questions about our services,payments, orders, and account management.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-13 rounded-[21px] shadow-card bg-white">
                  <h4 className="font-inter font-semibold text-base sm:text-lg">We Never Ask for Your Password</h4>
                  <p className="font-inter text-sm sm:text-base text-secondary">Your account security is our top priority. We never ask for your passwords, private keys, or any sensitive information. All interactions are done securely through authorized APIs.</p>

                </div>
              </div>
           </div>
        </section>

        {/* <!--==========================
              ADVANTAGES PART END
        ==========================--> */}

        {/* <!--==========================
                  FAQ PART START
        ==========================--> */}
        <FaqSection />
        {/* <!--==========================
                  FAQ PART END
        ==========================--> */}

        {/* <!--==========================
                  CTA PART START
        ==========================--> */}
        <section className="mb-20">
            <div className="container">
              <div className="relative bg-[#fdf3e7] z-0">
                <div className="absolute inset-x-0 top-12 bottom-12 hidden md:flex items-center justify-center -z-10">
                  <div className="w-full h-full bg-[url('/images/cta_map.png')] bg-no-repeat bg-center bg-contain" />
                </div>
                <div className="relative z-10 px-6 sm:px-16 py-12">
                  <div className="grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                      <div className="ltr:lg:mr-20 rtl:lg:ml-20 max-w-118.75 w-full">
                        <h1 className="font-inter font-semibold text-[32px] mb-3">Ready to Grow Your Social Media <span className="gradient-text">in Bangladesh?</span></h1>
                        <p className="mb-8 text-base font-medium font-inter"> Join over 68,000 users who are already using SMM  to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 60 seconds. </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="outline-btn">See All Services</button>
                            <button className="gradient-btn">Create Free Account</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                      <figure className="flex justify-center md:absolute md:bottom-0 md:right-0 md:justify-end max-w-full">
                        <img
                          alt="hero"
                          className="w-full max-w-70 sm:max-w-sm md:max-w-115 h-auto"
                          src="/images/cta.png"
                        />
                      </figure>
                    </div>
          
                  </div>
                </div>
              </div>
            </div>
        </section>
        {/* <!--==========================
                  CTA PART END
        ==========================--> */}
    </main>
  );
}
