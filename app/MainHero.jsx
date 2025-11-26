
// "use client";
// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function MainHero() {
//   // ----------------------------------
//   // COUNTDOWN TIMER
//   // ----------------------------------
//   const [time, setTime] = useState({
//     days: 0,
//     hrs: 0,
//     mins: 0,
//     secs: 0,
//   });

//   useEffect(() => {
//     const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000; // +7 days

//     const updateTimer = () => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance <= 0) return;

//       setTime({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hrs: Math.floor((distance / (1000 * 60 * 60)) % 24),
//         mins: Math.floor((distance / (1000 * 60)) % 60),
//         secs: Math.floor((distance / 1000) % 60),
//       });
//     };

//     updateTimer();
//     const interval = setInterval(updateTimer, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // ----------------------------------
//   // TEXT ANIMATION
//   // ----------------------------------
//   const textRef = useRef(null);

//   useEffect(() => {
//     const el = textRef.current;

//     gsap.fromTo(
//       el,
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.4,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//           toggleActions: "play none none reset",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="w-full bg-[#0D0F1A] text-white px-6 md:px-24 pb-24 pt-10 relative overflow-hidden">

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT SIDE */}
//         <div ref={textRef}>
//           <p className="text-[#9CA3AF] text-lg mb-3">
//             Web Hosting India
//           </p>

//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             99.99% Uptime + Free <br />
//             Domain + 20-days Free Trial
//           </h1>

//           <ul className="space-y-4 text-lg">
//             <li className="flex items-center gap-2">
//               <span className="text-green-500 text-xl">✔</span> Launch your website in minutes
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-500 text-xl">✔</span> Free migration with zero downtime
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-500 text-xl">✔</span> Free SSL, email, and 24/7 expert support
//             </li>
//           </ul>

//           <p className="text-4xl font-bold mt-10">
//             ₹5,000 <span className="text-lg">/mo</span>
//           </p>

//           <p className="text-gray-300 mt-4">Offer ends soon</p>

//           <button className="mt-6 bg-[#5B4BFF] hover:bg-[#6A5CFF] text-white px-8 py-3 rounded-full font-medium text-lg transition-all">
//             Claim offer now
//           </button>

//           <p className="text-gray-300 mt-4 flex items-center gap-2">
//             <span className="text-green-500 text-xl">✔</span> 30-day money-back guarantee
//           </p>
//         </div>

//         {/* RIGHT SIDE — OFFER BOX */}
//         <div>
//           <div
//             className="relative bg-[#111425] border border-[#7A55FF40] rounded-2xl p-10 shadow-[0_0_50px_#612BFF40] neon-border 
//             relative rounded-[32px] p-10 
//             bg-[#0b0f1c]/80 backdrop-blur-xl 
//             w-[450px] h-[550px] 
//             border-[3px]
//             border-transparent"
//           >
//             <p className="text-center text-xl text-gray-200">
//               Black Friday <span className="text-pink-400">Sale</span>
//             </p>

//             <h1
//               className="text-[140px] font-extrabold text-transparent bg-clip-text 
//               bg-gradient-to-br from-white to-[#6E40FF] text-center drop-shadow-2xl"
//             >
//               99
//               <span className="text-5xl align-top">%</span>
//             </h1>

//             <p className="text-center text-3xl mt-[-20px] font-semibold tracking-wider">
//               Uptime
//             </p>

//             {/* COUNTDOWN */}
//             <p className="text-center mt-6 text-gray-300">Deal Ends in</p>

//             <div className="flex justify-center gap-4 mt-4">
//               {[
//                 { label: "Days", value: time.days },
//                 { label: "Hrs", value: time.hrs },
//                 { label: "Mins", value: time.mins },
//                 { label: "Secs", value: time.secs },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-[#1A1D2E] px-5 py-4 rounded-xl border border-[#3C3F55] text-center"
//                 >
//                   <div className="text-3xl font-bold">
//                     {String(item.value).padStart(2, "0")}
//                   </div>
//                   <div className="text-xs uppercase text-gray-400">
//                     {item.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainHero() {
  // ----------------------------------
  // COUNTDOWN TIMER
  // ----------------------------------
  const [time, setTime] = useState({
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) return;

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((distance / (1000 * 60 * 60)) % 24),
        mins: Math.floor((distance / (1000 * 60)) % 60),
        secs: Math.floor((distance / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // ----------------------------------
  // LEFT TEXT ANIMATION
  // ----------------------------------
  const leftRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  // ----------------------------------
  // RIGHT TEXT ANIMATION (INDIVIDUAL ITEMS)
  // ----------------------------------
  const rightTextsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      rightTextsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightTextsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full bg-[#0D0F1A] text-white px-6 md:px-24 pb-24 pt-10 relative overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div ref={leftRef}>
          <p className="text-[#9CA3AF] text-lg mb-3">Web Hosting India</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            99.99% Uptime + Free <br />
            Domain + 20-days Free Trial
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

          <p className="text-4xl font-bold mt-10">
            ₹5,000 <span className="text-lg">/mo</span>
          </p>

          <p className="text-gray-300 mt-4">Offer ends soon</p>

          <button className="mt-6 bg-[#5B4BFF] hover:bg-[#6A5CFF] text-white px-8 py-3 rounded-full font-medium text-lg transition-all">
            Claim offer now
          </button>

          <p className="text-gray-300 mt-4 flex items-center gap-2">
            <span className="text-green-500 text-xl">✔</span> 30-day money-back guarantee
          </p>
        </div>

        {/* RIGHT SIDE — OFFER BOX */}
        <div>
          <div
            className="relative bg-[#111425] border border-[#7A55FF40] rounded-2xl p-10 shadow-[0_0_50px_#612BFF40] neon-border 
            relative rounded-[32px] p-10 
            bg-[#0b0f1c]/80 backdrop-blur-xl 
            w-[450px] h-[550px] 
            border-[3px]
            border-transparent"
          >

            {/* Text elements individually animated */}
            <p
              ref={el => rightTextsRef.current[0] = el}
              className="text-center text-xl text-gray-200"
            >
              Black Friday <span className="text-pink-400">Sale</span>
            </p>

            <h1
              ref={el => rightTextsRef.current[1] = el}
              className="text-[140px] font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-br from-white to-[#6E40FF] text-center drop-shadow-2xl"
            >
              99
              <span className="text-5xl align-top">%</span>
            </h1>

            <p
              ref={el => rightTextsRef.current[2] = el}
              className="text-center text-3xl mt-[-20px] font-semibold tracking-wider"
            >
              Uptime
            </p>

            <p
              ref={el => rightTextsRef.current[3] = el}
              className="text-center mt-6 text-gray-300"
            >
              Deal Ends in
            </p>

            <div className="flex justify-center gap-4 mt-4">
              {[
                { label: "Days", value: time.days },
                { label: "Hrs", value: time.hrs },
                { label: "Mins", value: time.mins },
                { label: "Secs", value: time.secs },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={el => rightTextsRef.current[4 + i] = el}
                  className="bg-[#1A1D2E] px-5 py-4 rounded-xl border border-[#3C3F55] text-center"
                >
                  <div className="text-3xl font-bold">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase text-gray-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
