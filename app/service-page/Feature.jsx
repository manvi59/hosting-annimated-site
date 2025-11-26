// "use client";
// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Feature() {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       cardsRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1.2,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: cardsRef.current[0],
//           start: "top 80%",
//         },
//       }
//     );
//   }, []);

//   const services = [
//     {
//       title: "Cloud Hosting",
//       description: "Secure, lightning-fast cloud servers for any business scale.",
//       icon: "/cloud.svg",
//       gradient: "from-purple-500 to-blue-500",
//     },
//     {
//       title: "Dedicated Servers",
//       description: "High performance dedicated servers fully optimized for uptime.",
//       icon: "/server.svg",
//       gradient: "from-pink-500 to-purple-500",
//     },
//     {
//       title: "Managed Services",
//       description: "24/7 expert support and maintenance, keeping your apps live.",
//       icon: "/support.svg",
//       gradient: "from-yellow-400 to-orange-400",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#0D0F1A] text-white py-24 px-6 md:px-24 relative overflow-hidden">
//       <div className="text-center mb-16">
//         <p className="text-[#9CA3AF] text-lg mb-2">Our Expertise</p>
//         <h2 className="text-4xl md:text-5xl font-extrabold">
//           Services That Power Your Business
//         </h2>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//         {services.map((service, i) => (
//           <div
//             key={i}
//             ref={(el) => (cardsRef.current[i] = el)}
//             className="bg-[#111425]/80 backdrop-blur-xl p-8 rounded-3xl text-center shadow-[0_0_50px_#5B4BFF30] border border-[#7A55FF40] transition-transform hover:scale-105 hover:shadow-[0_0_80px_#5B4BFF50] duration-300"
//           >
//             <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
//               <img src={service.icon} className="w-8 h-8" alt={service.title} />
//             </div>
//             <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
//             <p className="text-gray-300">{service.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Background Floating Orbs */}
//       <div className="absolute top-[-150px] left-[-100px] w-72 h-72 bg-purple-600 opacity-30 rounded-full blur-[150px] animate-float"></div>
//       <div className="absolute bottom-[-150px] right-[-100px] w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-[200px] animate-float-slow"></div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }
//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-float-slow {
//           animation: float-slow 6s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Feature() {
//   const featureRefs = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(
//       featureRefs.current,
//       { opacity: 0, x: -50 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         stagger: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: featureRefs.current[0],
//           start: "top 85%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-24">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-20">
//         Our Premium Services
//       </h2>

//       <div className="relative flex flex-col items-start gap-16">
//         {/* Vertical timeline line */}
//         <div className="absolute left-10 md:left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200"></div>

//         {/* Feature 1 */}
//         <div
//           ref={(el) => (featureRefs.current[0] = el)}
//           className="relative flex items-start md:items-center gap-8"
//         >
//           <div className="flex flex-col items-center">
//             <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
//               1
//             </div>
//             <div className="w-1 h-full bg-gray-200 hidden md:block"></div>
//           </div>
//           <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-2/3 hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               Lightning Fast Hosting
//             </h3>
//             <p className="text-gray-600">
//               Ultra-fast servers and optimized cloud infrastructure for your business.
//             </p>
//           </div>
//         </div>

//         {/* Feature 2 */}
//         <div
//           ref={(el) => (featureRefs.current[1] = el)}
//           className="relative flex items-start md:items-center gap-8"
//         >
//           <div className="flex flex-col items-center">
//             <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
//               2
//             </div>
//             <div className="w-1 h-full bg-gray-200 hidden md:block"></div>
//           </div>
//           <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-2/3 hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               Enterprise Security
//             </h3>
//             <p className="text-gray-600">
//               Protect your data with top-tier security protocols and continuous monitoring.
//             </p>
//           </div>
//         </div>

//         {/* Feature 3 */}
//         <div
//           ref={(el) => (featureRefs.current[2] = el)}
//           className="relative flex items-start md:items-center gap-8"
//         >
//           <div className="flex flex-col items-center">
//             <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
//               3
//             </div>
//             <div className="w-1 h-full bg-gray-200 hidden md:block"></div>
//           </div>
//           <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-2/3 hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               24/7 Expert Support
//             </h3>
//             <p className="text-gray-600">
//               Get professional assistance anytime with our dedicated support team.
//             </p>
//           </div>
//         </div>

