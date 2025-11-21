// "use client";

// import Image from "next/image";

// export default function DedicatedServerSection() {
//   return (
//     <section className="w-full bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

//         {/* LEFT SIDE */}
//         <div>
//           <p className="text-gray-500 text-xl">
//             Up to <span className="text-blue-600 font-semibold">21%</span> off Dedicated Server India
//           </p>

//           <h1 className="text-5xl font-bold leading-tight mt-4 text-gray-900">
//             Your Own Powerful <br />
//             Dedicated Server
//           </h1>

//           {/* Feature List */}
//           <ul className="space-y-4 mt-8 text-lg text-gray-700">
//             <li className="flex items-center gap-3">
//               <span className="text-green-600 text-2xl">✔</span>
//               Choose your ideal OS
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="text-green-600 text-2xl">✔</span>
//               Instant server delivery
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="text-green-600 text-2xl">✔</span>
//               Tier–4 data center infrastructure
//             </li>
//           </ul>

//           {/* Price */}
//           <p className="text-5xl font-bold mt-10">₹4,999.00 <span className="text-lg font-normal">/mo</span></p>
//           <p className="text-gray-500 mt-3 text-lg">Offer ends soon</p>

//           {/* Buttons */}
//           <div className="flex gap-4 mt-8">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xl px-10 py-4 rounded-xl shadow-md transition">
//               Start now
//             </button>
//             <button className="border border-gray-300 hover:bg-gray-100 text-gray-900 font-medium text-xl px-10 py-4 rounded-xl transition">
//               Free Trial
//             </button>
//           </div>

//           {/* Money-back guarantee */}
//           <div className="flex items-center gap-2 text-gray-600 mt-6 text-lg">
//             <span className="text-green-600 text-2xl">✔</span>
//             7-day money-back guarantee
//           </div>

//           {/* WhatsApp Floating */}
//           <div className="fixed bottom-7 left-7">
//             <Image
//               src="/whatsapp.png"
//               width={65}
//               height={65}
//               alt="WhatsApp"
//               className="cursor-pointer drop-shadow-xl"
//             />
//           </div>
//         </div>

//         {/* RIGHT SIDE — BIG CARD */}
//         <div className="bg-[#F8FBFF] rounded-3xl shadow-xl border border-[#E2ECF5] p-10">

//           {/* OS & Control Panel */}
//           <div className="bg-white rounded-2xl shadow-md p-6 mb-10 flex justify-between items-center">
//             <p className="font-semibold text-gray-700 text-lg">
//               Operating systems and control panel
//             </p>

//             {/* Icons */}
//             <Image src="/os-icons.png" alt="icons" width={280} height={90} />
//           </div>

//           {/* Top Feature Icons */}
//           <div className="grid grid-cols-3 gap-10 text-center">

//             <div>
//               <Image src="/enterprise.png" width={45} height={45} alt="icon" className="mx-auto"/>
//               <p className="mt-3 font-medium text-gray-800">Enterprise–<br />Grade Hardware</p>
//             </div>

//             <div>
//               <Image src="/network.png" width={45} height={45} alt="icon" className="mx-auto"/>
//               <p className="mt-3 font-medium text-gray-800">High-Speed<br />Network</p>
//             </div>

//             <div>
//               <Image src="/cpu.png" width={45} height={45} alt="icon" className="mx-auto"/>
//               <p className="mt-3 font-medium text-gray-800">Powerful CPU<br />& RAM</p>
//             </div>

//           </div>

//           {/* Mid Icons */}
//           <div className="grid grid-cols-2 gap-10 mt-12 text-center">
//             <div>
//               <Image src="/stack.png" width={45} height={45} alt="" className="mx-auto"/>
//               <p className="mt-3 font-medium text-gray-800">Custom Stack<br />Deployment</p>
//             </div>
//             <div>
//               <Image src="/secure.png" width={45} height={45} alt="" className="mx-auto"/>
//               <p className="mt-3 font-medium text-gray-800">Secure Data<br />Isolation</p>
//             </div>
//           </div>

//           {/* Docker Section */}
//           <div className="bg-[#EFF6FE] rounded-2xl p-8 mt-12 flex items-center gap-6">
//             <Image src="/docker.png" width={45} height={45} alt="docker"/>
//             <p className="font-semibold text-gray-800 text-lg">
//               Docker and Kubernetes Ready
//             </p>
//           </div>

//           {/* Data Center Image */}
//           <div className="bg-white rounded-3xl shadow-lg mt-10 p-6 text-center">
//             <Image src="/datacenter.jpg" width={450} height={250} alt="datacenter" className="rounded-xl mx-auto"/>
//             <p className="mt-4 text-gray-700 font-medium">
//               Data Center : <span className="ml-2">🇮🇳 India</span>
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect } from "react";

