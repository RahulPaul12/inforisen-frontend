"use client";
import Image from "next/image";
import { useState } from "react";
import FaqSection from "@/components/FaqSection";
import Titlebar from "@/components/ui/TitleBar";
import services from "@/data/services.json";
export default function Home() {
  const [activeTab, setActiveTab] = useState("Facebook");
  return (
    <main>

      {/* <!--==========================
                   HERO PART START 
          ==========================--> */}
      <section className="hero-section">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-6">
              <div className="w-full max-w-175">
                <h1 className="hero-heading"><span className="text-primary">Best SMM Panel</span> in Bangladesh - <span className="gradient-text">Fast ,Safe</span> & Growth in Social Media.</h1>
                <p className="hero-desc">SMM is Bangladesh's most reliable & cheap SMM panel for real social media growth. We built this platform for Bangladeshi businesses, creators, and agencies. You get fast delivery, safe methods, and followers that actually stay. No fake bots. No account risks. Just real results. Most panels chase big numbers. We focus on keeping those numbers. You get retention guarantees, delivery control, and long-term credibility.</p>
                <div className="hidden lg:flex items-center gap-4 mt-6">
                  <button className="outline-btn bg-white">
                    <span className="capitalize">View Services</span>
                  </button>
                  <button className="gradient-btn">
                    <span className="capitalize">Create an Account</span>
                  </button>
                </div>
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
      <section className="py-15">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card py-6 flex flex-col items-center justify-center">
              <Image className="" src="/images/process.png" width={100} height={100} alt="" />
              <h6 className="text-[32px] font-bold">321,879</h6>
              <p className="font-medium text-base text-primary text-center">Order Processed</p>
            </div>
            <div className="card py-6 flex flex-col items-center justify-center">
              <Image className="" src="/images/services.png" width={100} height={100} alt="" />
              <h6 className="text-[32px] font-bold">321,879</h6>
              <p className="font-medium text-base text-primary text-center">Order Processed</p>
            </div>
            <div className="card py-6 flex flex-col items-center justify-center">
              <Image className="" src="/images/user.png" width={100} height={100} alt="" />
              <h6 className="text-[32px] font-bold">321,879</h6>
              <p className="font-medium text-base text-primary text-center">Order Processed</p>
            </div>
            <div className="card py-6 flex flex-col items-center justify-center">
              <Image className="" src="/images/rank.png" width={100} height={100} alt="" />
              <h6 className="text-[32px] font-bold">321,879</h6>
              <p className="font-medium text-base text-primary text-center">Order Processed</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--==========================
                  INFO PART END 
        ==========================--> */}

      {/* <!--==========================
             SERVICE PART START
        ==========================--> */}
      <section className="py-16 md:py-20">
        <div className="container">
          <Titlebar title="our services" />
          <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
            <h2 className="section-heading">Powerful <span className="text-primary">SMM Services</span> for Fast Growth</h2>
            <p className="section-desc">Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok. we've got you covered.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center w-full gap-3">
            {services.map((service) => (
              <button key={service.id} onClick={() => setActiveTab(service.services)} className={`tabBtn w-full flex-none justify-start  sm:justify-center ${ activeTab === service.services ? "active" : "" }`}>
                <div className="polygon">
                  <Image src={`/images/${service.icon}`} width={20} height={20} alt=""/>
                </div>
                <span className="text-lg font-semibold">{service.services}</span>
              </button>
            ))}
          </div>
          <div className="mt-9">
            {services.map((service) => (
              <div key={service.services} className={`tabDiv ${activeTab === service.services ? "active" : ""}`} >
                <div className="flex flex-col lg:flex-row gap-x-16 gap-y-8">
                  <Image className="w-full max-w-143.75 h-auto max-lg:mx-auto" src="/images/tab-content.png" width={600} height={500} alt=""/>
                   <div>
                      <h2 className="text-xl sm:text-[28px] font-semibold text-primary mb-4.5">{service.content}</h2>
                      <p className="text-base font-medium">Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic Facebook marketing campaigns.</p>
                      <ul className="mb-9 mt-7 flex flex-col gap-2">
                         <li className="flex gap-2 items-center">
                            <div className="polygon bg-linear-to-r from-primary to-secondary! text-white">01</div>
                            <p className="text-base font-medium"><span className="text-primary">Facebook  Post Likes-</span> Boost post engagement and credibility with real likes.</p>
                         </li>
                         <li className="flex gap-2 items-center">
                            <div className="polygon bg-linear-to-r from-primary to-secondary! text-white">02</div>
                            <p className="text-base font-medium"><span className="text-primary">Facebook Likes- </span>Grow your page popularity with high-quality likes.</p>
                         </li>
                         <li className="flex gap-2 items-center">
                            <div className="polygon bg-linear-to-r from-primary to-secondary! text-white">03</div>
                            <p className="text-base font-medium"><span className="text-primary">Facebook Comments-</span> Increase interaction with engaging comments.</p>
                         </li>
                         <li className="flex gap-2 items-center">
                            <div className="polygon bg-linear-to-r from-primary to-secondary! text-white">04</div>
                            <p className="text-base font-medium"><span className="text-primary">Facebook Shares-</span> Expand your reach with powerful shares.</p>
                         </li>
                         <li className="flex gap-2 items-center">
                            <div className="polygon bg-linear-to-r from-primary to-secondary! text-white">05</div>
                            <p className="text-base font-medium"><span className="text-primary">Facebook Video Views-</span> Get more visibility with high-retention video views.</p>
                         </li>
                         <li className="flex gap-2 items-center">
                            <div className="polygon bg-linear-to-r from-primary to-secondary! text-white">06</div>
                            <p className="text-base font-medium"><span className="text-primary">Facebook Reactions-</span> Make your posts more engaging with diverse reactions..</p>
                         </li>
                      </ul>
                      <button className="gradient-btn">View Facebook Services</button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!--==========================
              SERVICES PART END 
        ==========================--> */}

      {/* <!--==========================
           WORKING PROCESS PART START
      ==========================--> */}
      <section className="py-16 md:py-20 relative">
        <span className="absolute inset-0 top-0 right-0 w-full h-full bg-[linear-gradient(251.15deg,#FFC9AF_0%,#FFFFFF08_23.87%,#FFFFFF00_79.58%,#FFC7AC_101.57%)]"></span>
        <div className="container">
          <Titlebar title="WORKING PROCESS"/>
          <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
            <h2 className="section-heading">
              Grow Your 
              <span className="gradient-text">Socials in 4 Simple </span>
               Steps
            </h2>
            <p className="section-desc">A simple and efficient process designed to deliver fast and reliable results. Just place your order, and our system will handle the rest to help grow your social media presence smoothly.</p>
          </div>
          <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[linear-gradient(48.65deg,#FFFDFA_10.39%,#FFFAFC_58.1%,#FFF0E0_126.5%)] p-6 sm:p-12 md:p-24 rounded-2xl">
                  <h6 className="font-bold text-[48px] text-primary">01</h6>
                  <p className="text-base font-semibold text-primary mb-7.5">Create Account</p>
                   <p className="text-base font-medium">Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.</p>
                </div>
                <div className="bg-[linear-gradient(48.65deg,#FFFDFA_10.39%,#FFFAFC_58.1%,#FFF0E0_126.5%)] p-6 sm:p-12 md:p-24 rounded-2xl">
                  <h6 className="font-bold text-[48px] text-primary">02</h6>
                  <p className="text-base font-semibold text-primary mb-7.5">Add Funds</p>
                   <p className="text-base font-medium">Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.</p>
                </div>
                <div className="bg-[linear-gradient(48.65deg,#FFFDFA_10.39%,#FFFAFC_58.1%,#FFF0E0_126.5%)] p-6 sm:p-12 md:p-24 rounded-2xl">
                  <h6 className="font-bold text-[48px] text-primary">03</h6>
                  <p className="text-base font-semibold text-primary mb-7.5">Select Service</p>
                   <p className="text-base font-medium">Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.</p>
                </div>
                <div className="bg-[linear-gradient(48.65deg,#FFFDFA_10.39%,#FFFAFC_58.1%,#FFF0E0_126.5%)] p-6 sm:p-12 md:p-24 rounded-2xl">
                  <h6 className="font-bold text-[48px] text-primary">04</h6>
                  <p className="text-base font-semibold text-primary mb-7.5">Place your Order</p>
                   <p className="text-base font-medium">Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.</p>
                </div>
              </div>
              <div className="orbit-scene md:block hidden">
                  <div className="center-circle">
                    <div className="bg-linear-to-r from-primary to-secondary w-19.5 h-19.5 rounded-full flex items-center justify-center">
                      <Image src="/images/chain.png" width={38} height={38} alt=""/>
                    </div>
                  </div>
                  <div className="orbit orbit-1">
                    <div className="satellite sat-1"></div>
                    <div className="satellite sat-2"></div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      {/* <!--==========================
           WORKING PROCESS PART END
        ==========================--> */}

      {/* <!--==========================
           PAYMENT METHOD PART START
        ==========================--> */}
      <section className="py-16 md:py-20">
        <div className="container">
          <Titlebar title="Payment Methods"/>
          <div className="text-center mb-12 mx-auto max-w-218.75 w-full">
            <h2 className="section-heading">
              Multiple Payment {" "}
              <span className="gradient-text">Methods</span>
            </h2>
            <p className="section-desc">We accept Visa, Mastercard, American Express, Bkash, Nagad, Rocket, and more, so you are never stuck at checkout. Deposits are instant, and you can start with as little as $1, which means there is no reason to wait before placing your first order.</p>
          </div>
          <div className="relative bg-[url('/images/cta_map.png')] bg-no-repeat bg-center bg-contain h-100">
              <div className="orbit-content relative z-10">
                <div className="orbit-center"></div>
                <div className="orbit-ring" style={{ width: "100px", height: "100px" }}></div>
                <div className="orbit-ring" style={{ width: "180px", height: "180px" }}></div>
                <div className="orbit-ring" style={{ width: "260px", height: "260px" }}></div>
                <div className="orbit-item"></div>
              </div>
          </div>
          <p className="text-[60px] md:text-[100px] lg:text-[128px] font-normal font-parkinsans text-primary/10 text-center">Multiple Payments</p>
        </div>
      </section>
      {/* <!--==========================
            PAYMENT METHOD PART END
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
              <div className="gradient-btn mx-autogradient-btn w-fit mx-auto mb-8">Weeks 1-2</div>
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
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0 relative after:w-1 after:h-24 after:absolute after:top-16 after:border-primary after:border-dashed after:border-l-2">
                      <span className="gradient-text font-semibold text-base">02</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Why it Works</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Creates baseline credibility and improves first impression</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                      <span className="gradient-text font-semibold text-base">03</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Estimated Cost/Time</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">৳2,000–5,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
              <div className="gradient-btn mx-autogradient-btn w-fit mx-auto mb-8">Weeks 3-4</div>
              <div className="flex flex-col gap-5">
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8] ">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0 relative after:w-1 after:h-24 after:absolute after:top-16 after:border-primary after:border-dashed after:border-l-2">
                      <span className="gradient-text font-semibold text-base">01</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">What You Do</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Start posting consistent, high-quality content</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0 relative after:w-1 after:h-24 after:absolute after:top-16 after:border-primary after:border-dashed after:border-l-2">
                      <span className="gradient-text font-semibold text-base">02</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Why it Works</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Larger follower base increases organic engagement</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                      <span className="gradient-text font-semibold text-base">03</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Estimated Cost/Time</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Mostly content effort</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
              <div className="gradient-btn mx-autogradient-btn w-fit mx-auto mb-8">Months 2-3</div>
              <div className="flex flex-col gap-5">
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8] ">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0 relative after:w-1 after:h-24 after:absolute after:top-16 after:border-primary after:border-dashed after:border-l-2">
                      <span className="gradient-text font-semibold text-base">01</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">What You Do</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Continue content + light support if needed</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0 relative after:w-1 after:h-24 after:absolute after:top-16 after:border-primary after:border-dashed after:border-l-2">
                      <span className="gradient-text font-semibold text-base">02</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Why it Works</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Faster reach, better algorithm response</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                      <span className="gradient-text font-semibold text-base">03</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Estimated Cost/Time</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Reduced SMM usage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] p-5 border-2 border-primary/20 bg-white">
              <div className="gradient-btn mx-autogradient-btn w-fit mx-auto mb-8">Months 3-4</div>
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
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0 relative after:w-1 after:h-24 after:absolute after:top-16 after:border-primary after:border-dashed after:border-l-2">
                      <span className="gradient-text font-semibold text-base">02</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Why it Works</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">Creates baseline credibility and improves first impression</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 rounded-[20px] bg-[#F5F5F7E8]">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10.5 h-10.5 bg-white rounded-xl flex items-center justify-center shrink-0">
                      <span className="gradient-text font-semibold text-base">03</span>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <h6 className="text-xl font-semibold text-primary">Estimated Cost/Time</h6>
                      <p className="font-medium text-sm text-[#5A5A5A] leading-relaxed">৳2,000–5,000</p>
                    </div>
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
        <Image className="absolute top-0 left-0 z-0" src="/images/advantage-shape.png" alt="footer-bg" width={5000} height={1000} />
        <Image className="absolute bottom-0 right-0 z-0" src="/images/advantage-shape-2.png" alt="footer-bg" width={1000} height={500} />
        <div className="container relative z-10">
          <Titlebar title="ADVANTAGES" />
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
