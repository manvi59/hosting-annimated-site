"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";



// const faqs = [
//   {
//     q: "What is Linux web hosting?",
//     a: "Linux web hosting can be simply described as a way of hosting any website on a service that uses the Linux operating system on the server. It is widely used for its open-source nature, extreme security measures, and flexibility."
//   },
//   {
//     q: "What is cPanel?",
//     a: "cPanel is a web hosting control panel that makes managing websites easy. Most Linux-based web hosting providers support cPanel."
//   },
//   {
//     q: "What is SSL?",
//     a: "SSL is a technology that secures an internet connection by encrypting data exchanged between a website and a browser."
//   },
//   {
//     q: "What is FTP?",
//     a: "FTP stands for File Transfer Protocol. It is used to transfer files to the server efficiently, saving time and effort."
//   },
//   {
//     q: "Can I use WordPress or other popular CMS with Linux hosting?",
//     a: "Yes, Linux web hosting is fully compatible with popular CMS platforms such as WordPress, Joomla, and Drupal."
//   },
//   {
//     q: "What is MySQL?",
//     a: "MySQL is an open-source database management system commonly used with Linux web hosting. It helps manage website-related data."
//   },
//   {
//     q: "Which is the best Linux web hosting elements?",
//     a: "Important factors include reliability (good uptime), responsive customer support, and essential features such as cPanel, MySQL, and SSL."
//   }
// ];

const faqs = [
   
  {
    q: "What is the difference between  VPS, dedicated hosting?",
    a: "Shared hosting is budget-friendly and shares resources with other users, VPS hosting offers dedicated virtual resources, and dedicated hosting provides an entire physical server for maximum performance."
  },
  {
    q: "Is Linux hosting suitable for beginners?",
    a: "Yes, Linux hosting is beginner-friendly, especially with control panels like cPanel or DirectAdmin, making website management simple and intuitive."
  },
  {
    q: "Do you provide free SSL certificates?",
    a: "Yes, we offer free SSL certificates on all hosting plans to ensure your website's data remains encrypted and secure."
  },
  {
    q: "Will my hosting support WordPress or other CMS platforms?",
    a: "Absolutely. Our hosting is fully compatible with WordPress, Joomla, Drupal, and most popular CMS platforms."
  },
   
  
];



export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* HEADING */}
        <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Frequently asked <br /> 
           <span className="text-indigo-600">

          questions
           </span>
        </h2>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT FAQ LIST */}
          <div className="col-span-2 space-y-10">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b pb-8 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-medium text-gray-900">
                    {item.q}
                  </h3>
                  {open === i ? (
                    <ChevronUp className="h-6 w-6 text-black" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-black" />
                  )}
                </div>

                <div
                  className={`mt-6 text-gray-700 leading-relaxed transition-all duration-300 ${
                    open === i ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT CEO SIDEBAR */}
          <div className="bg-[#0f0f0f] text-white p-10 rounded-2xl shadow-xl sticky top-28">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              className="w-20 h-20 rounded-xl object-cover mb-6"
            />

            <h3 className="text-2xl font-semibold">
              Hi, I'm Shahid, the CEO and Founder
            </h3>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Don’t hesitate to reach out — I’m here to answer all your questions anytime.
            </p>

            <div className="mt-8 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md">
              Certified Partner
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