export default function DedicatedHero() {
  // small entrance animation trigger (adds class after mount)
  useEffect(() => {
    const el = document.querySelectorAll(".enter-fade");
    el.forEach((node, i) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(18px)";
      setTimeout(() => {
        node.style.transition = "opacity 600ms ease, transform 600ms ease";
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
      }, 120 * i);
    });
  }, []);

  const features = [
    { title: "Enterprise-Grade Hardware", icon: IconChip },
    { title: "High-Speed Network", icon: IconNetwork },
    { title: "Powerful CPU & RAM", icon: IconCpu },
    { title: "Custom Stack Deployment", icon: IconStack },
    { title: "Secure Data Isolation", icon: IconShield },
    { title: "Docker & Kubernetes Ready", icon: IconDocker },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT COLUMN */}
        <div className="enter-fade">
          <p className="text-md text-sky-600 font-medium mb-3">Up to <span className="text-blue-600 font-semibold">21% off</span> Dedicated Server India</p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Your Own Powerful <br /> Dedicated Server
          </h2>

          <ul className="space-y-4 text-lg text-slate-700 mb-8">
            <li className="flex items-center gap-3">
              <CheckDot /> <span className="underline decoration-dotted">Choose your ideal OS</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckDot /> Instant server delivery
            </li>
            <li className="flex items-center gap-3">
              <CheckDot /> Tier-4 data center infrastructure
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-end sm:gap-6 gap-4">
            <div className="mr-auto">
              <div className="text-5xl md:text-6xl font-semibold leading-none">₹4,999.00</div>
              <div className="text-sm text-slate-500 mt-1">/mo</div>
            </div>

            <div className="flex gap-3 items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition">
                Start now
              </button>
              <button className="border border-slate-300 text-slate-800 px-5 py-3 rounded-lg hover:shadow-sm transition">
                Free Trial
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
            <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>7-day money-back guarantee</span>
          </div>
        </div>

        {/* RIGHT COLUMN (Framed card with features + small image card) */}
        <div className="enter-fade relative  ">
          {/* Outer framed container */}
          <div className="relative rounded-2xl border border-slate-200/50 bg-white shadow-lg p-8 overflow-visible powerful-border" style={{border:"1px solid lightblue"}}>
            {/* top badge / OS row */}
            <div className="absolute -top-5 left-6 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm text-sm flex items-center gap-3">
              <span className="text-slate-500">Operating systems and control panel</span>
              <div className="flex items-center gap-2 ">
                {/* tiny OS icons (simple colored circles for demo) */}
                <span className="w-6 h-6 rounded-full " > 
                    <img src="  https://cdn-icons-png.flaticon.com/512/6124/6124995.png " height={100} width={100} />
                </span>
                <span className="w-6 h-6 rounded-full " >
                    <img src="   https://cdn-icons-png.flaticon.com/512/888/888882.png " height={100} width={100}/>
                    </span>
                <span className="w-6 h-6 rounded-full " >
                                        <img src="  https://cdn-icons-png.flaticon.com/512/2374/2374611.png " height={100} width={100}/>

                    </span>
                    
                <span className="w-6 h-6 rounded-full " >
                   <img src="   https://cdn-icons-png.flaticon.com/512/1216/1216931.png " height={100} width={100}/>

                    </span>

              </div>
            </div>

            {/* features grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition">
                  <div className="flex-none w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center">
                    <f.icon className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">{f.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">High performance & reliability</p>
                  </div>
                </div>
              ))}
            </div>

            {/* divider and lower area */}
            <div className="mt-6 border-t border-slate-100 pt-6 flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 text-sm text-slate-600">
                <div className="inline-flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-sky-500" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18"/></svg>
                  <span className="font-medium text-slate-800">Docker and Kubernetes Ready</span>
                </div>
                <div className="text-xs text-slate-500">Deploy containers & scale instantly</div>
              </div>

              {/* small image card - bottom right */}
              <div className=" bg-white   overflow-hidden border border-slate-100 flex items-center content-center">
                <div className="w-20  overflow-hidden">
                  {/* using uploaded image path */}
                  <img
                    src="   https://cdn-icons-png.flaticon.com/512/14009/14009677.png "
                    alt="Data center"
                    className="w-13 h-13 object-cover"
                  />
                </div>
                <div className=" ">
                  <div className="text-xs text-slate-500">Data Center : India</div>
                  {/* <div className="text-sm font-semibold flex items-center gap-2 mt-1">
                    <span className="w-5 h-3 inline-block bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 rounded-sm" style={{ backgroundImage: "linear-gradient(90deg,#FFB86B,#2AC768)" }} />
                    India
                  </div> */}
                </div>
              </div>
            </div>

            {/* subtle right frame accent */}
            <div className="pointer-events-none absolute -right-6 -bottom-6 w-56 h-56 rounded-2xl border border-slate-200/30 opacity-60 transform rotate-3 blur-[6px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- tiny inline SVG components ---------- */

function CheckDot() {
  return (
    <svg className="w-5 h-5 text-green-500 flex-none" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChip({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/><rect x="7" y="7" width="10" height="10" rx="1" fill="currentColor"/></svg>
  );
}
function IconNetwork({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M4 12h16M8 6h8M8 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconCpu({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"><rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconStack({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 13l9-4 9 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 19l9-4 9 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconShield({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M12 2l7 3v5c0 5-3.5 9-7 10-3.5-1-7-5-7-10V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
function IconDocker({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"><path d="M3 12h18M6 8h2M9 8h2M12 8h2M6 11h3M10 11h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}
