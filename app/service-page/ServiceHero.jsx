// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ServiceHero() {
//   const leftRef = useRef(null);
//   const rightRef = useRef(null);

// //   useEffect(() => {
// //     // LEFT CONTENT ANIMATION
// //     gsap.from(leftRef.current, {
// //       opacity: 0,
// //       y: 50,
// //       duration: 1.5,
// //       ease: "power3.out",
// //       scrollTrigger: {
// //         trigger: leftRef.current,
// //         start: "top 80%",
// //       },
// //     });

// //     // RIGHT IMAGE ANIMATION
// //     gsap.from(rightRef.current, {
// //       opacity: 0,
// //       x: 80,
// //       duration: 1.5,
// //       ease: "power3.out",
// //       scrollTrigger: {
// //         trigger: rightRef.current,
// //         start: "top 80%",
// //       },
// //     });
// //   }, []);

//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 px-6 md:px-24 py-24">
      
//       {/* Floating background orbs */}
//       <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-purple-400 opacity-30 blur-[180px] animate-pulse-slow"></div>
//       <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full bg-blue-300 opacity-30 blur-[220px] animate-pulse-slow"></div>

//       <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <div ref={leftRef} className="space-y-6">
//           {/* Badge */}
//           <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full mb-6 border border-white/30 animate-fadeUpSlow">
//             <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
//             <p className="text-sm text-white font-medium">Available for New Projects</p>
//           </div>

//           {/* Hero Heading */}
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
//             {/* Dedicated Servers <br /> */}
//             High Performance <br />
//             {/* <span className="bg-gradient-to-r from-yellow-200 via-white to-pink-300 bg-clip-text text-transparent">
//               For Global Scale
//             </span> */}
//           </h1>

//           {/* Subtext */}
//           <p className="text-lg md:text-xl text-white/80 max-w-xl">
//             Ultra-fast servers, guaranteed uptime, and global reach. Elevate your infrastructure with enterprise-grade performance and security.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-6 mt-6">
//             <button className="bg-black hover:bg-white hover:text-black transition-all duration-300 text-white px-10 py-4 rounded-full text-xl shadow-lg">
//               Book a Call
//             </button>

//             <button className="bg-white hover:bg-gray-200 border px-10 py-4 rounded-full text-xl flex items-center gap-3 shadow-lg transition-all duration-300">
//               <img src="/server.jpg" className="w-10 h-10 animate-float" />
//               View Work
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div ref={rightRef} className="relative mt-16 md:mt-0 flex justify-center items-center">
//           <img
//             src="/server-room.png"
//             alt="Server Room"
//             className="w-full max-w-[500px] h-auto "
//           />
//         </div>

//       </div>

//       {/* Custom animations */}
//       <style jsx>{`
//         .animate-pulse-slow {
//           animation: pulseSlow 6s ease-in-out infinite;
//         }
//         @keyframes pulseSlow {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.6; }
//         }

//         .animate-fadeUpSlow {
//           opacity: 0;
//           transform: translateY(20px);
//           animation: fadeUp 1.5s forwards;
//         }

//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite alternate;
//         }

//         @keyframes float {
//           0% { transform: translateY(0px); }
//           100% { transform: translateY(-20px); }
//         }
//       `}</style>

//     </section>
//   );
// }

"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceHero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left text animation
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

    // Right text / heading animation
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full bg-[#0D0F1A] text-white px-6 md:px-24 pb-24 pt-24 relative overflow-hidden">
      
      {/* Floating Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-purple-600 blur-[150px] opacity-40 rounded-full animate-float"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-blue-500 blur-[180px] opacity-30 rounded-full animate-float-slow"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT SIDE — INTRO TEXT */}
        <div ref={leftRef} className="space-y-6">
          <p className="text-[#9CA3AF] text-lg mb-3">Our Services</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Cloud Hosting & <br />
            Dedicated Servers <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Optimized for Performance
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg">
            High-speed hosting solutions with 99.99% uptime, enterprise-grade
            security, and fully optimized infrastructure for global reach.
          </p>

          <div className="flex flex-wrap gap-6 mt-6">
            <button className="bg-[#5B4BFF] hover:bg-[#6A5CFF] text-white px-10 py-4 rounded-full font-medium text-lg shadow-lg transition-all duration-300">
              Explore Services
            </button>

            <button className="bg-white hover:bg-gray-200 border px-10 py-4 rounded-full text-lg text-black transition-all duration-300">
              Book a Consultation
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — SERVICE IMAGE */}
        <div ref={rightRef} className="relative mt-16 md:mt-0 flex justify-center">
          <div className="w-full max-w-[500px] h-auto rounded-3xl shadow-[0_0_50px_#5B4BFF30] border border-[#7A55FF40] backdrop-blur-xl bg-[#0b0f1c]/80 p-6">
            <img
              src="https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg"
              alt="Service Illustration"
              className="w-full h-auto rounded-2xl animate-float"
            />
          </div>
        </div>

      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
