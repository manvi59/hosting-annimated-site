// "use client";

// import { useEffect, useState } from "react";

// export default function BlackFridayBanner() {
//   const [time, setTime] = useState({
//     days: "00",
//     hrs: "00",
//     mins: "00",
//     secs: "00",
//   });

//   useEffect(() => {
//     const target = new Date();
//     target.setDate(target.getDate() + 5);

//     const tick = () => {
//       const now = new Date();
//       const diff = target - now;

//       if (diff <= 0) return;

//       const d = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const m = Math.floor((diff / (1000 * 60)) % 60);
//       const s = Math.floor((diff / 1000) % 60);

//       setTime({
//         days: String(d).padStart(2, "0"),
//         hrs: String(h).padStart(2, "0"),
//         mins: String(m).padStart(2, "0"),
//         secs: String(s).padStart(2, "0"),
//       });
//     };

//     tick();
//     const timer = setInterval(tick, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="w-full bg-[#0D0F1A] text-white px-6 md:px-20 py-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

//         {/* LEFT SIDE */}
//         <div>
//           <p className="text-gray-400 text-lg mb-3">Web Hosting India</p>

//           <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
//             Get 80% Off + Free <br />
//             Domain + 3 Months Free
//           </h1>

//           <ul className="space-y-4 text-lg">
//             <li className="flex items-center gap-2">
//               <span className="text-green-500 text-xl">✔</span>
//               Launch your website in minutes
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-500 text-xl">✔</span>
//               Free migration with zero downtime
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="text-green-500 text-xl">✔</span>
//               Free SSL, email, and 24/7 expert support
//             </li>
//           </ul>

//           <p className="text-4xl font-bold mt-10">
//             ₹129.00 <span className="text-lg">/mo</span>
//           </p>

//           <p className="text-gray-300 mt-2">Offer ends soon</p>

//           <button className="mt-6 bg-gradient-to-r from-[#6E40FF] to-[#3BB0FF] hover:opacity-90 text-white px-8 py-3 rounded-full font-medium text-lg transition-all">
//             Claim offer now
//           </button>

//           <p className="text-gray-300 mt-4 flex items-center gap-2">
//             <span className="text-green-500 text-xl">✔</span>
//             30-day money-back guarantee
//           </p>
//         </div>

//         {/* RIGHT SIDE - FRAME + CARD */}
//         <div
//           className="flex items-center justify-center p-6"
//           style={{
//             backgroundImage:
//               "url('/884b10ad-b3b4-42fa-8bc3-ad980c2b4188.png')",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "contain",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* Neon Card */}
//           <div className="relative w-full max-w-[420px] bg-[#0F1420]/70 border border-[#7A55FF40] rounded-3xl p-10 shadow-[0_0_40px_#612BFF40] backdrop-blur-md">

//             <p className="text-center text-xl text-gray-200">
//               Black Friday <span className="text-pink-400">Sale</span>
//             </p>

//             <h1 className="text-[140px] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#9b7bff] text-center leading-[0.8] drop-shadow-2xl">
//               80<span className="text-5xl align-top">%</span>
//             </h1>

//             <p className="text-center text-3xl mt-[-20px] font-semibold tracking-wider">
//               OFF
//             </p>

//             <p className="text-center mt-6 text-gray-300">Deal Ends in</p>

//             {/* COUNTDOWN */}
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
//                   <div className="text-3xl font-bold">{item.value}</div>
//                   <div className="text-xs uppercase text-gray-400">{item.label}</div>
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

export default function BlackFridayCard() {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="
        relative rounded-[32px] p-10 
        bg-[#0b0f1c]/80 backdrop-blur-xl 
        w-[450px] h-[550px] 
        border-[3px]
        border-transparent 
        neon-border
      ">
        
        {/* Title */}
        <div className="text-center">
          <h2 className="text-white text-[32px] font-semibold">Black Friday</h2>
          <h3 className="text-pink-400 text-[36px] font-semibold">Sale</h3>
        </div>

        {/* 80% OFF */}
        <div className="mt-6 text-center">
          <h1 className="text-white text-[120px] leading-none font-bold">80%</h1>
          <p className="text-white text-[32px] -mt-4">OFF</p>
        </div>

        {/* Deal Ends */}
        <p className="text-gray-300 text-center text-lg mt-2">Deal Ends in</p>

        {/* Countdown Boxes */}
        <div className="mt-4 grid grid-cols-4 gap-3 px-4">
          {[
            { label: "Days", value: "09" },
            { label: "Hrs", value: "15" },
            { label: "Mins", value: "32" },
            { label: "Secs", value: "47" },
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#111525] rounded-xl text-center py-3 px-1"
            >
              <p className="text-white text-2xl font-semibold">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Glow */}
      <style jsx>{`
        .neon-border {
          box-shadow:
            0 0 20px rgba(0, 128, 255, 0.6),
            0 0 40px rgba(128, 0, 255, 0.6),
            inset 0 0 20px rgba(0, 128, 255, 0.3),
            inset 0 0 40px rgba(128, 0, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