//         {/* Feature 4 */}
//         <div
//           ref={(el) => (featureRefs.current[3] = el)}
//           className="relative flex items-start md:items-center gap-8"
//         >
//           <div className="flex flex-col items-center">
//             <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg">
//               4
//             </div>
//           </div>
//           <div className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-lg w-full md:w-2/3 hover:scale-105 transition-all duration-300">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-2">
//               Global Infrastructure
//             </h3>
//             <p className="text-gray-600">
//               Serve your customers globally with our distributed, high-performance servers.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Floating Gradient Orbs for Style */}
//       <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 opacity-20 rounded-full blur-[120px] animate-float"></div>
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-100 opacity-20 rounded-full blur-[160px] animate-float-slow"></div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         @keyframes float-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float-slow {
//           animation: float-slow 8s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// }


// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function ZigZagFeatures() {
//   const featureRefs = useRef([]);

//   useEffect(() => {
//     featureRefs.current.forEach((el, index) => {
//       gsap.fromTo(
//         el,
//         { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 80%",
//           },
//         }
//       );
//     });
//   }, []);

//   const features = [
//     {
//       title: "Lightning Fast Hosting",
//       desc: "Ultra-fast servers and optimized cloud infrastructure for your business.",
//       color: "bg-blue-500",
//     },
//     {
//       title: "Enterprise Security",
//       desc: "Protect your data with top-tier security protocols and continuous monitoring.",
//       color: "bg-pink-500",
//     },
//     {
//       title: "24/7 Expert Support",
//       desc: "Get professional assistance anytime with our dedicated support team.",
//       color: "bg-green-500",
//     },
//     {
//       title: "Global Infrastructure",
//       desc: "Serve your customers globally with our distributed, high-performance servers.",
//       color: "bg-yellow-500",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-white py-24 px-6 md:px-24">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-20">
//         Our Key Services
//       </h2>

//       <div className="relative flex flex-col items-center">
//         {/* Vertical line */}
//         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

//         {features.map((feature, i) => (
//           <div
//             key={i}
//             ref={(el) => (featureRefs.current[i] = el)}
//             className={`w-full flex ${
//               i % 2 === 0 ? "justify-start md:justify-end" : "justify-end md:justify-start"
//             } relative mb-24`}
//           >
//             {/* Connector circle */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-900 z-10"></div>

//             <div
//               className={`max-w-sm bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8 hover:scale-105 transition-transform duration-300 ${
//                 i % 2 === 0 ? "md:mr-12" : "md:ml-12"
//               }`}
//             >
//               <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center text-white font-bold mb-4`}>
//                 {i + 1}
//               </div>
//               <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Decorative gradient orbs */}
//       <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100 opacity-20 rounded-full blur-[120px] animate-float"></div>
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-100 opacity-20 rounded-full blur-[160px] animate-float-slow"></div>

//       <style jsx>{`
//         @keyframes float {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-15px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         @keyframes float-slow {
//           0%,100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
//         .animate-float-slow {
//           animation: float-slow 8s ease-in-out infinite;
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

export default function ZigZagFeatures() {
  const featureRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate each feature
    featureRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });

    // Animate vertical line drawing
    const line = lineRef.current;
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "power1.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: line,
          start: "top 90%",
        },
      }
    );
  }, []);

  const features = [
    {
      title: "Lightning Fast Hosting",
      desc: "Ultra-fast servers and optimized cloud infrastructure for your business.",
      color: "bg-blue-500",
    },
    {
      title: "Enterprise Security",
      desc: "Protect your data with top-tier security protocols and continuous monitoring.",
      color: "bg-pink-500",
    },
    {
      title: "24/7 Expert Support",
      desc: "Get professional assistance anytime with our dedicated support team.",
      color: "bg-green-500",
    },
    {
      title: "Global Infrastructure",
      desc: "Serve your customers globally with our distributed, high-performance servers.",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-20">
        Our Key Services
      </h2>

      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full scale-y-0"
        ></div>

        {features.map((feature, i) => (
          <div
            key={i}
            ref={(el) => (featureRefs.current[i] = el)}
            className={`w-full flex ${
              i % 2 === 0 ? "justify-start md:justify-end" : "justify-end md:justify-start"
            } relative mb-24`}
          >
            {/* Connector circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gray-900 z-10"></div>

            <div
              className={`max-w-sm bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8 hover:scale-105 transition-transform duration-300 ${
                i % 2 === 0 ? "md:mr-12" : "md:ml-12"
              }`}
            >
              <div
                className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center text-white font-bold mb-4`}
              >
                {i + 1}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-100 opacity-20 rounded-full blur-[120px] animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-100 opacity-20 rounded-full blur-[160px] animate-float-slow"></div>

      <style jsx>{`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
