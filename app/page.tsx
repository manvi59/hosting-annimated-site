// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client"
import PriceSection from "./PriceSection.jsx"
import Testimonials from "./Testimonials.jsx";
import FAQSection from "./FAQSection.jsx"
import HostingServices from "./ServicesSection.jsx"
import Link from "next/link.js";
import { useEffect, useState } from "react";
import BlackFridayCard from "./Hero.jsx"
import DedicatedServerSection from "./DedicatedServer.jsx"
import DedicatedHero from "./DedicatedServer.jsx"
import Footer from "./footer.jsx"

export default function Home() {

  // const [time, setTime] = useState({
  //     days: 0,
  //     hrs: 0,
  //     mins: 0,
  //     secs: 0,
  //   });
  
  //   // COUNTDOWN TIMER
  //   useEffect(() => {
  //     const endDate = new Date();
  //     endDate.setHours(endDate.getHours() + 25);
  
  //     const timer = setInterval(() => {
  //       const now = new Date().getTime();
  //       const distance = endDate - now;
  
  //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //       const hrs = Math.floor(
  //         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //       );
  //       const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       const secs = Math.floor((distance % (1000 * 60)) / 1000);
  
  //       setTime({ days, hrs, mins, secs });
  
  //       if (distance < 0) clearInterval(timer);
  //     }, 1000);
  
  //     return () => clearInterval(timer);
  //   }, []);
 
 const [time, setTime] = useState({
  days: 0,
  hrs: 0,
  mins: 0,
  secs: 0,
});

useEffect(() => {
  // Create end date
  const endDateObj = new Date();
  endDateObj.setHours(endDateObj.getHours() + 25);

  // Convert to timestamp (IMPORTANT)
  const endDate = endDateObj.getTime();

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hrs = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance <= 0) {
      setTime({ days: 0, hrs: 0, mins: 0, secs: 0 });
      clearInterval(timer);
      return;
    }

    setTime({ days, hrs, mins, secs });
  }, 1000);

  return () => clearInterval(timer);
}, []);
 return (
    <main className="min-h-screen w-full bg-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-14 py-6" style={{background:"black", color:"white"}}>
        <div className="text-3xl font-bold">Wavespace</div>

        <ul className="flex items-center gap-10 text-lg">
          <Link href={"/service"}>
          <li className="hover:text-black/60 cursor-pointer">Services ↗</li>
          </Link>
          <li className="cursor-pointer">Case studies⁰⁹</li>
          <li className="cursor-pointer">Pricing</li>
          <Link href={"/about"}>
          <li className="cursor-pointer">About us</li>
          </Link> 
          <li className="cursor-pointer">Blog</li>
        </ul>

        <button className="bg-[#5B4BFF] hover:bg-[#6A5CFF] text-white px-6 py-3 rounded-full text-lg">
          Contact Us ↗
        </button>
      </nav>

      {/* HERO SECTION */}
      {/* <section className="px-14 py-20 grid grid-cols-1 md:grid-cols-2 gap-10"> */}
      {/* <section className=" px-14 py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 "
      style={{background:"#6456f7"}}
      >
         
        <div>
         
          <div className="flex items-center gap-2 bg-green-100 w-fit px-4 py-1 rounded-full mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <p className="text-sm">Available for New Projects</p>
          </div>

          <h1 className="text-6xl md:text-6xl text-white font-bold leading-tight mb-6">
            Dedicated Servers <br />
            High Performance 
            <br />
             
          </h1>

          
          <div className="flex gap-6 mt-8">
            <button className="bg-black text-white px-8 py-4 rounded-full text-xl">
              Book a call
            </button>

            <button className="bg-white border px-8 py-4 rounded-full text-xl flex items-center gap-2">
              <img src="/server.jpg" className="w-10 h-10" />
              View work
            </button>
          </div>
        </div>

         
        <div className="flex  justify-end ">
          <div className="flex-col mt-20">
            <p className="text-lg leading-relaxed mb-6 text-white">
              Wavespace is a global UX agency <br></br>that helps brands scale
              with fast,<br></br>
              high-performance digital experiences.
            </p>

            

            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-3">
                <img
                  src="/photo1.avif"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/photo1.avif"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/photo1.avif"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <p className="text-gray-900">Loved by 500+ Founders</p>
            </div>

            <div className="flex items-center gap-3">
              <img src="/cloud.jpg" className="w-10 h-10" />

              <div className="flex">
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
              </div>

              <p>13 Reviews</p>
            </div>

            <img src="/certified.png" className="w-56 mt-8 hidden " />
          </div>
        </div>
      </section> */}

      {/* <section
  className="relative px-14 py-24 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 overflow-hidden"
  style={{ background: "#6456f7" }}
>
   
  <div className="absolute inset-0 opacity-30 blur-[120px] bg-gradient-to-br from-white via-purple-200 to-transparent"></div>

  
  <div className="relative z-10 animate-fadeUpSlow">
    
    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full mb-6 border border-white/30">
      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
      <p className="text-sm text-white">Available for New Projects</p>
    </div>

    <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tight mb-8 drop-shadow-lg">
      Dedicated Servers <br />
      High Performance <br />
      <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
        For Global Scale
      </span>
    </h1>

     
    <div className="flex gap-6 mt-10">
      <button className="bg-black hover:bg-white hover:text-black transition-all duration-300 text-white px-10 py-4 rounded-full text-xl shadow-lg">
        Book a Call
      </button>

      <button className="bg-white hover:bg-gray-200 border px-10 py-4 rounded-full text-xl flex items-center gap-3 shadow-lg transition-all duration-300">
        <img src="/server.jpg" className="w-10 h-10 animate-float" />
        View Work
      </button>
    </div>
  </div>

   
  <div className="relative mt-16 md:mt-0 z-10 animate-slideInRight">
    <p className="text-lg text-white/90 leading-relaxed mb-6">
      Wavespace is a global UX agency that helps brands scale with fast,
      high-performance digital experiences.
    </p>

   
    <div className="flex items-center gap-3 mb-6">
      <div className="flex -space-x-3">
        <img
          src="/photo1.avif"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/photo1.avif"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <img
          src="/photo1.avif"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
      <p className="text-white/90">Loved by 500+ Founders</p>
    </div>

    
    <div className="flex items-center gap-3">
      <img src="/cloud.jpg" className="w-10 h-10 animate-float" />

      <div className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="text-yellow-300 text-2xl">★</span>
        ))}
      </div>
      <p className="text-white">13 Reviews</p>
    </div>

   
  </div>
</section> */}
  <section className="w-full bg-[#0D0F1A] text-white px-6 md:px-24 pb-24 pt-10 relative overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#9CA3AF] text-lg mb-3">Web Hosting India</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {/* Get 80% Off + Free <br />
            Domain + 3 Months Free */}
           99.99% Uptime + Free <br />
            Domain + 20-days
Free Trial
          </h1>

          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✔</span> Launch your website in minutes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✔</span> Free migration with zero downtime
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✔</span> Free SSL, email, and 24/7 expert support
            </li>
          </ul>

          <p className="text-4xl font-bold mt-10">₹5,000 <span className="text-lg">/mo</span></p>

          <p className="text-gray-300 mt-4">Offer ends soon</p>

          <button className="mt-6 bg-[#5B4BFF] hover:bg-[#6A5CFF] text-white px-8 py-3 rounded-full font-medium text-lg transition-all">
            Claim offer now
          </button>

          <p className="text-gray-300 mt-4 flex items-center gap-2">
            <span className="text-green-500 text-xl">✔</span> 30-day money-back guarantee
          </p>
        </div>

        {/* RIGHT SIDE — OFFER BOX */}
        <div 
        // style={{backgroundImage:"url('/frame.jpg')",backgroundRepeat:"no-repeat"}}
        // style={{backgroundImage:"url('https://www.milesweb.in/assets/images/mw/black-friday.png')",backgroundRepeat:"no-repeat"}}

        >

        <div className="relative bg-[#111425] border border-[#7A55FF40] rounded-2xl p-10 shadow-[0_0_50px_#612BFF40] neon-border 
         relative rounded-[32px] p-10 
        bg-[#0b0f1c]/80 backdrop-blur-xl 
        w-[450px] h-[550px] 
        border-[3px]
        border-transparent 
        " 
         
        
        >

          <p className="text-center text-xl text-gray-200">Black Friday <span className="text-pink-400">Sale</span></p>

          <h1 className="text-[140px] font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-br from-white to-[#6E40FF] text-center drop-shadow-2xl" 
             
            >
            99
 <span className="text-5xl align-top">%</span>
          </h1>

          <p className="text-center text-3xl mt-[-20px] font-semibold tracking-wider">
           Uptime
          </p>

          {/* COUNTDOWN */}
          <p className="text-center mt-6 text-gray-300">Deal Ends in</p>

          <div className="flex justify-center gap-4 mt-4">
            {[
              { label: "Days", value: time.days },
              { label: "Hrs", value: time.hrs },
              { label: "Mins", value: time.mins },
              { label: "Secs", value: time.secs },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1A1D2E] px-5 py-4 rounded-xl border border-[#3C3F55] text-center"
              >
                <div className="text-3xl font-bold">{String(item.value).padStart(2, "0")}</div>
                <div className="text-xs uppercase text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        </div>

      </div>
    </section>
    
    {/* <HeroOffer/> */}
{/* <BlackFridayCard/> */}
    

    


       <section className="w-full py-20 px-6 md:px-14 bg-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight text-gray-900 mb-10">
         Featured Hosting Plans <br />
          {/* on a flat monthly subscription. */}
        </h1>

        {/* Brand Logos */}
        {/* <div className="flex flex-wrap justify-center items-center gap-6 mb-12 opacity-70">
    <img src="https://img.freepik.com/premium-vector/hosting-technology-logo-symbol-icon-template_166742-6367.jpg" className="h-20" />
    <img src="/logo-kodezi.png" className="h-6" />
    <img src="/logo-delve.png" className="h-6" />
    <img src="/logo-heygen.png" className="h-6" />
    <img src="/logo-zeroessay.png" className="h-6" />
  </div> */}

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 gap-3">
          <button className="px-5 py-2 bg-black text-white rounded-full text-sm">
            Monthly
          </button>
          <button className="px-5 py-2 bg-gray-200 rounded-full text-sm">
            Quarterly -10%
          </button>
          <button className="px-5 py-2 bg-gray-200 rounded-full text-sm">
            Yearly
          </button>
          <button className="px-5 py-2 bg-gray-200 rounded-full text-sm">
            2 Months Free
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-2">Starter</h2>
            <p className="text-gray-600 mb-6">
              Perfect for early startups and marketers needing steady design
              support.
            </p>

            <h3 className="text-4xl font-bold mb-2">
              ₹5,000<span className="text-lg font-medium">/monthly</span>
            </h3>
            <p className="text-gray-500 mb-6">Cancel anytime</p>

            <button className="w-full bg-black text-white py-3 rounded-full mb-3">
              Buy Now
            </button>
            <button className="w-full border py-3 rounded-full">
              Book an Intro Call
            </button>

            {/* Review Card */}
            <div className="mt-6 p-4 rounded-xl border bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Sam Ebanezar</p>
                  <p className="text-xs text-gray-500">CEO at Kodezi</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                “Exceptional hosting service”
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ CPU : Intel 14th Gen i3-14100 4.70GHz</li>
              <li>✔ CPU Core : 4 </li>
              <li>✔ Threads : 8 </li>
              <li>✔   250 GB NVMe
(gradable to 2 TB)</li>
            </ul>
          </div>

          {/* Accelerate Plan (Highlighted) */}
          <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-8">
            <div className="text-right text-sm text-gray-700 mb-2 font-semibold">
              Only 5 spots left
            </div>

            <h2 className="text-2xl font-semibold mb-2">Accelerate</h2>
            <p className="text-gray-600 mb-6">
              For SaaS & VC-backed teams needing rapid expert design.
            </p>

            <h3 className="text-4xl font-bold mb-2">
              ₹7,000<span className="text-lg font-medium">/monthly</span>
            </h3>
            <p className="text-gray-500 mb-6">Cancel anytime</p>

            <button className="w-full bg-[#c7d1ff] py-3 rounded-full mb-3 font-semibold">
              Buy Now
            </button>
            <button className="w-full border py-3 rounded-full">
              Book an Intro Call
            </button>

            {/* Review Card */}
            <div className="mt-6 p-4 rounded-xl border bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">QandQ Coversindia</p>
                  <p className="text-xs text-gray-500">
                    COO at a funded startup
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                “Great value for the price!”
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ CPU : Intel 14th Gen i5-14400 4.70GHz</li>
              <li>✔ CPU Core : 10 </li>
              <li>✔ Threads : 16</li>
              <li>✔ Disk Space: 250 GB NVMe
(Upgrade 2 TB)</li>
            </ul>
          </div>

          {/* Custom Plan */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-2">Flexible Project</h2>
            <p className="text-gray-600 mb-6">
              For startups & brands needing flexible, one-time, or mixed
              projects.
            </p>

            {/* <h3 className="text-4xl font-bold mb-2">Custom Project</h3> */}
              <h3 className="text-4xl font-bold mb-2">
              ₹8,500<span className="text-lg font-medium">/monthly</span>
            </h3>
            <p className="text-gray-500 mb-6">Full stack design team</p>

            <button className="w-full border py-3 rounded-full bg-white">
              Get custom quote
            </button>

            {/* Review Card */}
            <div className="mt-6 p-4 rounded-xl border bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Prachi sharma</p>
                  <p className="text-xs text-gray-500">CEO at ActiveSync</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                “Ideal for business owners.”
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ Intel 14th Gen i7-14700 5.4GHz</li>
              <li>✔ CPU Core : 20 </li>
              <li>✔ Threads : 28 </li>
              <li>✔ Disk Space: 250 GB NVMe
      (Upgradw 2 TB)</li>
            </ul>
          </div>
        </div>
      </section>
         {/* <section className="w-full py-20 px-6 md:px-14">
       
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-12">
          Bold UX design, billion-dollar proof. We <br />
          measure impact,{" "}
          <span className="text-gray-500">not just ship pixels.</span>
        </h1>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between">
            <p className="text-gray-400 text-sm">/01</p>
            <div>
              <h2 className="text-4xl font-bold">92%</h2>
              <p className="text-gray-500 mt-2 text-sm">
                client satisfaction 
                 
              </p>
            </div>
          </div>

         
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between">
            <p className="text-gray-400 text-sm">/02</p>
            <div>
              <h2 className="text-4xl font-bold">2885</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Trusted Clients
              </p>
            </div>
          </div>

           
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between">
            <p className="text-gray-400 text-sm">/03</p>
            <div>
              <h2 className="text-4xl font-bold">2895+</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Domains
              </p>
            </div>
          </div>

         
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between md:col-span-1">
            <p className="text-gray-400 text-sm">/04</p>
            <div>
              <h2 className="text-4xl font-bold">2324+</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Web Hosting
              </p>
            </div>
          </div>

           
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between md:col-span-2">
            <p className="text-gray-400 text-sm">/05</p>
            <div>
              <h2 className="text-4xl font-bold">2005</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Estb. since
              </p>
            </div>
          </div>
        </div>
      </section> */}

        {/* <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto">
    
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-16">
      Bold UX design, billion-dollar proof. We <br />
      measure impact,{" "}
      <span className="text-gray-500">not just ship pixels.</span>
    </h1>

     
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      
      {[
        { id: "/01", value: "92%", label: "Client Satisfaction" },
        { id: "/02", value: "2885", label: "Trusted Clients" },
        { id: "/03", value: "2895+", label: "Domains" },
        { id: "/04", value: "2324+", label: "Web Hostings" },
        { id: "/05", value: "2005", label: "Estb. Since" },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`group bg-white rounded-3xl border shadow-[0_4px_18px_rgba(0,0,0,0.06)] backdrop-blur-sm px-10 py-12 
          flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] hover:-translate-y-1
          ${idx === 4 ? "md:col-span-2" : ""}`}
        >
          <p className="text-gray-400 text-sm font-medium">{item.id}</p>

          <div>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 group-hover:text-gray-700 transition-all">
              {item.value}
            </h2>
            <p className="text-gray-500 mt-3 text-base">
              {item.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
        </section> */}

        <section className="w-full py-24 px-6 md:px-16 relative overflow-hidden">

  {/* Soft Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,200,255,0.4),transparent_60%)] opacity-70"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,200,200,0.4),transparent_70%)] opacity-70"></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-16 tracking-tight">
      {/* Bold UX design, billion-dollar proof. We <br />
      measure impact,{" "} */}
      Why you Can Choose domaniZ.in for the Dedicated Server Hosting
      <span className="text-gray-500"> 24/7 Support .</span>
    </h1>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {[
        { id: "/01", value: "92%", label: "Client Satisfaction" },
        { id: "/02", value: "2885", label: "Trusted Clients" },
        { id: "/03", value: "2895+", label: "Domains" },
        { id: "/04", value: "2324+", label: "Web Hostings" },
        { id: "/05", value: "2005", label: "Estb. Since" },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`group backdrop-blur-xl bg-white/70 border border-white/40 
          rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10 
          h-[240px] flex flex-col justify-between animate-fadeUp
          transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
          hover:bg-white/80 hover:border-gray-200
          ${idx === 4 ? "md:col-span-2" : ""}`}
          style={{ animationDelay: `${idx * 0.15}s` }}
        >
          {/* Number */}
          <p className="text-gray-400 text-sm font-medium tracking-widest">
            {item.id}
          </p>

          {/* Value */}
          <div>
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors">
              {item.value}
            </h2>
            <p className="text-gray-500 mt-3 text-base group-hover:text-gray-600 transition-all">
              {item.label}
            </p>
          </div>

          {/* Animated Accent Line */}
          <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full transition-all duration-500"></div>
        </div>
      ))}
    </div>
  </div>

  {/* Fade-Up Animation Keyframes */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.8s ease forwards;
    }
  `}</style>

</section>


{/* <DedicatedServerSection/> */}
        
<DedicatedHero/>
    
    
      <section className="relative w-full h-[650px] overflow-hidden flex items-center justify-center hidden ">
        {/* Animated Gradient Background */}
        {/* <div className="absolute inset-0 animate-gradient bg-gradient-to-b from-[#cfd8ff] to-[#b5c3ff]"></div> */}
        <div className="absolute inset-0 animate-gradient"></div>

        {/* White Frame Container */}
        <div className="relative z-10 bg-white w-[90%] h-[620px]  overflow-hidden">
          {/* Inner gradient bg behind the video */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#98a8ff] to-[#c7d1ff]"></div>

          {/* Video Full Cover */}
          <video
            src="/hosting.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
      </section>

      

      {/* <section className="relative w-full h-[650px] overflow-hidden flex items-center justify-center ">
        <img src="/banner.webp" className="w-full h-full" />
      </section> */}


{/*------------- light theme banner very elegent --------------- */}
   {/* <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f7f9ff] via-white to-[#eef2ff]">

   
  <div className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#6456f7]/50 to-[#8f86ff]/40 blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-20 -right-10 w-[300px] h-[300px] rounded-full bg-gradient-to-tl from-[#ffb2e5]/40 to-[#ffd1f7]/40 blur-3xl animate-pulse-slow delay-300"></div>

  
  <div className="absolute inset-0 opacity-[0.09] bg-[linear-gradient(to_right,#0001_1px,transparent_1px),linear-gradient(to_bottom,#0001_1px,transparent_1px)] bg-[size:40px_40px]"></div>

   
  <div className="relative z-10 text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight animate-fadeUp">
      Superfast Hosting for  
      <span className="block text-[#6456f7]">Modern Businesses</span>
    </h1>

    <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fadeUp delay-200">
      Experience next-generation performance, advanced security, and 
      lightning-fast cloud infrastructure engineered for your growth.
    </p>

    <div className="mt-10 flex justify-center gap-6 animate-fadeUp delay-300">
      <button className="px-8 py-3 rounded-full bg-[#6456f7] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        Get Started
      </button>
      <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300">
        Explore Plans
      </button>
    </div>
  </div>

   
  <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(25px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeUp {
      animation: fadeUp 0.9s ease-out forwards;
    }
    .animate-fadeUp.delay-200 {
      animation-delay: 0.2s;
    }
    .animate-fadeUp.delay-300 {
      animation-delay: 0.3s;
    }

    @keyframes pulse-slow {
      0%, 100% { transform: scale(1); opacity: 0.55; }
      50% { transform: scale(1.12); opacity: 0.9; }
    }
    .animate-pulse-slow {
      animation: pulse-slow 6s ease-in-out infinite;
    }
  `}</style>
</section> */}

<section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden bg-[#0a0a0f] text-white">

      {/* GLOWING GRADIENT ORBS */}
      <div className="absolute top-[-150px] left-[-150px] w-[380px] h-[380px] bg-purple-600 blur-[180px] opacity-50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-180px] right-[-150px] w-[420px] h-[420px] bg-blue-500 blur-[200px] opacity-40 rounded-full animate-pulse-slow"></div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Powering the Future of  
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Cloud Computing
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Lightning-fast hosting, 99.99% uptime, enterprise-grade security and fully optimized performance.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all shadow-lg shadow-blue-600/30">
            Get Started
          </button>

          <button className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 transition-all">
            Explore Plans
          </button>
        </div>
      </div>

      {/* FLOATING LINES (FUTURISTIC EFFECT) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-32 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-slow-move"></div>
        <div className="absolute bottom-32 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-slow-move-reverse"></div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.6; }
        }

        .animate-slow-move {
          animation: lineMove 6s linear infinite;
        }
        .animate-slow-move-reverse {
          animation: lineMoveReverse 8s linear infinite;
        }

        @keyframes lineMove {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(20px); }
        }
        @keyframes lineMoveReverse {
          0% { transform: translateX(20px); }
          100% { transform: translateX(-20px); }
        }
      `}</style>
    </section>



 <HostingServices/>
       

      <section className="w-full py-10 overflow-hidden bg-white">
        <div className="flex gap-16 items-center scroll-animation whitespace-nowrap">
          <img
            src="https://img.freepik.com/premium-vector/hosting-technology-logo-symbol-icon-template_166742-6367.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/web-hosting-concept-2-colored-icon-simple-blue-element-illustration-web-hosting-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-4512.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/logo-with-blue-orange-cloud_1071-109.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149203402.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/hosting-logo-vector-design-template_717549-251.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-data-logo-concept-cloud-paper-logo-document-cloud-logo-design-illustration_467060-1376.jpg"
            className="h-20 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/cloud-gradient-logo-design-template_474888-1900.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-logo-that-says-cloud-logo-it_267160-959.jpg"
            className="h-40 opacity-70"
          />

          {/* Duplicate list for seamless infinite loop */}
          <img
            src="https://img.freepik.com/premium-vector/hosting-technology-logo-symbol-icon-template_166742-6367.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/web-hosting-concept-2-colored-icon-simple-blue-element-illustration-web-hosting-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-4512.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/logo-with-blue-orange-cloud_1071-109.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149203402.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/hosting-logo-vector-design-template_717549-251.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-data-logo-concept-cloud-paper-logo-document-cloud-logo-design-illustration_467060-1376.jpg"
            className="h-20 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/cloud-gradient-logo-design-template_474888-1900.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-logo-that-says-cloud-logo-it_267160-959.jpg"
            className="h-40 opacity-70"
          />
        </div>
      </section>

      
      <PriceSection/>

      {/* <section className="w-full py-20 bg-gradient-to-b from-[#0b0f19] to-[#0b0f19]/95 text-white"> */}
      <section className="w-full py-20 ">
      <div className="max-w-9xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dedicated CPU Servers  
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Experience unmatched performance with powerful, isolated CPU cores built 
            to handle heavy workloads, high-traffic applications, and enterprise-grade computing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 h-150">
          {[
            {
              title: "Latest Hardware",
              desc: "Our Dedicated Servers come equipped with the latest hardware components, ensuring optimal performance, reliability.  ",
              img:"https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149203399.jpg"
            },
            {
              title: "No Setup fee",
              desc: "No additonal Setup Costs, just pay for a month and get your Dedicated Server ready.",
              img:"https://img.freepik.com/free-vector/creative-data-logo-template_23-2149212796.jpg",
            },
            {
              title: "NVMe Storage",
              desc: "NVMe (Non-Volatile Memory Express), unlike traditional Hard drives, has a faster connectivity with storage device.",
              img:"https://img.freepik.com/premium-vector/creative-logo-design-technology-company-vector-illustration_1253202-17551.jpg",
            },
            {
              title: "No Upfront Long term commitment",
              desc: "Having doubts? Just pay for a month and experience our dedicated server hosting without any long-term commitment. ",
              img:"https://img.freepik.com/premium-vector/cloud-server-logo-icon-design-illustration_106546-1715.jpg",
            },
            {
              title: "7 Days Money back",
              desc: "If you are not satisfied with our dedicated server hosting services within the first 7 days",
              img:"https://img.freepik.com/premium-vector/logo-design-featuring-stack-books-symbolizing-knowledge-education-learning-company-generate-minimalist-sleek-design-brows-plug_585735-34203.jpg",
            },
            {
              title: "1-Click Scaling",
              desc: "Instantly increase CPU, RAM, and storage without downtime.",
              img:"https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149203402.jpg"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur shadow-2xl rounded-2xl p-7 border border-white/10 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"

            >
              <img src={item?.img} height={100} width={100}/>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing / CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Starting at just $39/mo</h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Perfect for developers, agencies, and growing businesses who need raw power and stability.
          </p>

          <button className="px-10 py-4 text-lg font-medium rounded-full bg-purple-600 hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/30">
            Get Your Dedicated CPU Server →
          </button>
        </div>
      </div>
    </section>
      

{/* <section className="relative h-full w-full flex items-center justify-center bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">

   
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-[140px] opacity-50"></div>
    <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-300 rounded-full blur-[180px] opacity-60"></div>
  </div>

  
  <div className="relative z-10 container mx-auto px-10 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">

    <div className="max-w-xl">
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#0A1A44]">
        AI Website Builder  
        <br /> Build Smarter, Faster
      </h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Generate fully designed websites in seconds using advanced AI tools — simple,
        clean, and incredibly fast.
      </p>

      <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 transition-all rounded-xl text-white text-lg font-semibold shadow-lg">
        Start Building
      </button>
    </div>

     
    <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
      <img
        src="https://img.freepik.com/free-vector/abstract-creative-website-hosting-illustration_23-2149227348.jpg"
        className="w-[420px] lg:w-[520px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] rounded-xl animate-float"
      />
    </div>

  </div>
</section> */}

 
    <section className="w-full py-20 bg-white">
      <div className="max-w-9xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE WITH FLOATING CARDS */}
        <div className="relative flex justify-center">
          <div className="relative w-[360px] md:w-[420px] h-auto bg-gradient-to-b from-indigo-300 to-purple-300 p-1 rounded-3xl shadow-xl">
            <img
              src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-city-with-arms-crossed_23-2148767033.jpg"
              className="rounded-3xl w-full h-full object-cover"
            />

            {/* Floating Tag Top */}
            <div className="absolute -top-6 left-6 bg-white shadow-md px-4 py-2 rounded-full flex items-center space-x-2">
              <span className="text-indigo-600 text-lg">🌐</span>
              <p className="text-gray-700 text-sm">yourcompanyname.com</p>
            </div>

            {/* Floating Card Bottom Left */}
            <div className="absolute -bottom-8 left-4 bg-white shadow-lg px-4 py-3 rounded-2xl w-56">
              <p className="text-gray-500 text-xs flex items-center gap-2">
                <span className="text-green-500">●</span> Today’s
              </p>
              <p className="text-xl font-semibold">1,00,000+ Visitor</p>
            </div>

            {/* Floating Card Bottom Right */}
            <div className="absolute -bottom-20 left-20 bg-white shadow-lg px-4 py-3 rounded-2xl w-60">
              <p className="text-sm text-gray-700">Grow our company</p>
              <p className="text-xl font-bold">10,525</p>
              <div className="w-full mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-indigo-500 rounded-full w-[70%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Next Gen  <span className="text-indigo-600">VPS Servers</span> 
            {/* Your website’s safety is the <span className="text-indigo-600">MilesWeb priority</span> */}
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            We treat your website like it's ours. Every hosting plan includes enterprise-grade protection 
            so you can stay focused on your business.
          </p>

          <button className="mt-8 px-8 py-4 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition">
            Get Started
          </button>

          {/* FEATURES */}
          <div className="mt-10 space-y-8">
            {/* Feature 1 */}
            <div className="flex items-center space-x-4 border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full text-2xl">
                🔒
              </div>
              <p className="text-gray-800 font-medium text-lg">
                SSH Access 
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center space-x-4 border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full text-2xl">
                📧
              </div>
              <p className="text-gray-800 font-medium text-lg">
                Full Root Access 
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center space-x-4 border p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 flex items-center justify-center rounded-full text-2xl">
                🔄
              </div>
              <p className="text-gray-800 font-medium text-lg">
               99.99% Uptime and 24x7 Support
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
   

  
    <section className="w-full bg-[#05010f] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Free website migration, managed  by  
             <span className="text-indigo-400"> Domainz</span>
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Our experts handle the technical aspects of moving your website,
            with data security at the utmost priority. Sit back and enjoy a
            stress-free transition to our platform without any additional costs.
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-indigo-500 text-white text-lg font-semibold hover:bg-indigo-600 transition-all duration-300 shadow-lg">
            Start free migration
          </button>
        </div>

        {/* RIGHT ARTWORK */}
        <div className="relative flex justify-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <img
              src="https://img.freepik.com/free-photo/website-hosting-concept-with-woman-working-computer_23-2149406785.jpg"
              className="w-[520px] h-[380px] object-cover"
              alt="Banner"
            />
          </div>

          {/* FLOATING COMPANY CARD */}
          <div className="absolute bottom-6 -left-10 bg-white shadow-lg rounded-full px-6 py-3 flex items-center gap-3 animate-bounce-slow">
            <div className="bg-indigo-500 text-white p-2 rounded-full text-sm">🌐</div>
            <p className="text-sm font-medium">yourcompanyname.com</p>
          </div>

          {/* FLOATING MIGRATION CARD */}
          <div className="absolute top-8 -right-10 bg-white shadow-xl rounded-2xl p-4 w-48 animate-float">
            <img
              src="/api/placeholder/150/150"
              className="rounded-lg mb-3"
              alt="Migration"
            />
            <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
              <span>📄</span> Free website migration
            </p>
          </div>
        </div>
      </div>
    </section>
   



<Testimonials/>
   <section className="relative w-full h-[650px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-b from-[#cfd8ff] to-[#b5c3ff]"></div>

        <div className="relative z-10 bg-white w-[85%] h-[520px] shadow-xl rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#98a8ff] to-[#c7d1ff]"></div>

          <div className="relative z-20 w-full h-full flex items-center justify-center">
            <h1 className="absolute top-12 left-16 text-white text-4xl font-bold opacity-70 tracking-wide">
              Why Domainz.in
            </h1>

            <p className="absolute left-16 top-28 text-white tracking-wider">
              With 20 years of experience
            </p>
            <p className="absolute left-16 bottom-20 text-white">
              Hosting Domain from  <br></br>past 2 Decades 
            </p>

            <p className="absolute right-10 top-25 text-white text-right">
              We understand you just like our Family,<br></br> From instant support to free trials,
              <br></br>we're dedicated to enhancing your   <br></br>business every step of the way.
            </p>
            <p className="absolute right-16 bottom-20 text-white text-right">
              guide you to the <br></br> best solution possible
            </p>

            <p className="absolute bottom-12  text-white font-semibold bg-black/30 px-6 py-2 rounded-full">
              Talk To Our Experts
            </p>

            <img src="/host.png" className="relative h-[420px] z-30" />
          </div>
        </div>
      </section>


      <section className="w-full py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
         Success stories of
         <span className="text-indigo-600 ms-3">

           proven performance
         </span>
        </h2>
        <p className="text-gray-600 mt-4">
          Real stories from people growing their business using our hosting services.
        </p>
      </div>

      {/* INFINITE CAROUSEL */}
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-6 animate-marquee">
          
          {/* CARD 1 */}
          <div className="w-[450px] bg-white shadow-md rounded-2xl p-8 border hover:shadow-lg transition h-[250px]">
            <div className="flex items-center gap-3 mb-4">
              <img src="/profile.jpg" className="w-30 h-30 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-900">Israq Khan</h4>
                <p className="text-gray-500 text-sm">CEO – Kodezi</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              “Wavespace is very <span className="font-bold">reliable</span> and the designs are truly amazing!”
            </p>
          </div>

          {/* CARD 2 */}
          <div className="w-[450px] bg-white shadow-md rounded-2xl p-8 border hover:shadow-lg transition h-[250px]">
            <div className="flex items-center gap-3 mb-4">
              <img src="/profile.jpg" className="w-30 h-30 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-900">Nick Fisher</h4>
                <p className="text-gray-500 text-sm">Founder – Tournated</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              “Highly happy with the work. I will definitely keep working with them!”
            </p>
          </div>

          {/* CARD 3 */}
          <div className="w-[450px] bg-white shadow-md rounded-2xl p-8 border hover:shadow-lg transition h-[250px]">
            <div className="flex items-center gap-3 mb-4">
              <img src="/profile.jpg" className="w-30 h-30 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-900">Abraham Ajayi</h4>
                <p className="text-gray-500 text-sm">CEO – ActiveSync</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              “They brought my idea to life. Fantastic experience!”
            </p>
          </div>

          {/* CARD 4 */}
          <div className="w-[450px] bg-white shadow-md rounded-2xl p-8 border hover:shadow-lg transition h-[250px]">
            <div className="flex items-center gap-3 mb-4">
              <img src="/profile.jpg" className="w-30 h-30 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-900">Danny P</h4>
                <p className="text-gray-500 text-sm">Director of Sales – Luxara</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              “Very professional and amazing communication. Highly recommended!”
            </p>
          </div>

          {/* CARD 5 */}
          <div className="w-[450px] bg-white shadow-md rounded-2xl p-8 border hover:shadow-lg transition h-[250px]">
            <div className="flex items-center gap-3 mb-4">
              <img src="/profile.jpg" className="w-30 h-30 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-900">Mark Gawlyk</h4>
                <p className="text-gray-500 text-sm">Co-founder – HBIT App</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              “Amazing support and high-quality design delivered fast.”
            </p>
          </div>

        </div>
      </div>

      {/* SECOND LOOP FOR INFINITE EFFECT */}
      <div className="relative w-full overflow-hidden mt-6">
        <div className="flex space-x-6 animate-marquee2">
          
          {/* REPEAT ALL CARDS FOR LOOPING */}
          {/* You can paste the same card list again here */}
          
        </div>
      </div>
    </section>

      <FAQSection/>

 {/* <footer className="bg-[#0D0F15] text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">AtlasServe</h3>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Secure, ultra-fast, and reliable hosting solutions — built for speed,
            stability and premium performance.
          </p>

          
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-white transition">
              <i className="ri-facebook-fill text-xl"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="ri-twitter-x-fill text-xl"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="ri-instagram-fill text-xl"></i>
            </a>
            <a href="#" className="hover:text-white transition">
              <i className="ri-linkedin-fill text-xl"></i>
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Hosting</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Shared Hosting</a></li>
            <li><a href="#" className="hover:text-white transition">VPS Hosting</a></li>
            <li><a href="#" className="hover:text-white transition">Cloud Hosting</a></li>
            <li><a href="#" className="hover:text-white transition">WordPress Hosting</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Career</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Report Issue</a></li>
            <li><a href="#" className="hover:text-white transition">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Support</a></li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AtlasServe Hosting. All rights reserved.
      </div>
    </footer> */}

    <Footer/>

    


      
    </main>
  );
}
