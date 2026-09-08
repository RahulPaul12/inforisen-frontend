"use client";
import Image from "next/image";
import { useState } from "react";
import FaqSection from "@/components/FaqSection";
import Titlebar from "@/components/ui/TitleBar";

export default function Home() {
  const [activeTab, setActiveTab] = useState("information");
  return (
    <main>
      
      {/* <!--==========================
                   HERO PART START 
          ==========================--> */}
      <section className="pt-28 sm:pt-36 pb-14 mb-16 sm:mb-24 bg-[#FFF8F2] bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="ltr:lg:mr-20 rtl:lg:ml-20">
                <h1 className="text-4xl text-primary leading-12 sm:text-[52px] sm:leading-15 font-normal font-secondary mb-6 w-full mobile:max-w-xs tablet:max-w-[500px]">Organic &amp; Tasty Food for your Table</h1>
                <p className="w-full mobile:max-w-sm tablet:max-w-lg">We have a collection of all kinds of delicious food here. Choose any food you like and buy it now.</p>
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
              className={` tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "information" ? "active" : ""}`}
            >
              <i className="fal fa-info-circle"></i>
              <span>Information</span>
            </button>

            <button
              onClick={() => setActiveTab("contact")}
              className={` tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "contact" ? "active" : ""}`}
            >
              <i className="fal fa-user"></i>
              <span>Contact</span>
            </button>

            <button
              onClick={() => setActiveTab("blog")}
              className={` tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "blog" ? "active" : ""}`}
            >
              <i className="fal fa-pen-to-square"></i>
              <span>Blog</span>
            </button>

            <button
              onClick={() => setActiveTab("documents")}
              className={` tabBtn w-full max-w-full flex-none justify-start sm:max-w-max sm:justify-center ${activeTab === "documents" ? "active" : ""}`}
            >
              <i className="fal fa-file-lines"></i>
              <span>Documents</span>
            </button>
          </ul>

          {/* Tabs Content */}
          <div className="mt-8">
            <div className={` tabDiv ${activeTab === "information" ? "active" : ""}`}>
              This is information content.
            </div>

            <div className={` tabDiv ${activeTab === "contact" ? "active" : ""}`}>
              This is contact content.
            </div>

            <div className={` tabDiv ${activeTab === "blog" ? "active" : ""}`}>
              This is blog content.
            </div>

            <div className={` tabDiv ${activeTab === "documents" ? "active" : ""}`}>
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
              <div className="orbit-ring" style={{ width: '100px', height: '100px' }}></div>
              <div className="orbit-ring" style={{ width: "180px", height: "180px" }}></div>
              <div className="orbit-ring" style={{ width: "260px", height: "260px" }}></div>
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
              GROWTH PART START
        ==========================--> */}
      <section className="py-16 md:py-20">
          <div className="container relative z-10">
            <Titlebar title="GROWTH"/>
            <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
              <h2 className="section-heading">
                Growing on Social Media in {" "}
                <span className="gradient-text">Bangladesh</span>
              </h2>
              <p className="section-desc">The smartest way to grow is by combining SMM support with real content. You use SMM at the beginning for momentum, then let organic growth take over.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
               <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
                  <div className="gradient-btn w-fit mx-auto">Weeks 1-2</div>
                  <div className="flex flex-col gap-5">
                  <div className="p-5 rounded-[20px] bg-[#F5F5F7E8] ">
                      <div className="flex gap-2.5 items-start">
                          <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0 relative after:w-1 after:h-24 after:absolute after:top-16 after:border-primary after:border-dashed after:border-l-2">
                            <span className="gradient-text font-semibold text-base">01</span>
                          </div>
                          <div className="flex flex-col justify-between gap-4">
                              <h6 className="text-xl font-semibold text-primary">What You Do</h6>
                              <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Use SMM services to build initial followers and engagement</p>
                          </div>
                      </div>
                  </div>
                  <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                      <div className="flex gap-2.5 items-start">
                          <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                            <span className="gradient-text font-semibold text-base">01</span>
                          </div>
                          <div className="flex flex-col justify-between gap-4">
                              <h6 className="text-xl font-semibold text-primary">What You Do</h6>
                              <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Use SMM services to build initial followers and engagement</p>
                          </div>
                      </div>
                  </div>
                  </div>
               </div>
               <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
                  <div className="gradient-btn w-fit mx-auto">Weeks 1-2</div>
                  <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                      <div className="flex gap-2.5 items-start">
                          <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                            <span className="gradient-text font-semibold text-base">01</span>
                          </div>
                          <div className="flex flex-col justify-between gap-4">
                              <h6 className="text-xl font-semibold text-primary">What You Do</h6>
                              <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Use SMM services to build initial followers and engagement</p>
                          </div>
                      </div>
                  </div>
               </div>
               <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
                  <div className="gradient-btn w-fit mx-auto">Weeks 1-2</div>
                  <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                      <div className="flex gap-2.5 items-start">
                          <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                            <span className="gradient-text font-semibold text-base">01</span>
                          </div>
                          <div className="flex flex-col justify-between gap-4">
                              <h6 className="text-xl font-semibold text-primary">What You Do</h6>
                              <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Use SMM services to build initial followers and engagement</p>
                          </div>
                      </div>
                  </div>
               </div>
               <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
                  <div className="gradient-btn w-fit mx-auto">Weeks 1-2</div>
                  <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                      <div className="flex gap-2.5 items-start">
                          <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                            <span className="gradient-text font-semibold text-base">01</span>
                          </div>
                          <div className="flex flex-col justify-between gap-4">
                              <h6 className="text-xl font-semibold text-primary">What You Do</h6>
                              <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Use SMM services to build initial followers and engagement</p>
                          </div>
                      </div>
                  </div>
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
      <section className="py-16 md:py-20 relative">
          <Image className="absolute top-0 left-0 z-0" src="/images/advantage-shape.png" alt="footer-bg" width={5000} height={1000}/>
          <Image className="absolute bottom-0 right-0 z-0" src="/images/advantage-shape-2.png" alt="footer-bg" width={1000} height={500}/>
          <div className="container relative z-10">
            <Titlebar title="ADVANTAGES"/>
            <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
              <h2 className="section-heading">
                Advantages of using {" "}
                <span className="gradient-text">our panel services</span>
              </h2>
              <p className="section-desc"> Find clear and simple explanations to the most common questions about our services,payments, orders, and account management.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10.5">
              <div className="card">
                <Image className="mb-8" src="/images/lock.png" width={84} height={84} alt="" />
                <h4 className="card-title">We Never Ask for Your Password</h4>
                <p className="card-desc">You give us your username or profile link. That's it. We can't access your account. When you buy followers from us, we're accessing your public profile. The same profile millions of people can already see. Zero security risk.</p>
              </div>
              <div className="card">
                <Image className="mb-8" src="/images/bot.png" width={84} height={84} alt="" />
                <h4 className="card-title">We Use Real Users, Not Bots</h4>
                <p className="card-desc">This is the difference between safe and unsafe SMM services. Unsafe services use bots, fake accounts, and empty profiles. Instagram, Facebook, and YouTube algorithms detect these instantly. That's when bans happen.</p>
              </div>
              <div className="card">
                <Image className="mb-8" src="/images/growth.png" width={84} height={84} alt="" />
                <h4 className="card-title">We Deliver Gradually</h4>
                <p className="card-desc">Imagine gaining 5,000 followers overnight. That looks suspicious. Algorithms notice. They flag your account. We spread delivery over time. 5,000 followers arrive over 2-4 days, not 2 hours. This makes growth look natural. Social media algorithms see steady growth, not sudden spikes.</p>
              </div>
              <div className="card">
                <Image className="mb-8" src="/images/trophy.png" width={84} height={84} alt="" />
                <h4 className="card-title">Our Track Record</h4>
                <p className="card-desc">321,879 completed orders. Not a single customer has reported an account ban caused by our services. That's not luck. We follow platform guidelines. We understand how Instagram, Facebook, YouTube, and TikTok detect fake activity. We stay within those boundaries.</p>
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
      <section className="sm:mt-20 mb-20 sm:pt-16">
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
                    <p className="mb-8 text-base font-medium font-inter text-[#535353]"> Join over 68,000 users who are already using SMM  to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 60 seconds. </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="outline-btn">See All Services</button>
                      <button className="gradient-btn">Create Free Account</button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 order-1 md:order-2">
                  <figure className="flex justify-center md:absolute md:bottom-0 md:right-0 md:justify-end max-w-full">
                    <Image
                      alt="hero"
                      className="w-full max-w-70 sm:max-w-sm h-auto"
                      src="/images/cta.png"
                      width={500}
                      height={200}
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
