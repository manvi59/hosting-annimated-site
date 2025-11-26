// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Hero() {
//   const titleRef = useRef(null);
//   const gradientRef = useRef(null);
//   const textRef = useRef(null);
//   const btnRef = useRef(null);
//   const orbLeftRef = useRef(null);
//   const orbRightRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ delay: 0.2 });

//     // Heading animation
//     tl.fromTo(
//       titleRef.current,
//       { y: 40, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
//     );

//     // Gradient text animation
//     tl.fromTo(
//       gradientRef.current,
//       { y: 40, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
//       "-=0.8"
//     );

//     // Paragraph
//     tl.fromTo(
//       textRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
//       "-=0.8"
//     );

//     // Buttons
//     tl.fromTo(
//       btnRef.current.children,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//       },
//       "-=0.6"
//     );

//     // Floating Orbs GSAP Enhancement
//     gsap.to(orbLeftRef.current, {
//       y: 40,
//       duration: 6,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     });

//     gsap.to(orbRightRef.current, {
//       y: -40,
//       duration: 7,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//     });
//   }, []);

//   return (
//     <section className="relative w-full h-[650px] flex items-center justify-center overflow-hidden bg-[#0a0a0f] text-white">

//       {/* GLOWING GRADIENT ORBS */}
//       <div
//         ref={orbLeftRef}
//         className="absolute top-[-150px] left-[-150px] w-[380px] h-[380px] bg-purple-600 blur-[180px] opacity-50 rounded-full animate-pulse"
//       ></div>

//       <div
//         ref={orbRightRef}
//         className="absolute bottom-[-180px] right-[-150px] w-[420px] h-[420px] bg-blue-500 blur-[200px] opacity-40 rounded-full animate-pulse-slow"
//       ></div>

//       {/* CENTER CONTENT */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
//         <h1
//           ref={titleRef}
//           className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
//         >
//           Powering the Future of  
//         </h1>

//         <h1
//           ref={gradientRef}
//           className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
//         >
//           <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
//             Cloud Computing
//           </span>
//         </h1>

//         <p
//           ref={textRef}
//           className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
//         >
//           Lightning-fast hosting, 99.99% uptime, enterprise-grade security and
//           fully optimized performance.
//         </p>

//         {/* BUTTONS */}
//         <div
//           ref={btnRef}
//           className="mt-10 flex items-center justify-center gap-6"
//         >
//           <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all shadow-lg shadow-blue-600/30">
//             Get Started
//           </button>

//           <button className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 transition-all">
//             Explore Plans
//           </button>
//         </div>
//       </div>

//       {/* FLOATING LINES */}
//       <div className="absolute inset-0 pointer-events-none opacity-20">
//         <div className="absolute top-32 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-slow-move"></div>
//         <div className="absolute bottom-32 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-slow-move-reverse"></div>
//       </div>

//       {/* CUSTOM ANIMATIONS */}
//       <style jsx>{`
//         .animate-pulse-slow {
//           animation: pulse 6s ease-in-out infinite;
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.35; }
//           50% { opacity: 0.6; }
//         }

//         .animate-slow-move {
//           animation: lineMove 6s linear infinite;
//         }
//         .animate-slow-move-reverse {
//           animation: lineMoveReverse 8s linear infinite;
//         }

//         @keyframes lineMove {
//           0% { transform: translateX(-20px); }
//           100% { transform: translateX(20px); }
//         }
//         @keyframes lineMoveReverse {
//           0% { transform: translateX(20px); }
//           100% { transform: translateX(-20px); }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const paraRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // TEXT sliding from right to left
      gsap.fromTo(
        titleRef.current,
        { x: 180, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        spanRef.current,
        { x: 200, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        paraRef.current,
        { x: 220, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        btnRef.current,
        { x: 250, opacity: 1 },
        {
          x: 0,
          opacity: 1,
          duration: 2.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart none none reset",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[650px] flex items-center justify-center overflow-hidden bg-[#0a0a0f] text-white"
    >
      {/* GLOWING ORBS */}
      <div className="absolute top-[-150px] left-[-150px] w-[380px] h-[380px] bg-purple-600 blur-[180px] opacity-50 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-180px] right-[-150px] w-[420px] h-[420px] bg-blue-500 blur-[200px] opacity-40 rounded-full animate-pulse-slow"></div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Powering the Future of  
        </h1>

        <h1
          ref={spanRef}
          className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent text-4xl md:text-6xl font-extrabold"
        >
          Cloud Computing
        </h1>

        <p
          ref={paraRef}
          className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Lightning-fast hosting, 99.99% uptime, enterprise-grade security and fully optimized performance.
        </p>

        {/* BUTTONS */}
        <div
          ref={btnRef}
          className="mt-10 flex items-center justify-center gap-6"
        >
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:scale-105 transition-all shadow-lg shadow-blue-600/30">
            Get Started
          </button>

          <button className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 hover:bg-white/10 transition-all">
            Explore Plans
          </button>
        </div>
      </div>

      {/* FLOATING LINES */}
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
  );
}
