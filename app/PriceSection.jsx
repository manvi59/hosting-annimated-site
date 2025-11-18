"use client";

import { useEffect } from "react";

export default function PriceSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".stack-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = [...items].indexOf(entry.target);

          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // make all previous items visible
            for (let i = 0; i < index; i++) {
              items[i].classList.add("active");
            }
          } else {
            entry.target.classList.remove("active");

            // hide all items after this
            for (let i = index; i < items.length; i++) {
              items[i].classList.remove("active");
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="stack-container">

      <div className="stack-item bg-pink-300">
        <div className="relative h-full w-full flex items-center justify-center bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">

  {/* Soft Gradient Background Shapes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-[140px] opacity-50"></div>
    <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-blue-300 rounded-full blur-[180px] opacity-60"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-10 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">

    {/* Text Content */}
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

    {/* Image */}
    <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
      <img
        src="https://img.freepik.com/free-vector/abstract-creative-website-hosting-illustration_23-2149227348.jpg"
        className="w-[420px] lg:w-[520px]  rounded-xl animate-float"
      />
    </div>

  </div>
</div>
      </div>
      <div className="stack-item bg-blue-300">
        <div className="relative h-full w-full flex items-center justify-center bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">

  {/* Decorative Gradient Shapes */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100 rounded-full blur-[160px] opacity-60"></div>
    <div className="absolute -bottom-20 left-10 w-[420px] h-[420px] bg-sky-200 rounded-full blur-[180px] opacity-50"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-10 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">

    {/* Text content */}
    <div className="max-w-xl">
      <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-[#0A1A44]">
        Ultra-Fast Cloud Hosting
      </h1>

      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        Enjoy blazing performance with NVMe cloud servers, top-tier caching,
        and global content delivery for unstoppable speed.
      </p>

      <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 transition-all rounded-xl text-white text-lg shadow-lg">
        Boost Performance
      </button>
    </div>

    {/* Image */}
    <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
      <img
        src="https://img.freepik.com/premium-vector/isometric-3d-flat-illustration-concept-store-data-folder-cloud-server_18660-4810.jpg"
        className="w-[430px] lg:w-[520px]  rounded-xl animate-float"
      />
    </div>

  </div>
</div>

      </div>
      <div className="stack-item bg-gray-400">
        <div className="relative h-full w-full flex items-center justify-center bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">

  {/* Background Shapes */}
  <div className="absolute inset-0">
    <div className="absolute -left-32 top-0 w-[400px] h-[400px] bg-blue-200 blur-[170px] opacity-40"></div>
    <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-300 blur-[170px] opacity-50"></div>
  </div>

  <div className="relative z-10 container mx-auto px-10 lg:px-20 py-20 flex flex-col lg:flex-row items-center justify-between">

    <div className="max-w-xl">
      <h1 className="text-5xl lg:text-6xl font-bold text-[#0A1A44] mb-6">
        Advanced Security
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Enjoy built-in DDoS protection, SSL, firewalls, and constant monitoring
        for full-scale hosting security.
      </p>

      <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg text-lg">
        Secure Your Website
      </button>
    </div>

    <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
      <img
        src="https://img.freepik.com/premium-vector/isometric-illustration-concept-analytics-cloud-server-data-security_18660-1710.jpg"
        className="w-[420px] lg:w-[500px] rounded-xl  animate-float"
      />
    </div>

  </div>
</div>

      </div>
      {/* <div className="stack-item bg-yellow-300">Fourth</div>
      <div className="stack-item bg-orange-400">Fifth</div> */}

    </section>
   


  );
}
