"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What are your focus areas as a UI/UX design agency?",
    a: "We focus on creating visually stunning digital experiences that improve business growth, build trust, and unlock a great user experience.",
  },
  {
    q: "Why is UI/UX design important for your business growth?",
    a: "Good UI/UX isn't just about making things pretty. It's about creating an experience that keeps your users happy, builds trust, and helps your business grow.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take 2–6 weeks depending on complexity, revisions, and feedback cycles.",
  },
  {
    q: "Do you work with startups?",
    a: "Yes! We’ve worked with startups, SaaS companies, enterprises, and tech-focused businesses globally.",
  }
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* HEADING */}
        <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
          Frequently asked <br /> questions
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
