"use client";

import { useState } from "react";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonials = [
    {
      company: "Exceptional service",
      text: `“ have been using Domainz.in for over a year, and I must say, they have been absolutely fantastic!... "`,
      name: "Sam Ebanezar",
      role: "CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      company: "Great value ",
      text: `“eally Excellent service. Real-time support I am full satisfied with my domain and hosting services."`,
      name: "QandQ Coversindia",
      role: "CEO",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      company: "Awesome service ",
      text: `“Awesome service, support is excellent. The support team helped me in choosing the right plan"`,
      name: "Aditya Jangid",
      role: "CEO",
      img: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      company: "Excellent support",
      text: `“Its a great experience with Domainz.in, more appreciable part is customer support!"`,
      name: "Sumeet Dalal",
      role: "Director of Sales",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      company: "Ideal for business owners",
      text: `“Best support service 24/7 available on call,Happy with service,New plans r too good n ...."`,
      name: "Prachi sharma",
      role: "Co-founder & CTO",
      img: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#f9f9f9]">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Find your best design into us. We<br />
          guarantee next  <span className="text-indigo-600">
            success is yours!
            </span>
        </h2>
      </div>

      {/* Main Wrapper */}
      <div className="max-w-9xl mx-auto px-6 overflow-hidden relative">
        <div
          className="flex transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-full grid grid-cols-5 gap-8 p-10 bg-white rounded-xl shadow-sm"
            >
              {/* Rating section */}
              <div className="col-span-1 flex flex-col   items-center border-r pr-8">
                <h1 className="text-6xl font-bold text-gray-800">4.9</h1>
                <div className="flex gap-1 text-yellow-400 mt-3" style={{fontSize:"30px"}}>
                  {"★★★★★"}
                </div>
                <p className="text-gray-500 text-xl mt-2">200+ reviews</p>

                {/* Logos */}
                <div className="flex  space-y-4 mt-10 opacity-70">
                  <img src="https://img.freepik.com/premium-vector/hosting-technology-logo-symbol-icon-template_166742-6367.jpg" className="h-15" />
                  <img src="https://img.freepik.com/premium-vector/web-hosting-concept-2-colored-icon-simple-blue-element-illustration-web-hosting-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-4512.jpg" className="h-15" />
                  <img src="https://img.freepik.com/free-vector/logo-with-blue-orange-cloud_1071-109.jpg" className="h-15" />
                </div>
              </div>

              {/* Testimonial List */}
              <div className="col-span-4 grid grid-cols-4 gap-10">
                {testimonials.map((item, i) => (
                  <div key={i} className="col-span-1">
                    <p className="text-gray-600 text-sm mb-2">{item.company}</p>
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                      {item.text}
                    </p>

                    <div className="flex items-center gap-3 mt-6">
                      <img
                        src={item.img}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-bold text-gray-800">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                active === i ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => setActive(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function ElegantTestimonials() {
//   const testimonials = [
//     {
//       name: "Israq Khan",
//       role: "CEO, Kodezi",
//       text: "The team has been incredibly reliable and supportive. Their designs are elegant, modern, and always exceed expectations.",
//       img: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       name: "Nick Fisher",
//       role: "Founder, Tournated",
//       text: "Exceptionally smooth communication and top-tier creative quality. A premium experience from start to finish.",
//       img: "https://randomuser.me/api/portraits/men/45.jpg",
//     },
//     {
//       name: "Abraham Ajayi",
//       role: "CEO, ActiveSync",
//       text: "They brought our ideas to life with stunning precision. A perfect blend of creativity and professionalism.",
//       img: "https://randomuser.me/api/portraits/men/28.jpg",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-slate-50">
//       {/* Heading */}
//       <div className="text-center max-w-3xl mx-auto mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
//           What Our Clients Say
//         </h2>
//         <p className="text-slate-500 mt-4 text-lg">
//           Real experiences from people who trust our work.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
//         {testimonials.map((t, i) => (
//           <div
//             key={i}
//             className="p-8 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition-all duration-300 border border-slate-100"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <img
//                 src={t.img}
//                 className="w-14 h-14 rounded-full object-cover"
//               />
//               <div>
//                 <h4 className="font-semibold text-slate-800 text-lg">
//                   {t.name}
//                 </h4>
//                 <p className="text-slate-500 text-sm">{t.role}</p>
//               </div>
//             </div>

//             <p className="text-slate-600 leading-relaxed text-[15px]">
//               “{t.text}”
//             </p>

//             <div className="flex mt-6 text-yellow-400">
//               {"★★★★★"}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
