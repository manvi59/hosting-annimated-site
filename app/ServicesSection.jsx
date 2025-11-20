// export default function HostingServices() {
//   const services = [
//     {
//       name: "WordPress Hosting",
//       desc: "Optimized for speed with LiteSpeed Cache, 1-click WordPress install, auto-updates and strong security.",
//       icon: "📘",
//       tag: "Best for Blogs & Business Sites",
//     },
//     {
//       name: "Node.js Hosting",
//       desc: "Run modern JavaScript apps with full root access, NPM support, PM2 process manager & high performance.",
//       icon: "🟩",
//       tag: "Best for Developers",
//     },
//     {
//       name: "VPS Hosting",
//       desc: "Dedicated resources, full control, faster performance and complete isolation for serious growth.",
//       icon: "🖥️",
//       tag: "High Performance",
//     },
//     {
//       name: "Cloud Hosting",
//       desc: "Auto-scaling cloud environment for high traffic websites with 99.99% uptime and load balancing.",
//       icon: "☁️",
//       tag: "Enterprise Power",
//     },
//     {
//       name: "Shared Hosting",
//       desc: "Perfect for beginners with simple setup, free SSL, email hosting, backups and 24/7 support.",
//       icon: "🌐",
//       tag: "Beginner-Friendly",
//     },
//     {
//       name: "Dedicated CPU Servers",
//       desc: "High-end CPU power for maximum stability, performance and mission-critical workloads.",
//       icon: "🔥",
//       tag: "Ultra Performance",
//     },
//   ];

//   return (
//     <section className="py-24 bg-[#08011a] text-white">
//       <div className="max-w-7xl mx-auto px-6 md:px-12">
        
//         {/* Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold">
//             Hosting Solutions for Every Need
//           </h2>
//           <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
//             Choose the perfect hosting plan based on your platform, performance requirements and scalability.
//           </p>
//         </div>

//         {/* Service Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((item, index) => (
//             <div
//               key={index}
//               className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 shadow-xl hover:shadow-indigo-500/20 transition-all duration-300"
//             >
//               <div className="text-5xl mb-6">{item.icon}</div>

//               <h3 className="text-2xl font-semibold group-hover:text-indigo-400 transition">
//                 {item.name}
//               </h3>

//               <span className="text-xs mt-2 inline-block text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full">
//                 {item.tag}
//               </span>

//               <p className="text-gray-300 leading-relaxed mt-4">
//                 {item.desc}
//               </p>

//               {/* Button */}
//               <button className="mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm font-medium transition">
//                 Learn More →
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function HostingServices() {
  const services = [
    {
      title: "WordPress Hosting",
      desc: "Fast, secure, and optimized environment for WordPress sites with LiteSpeed and advanced cache.",
      iconBg: "from-purple-500/20 to-purple-300/30",
      icon: "📘"
    },
    {
      title: "Node.js Hosting",
      desc: "Deploy your Node.js apps instantly with NPM support, PM2 manager, and blazing performance.",
      iconBg: "from-green-500/20 to-green-300/30",
      icon: "🟩"
    },
    {
      title: "VPS Hosting",
      desc: "Dedicated CPU, RAM, and SSD resources designed for maximum stability and growth.",
      iconBg: "from-blue-500/20 to-blue-300/30",
      icon: "🖥️"
    },
    {
      title: "Cloud Hosting",
      desc: "Auto-scaling cloud setup with 99.99% uptime, redundancy, and load balancing.",
      iconBg: "from-sky-400/20 to-sky-200/30",
      icon: "☁️"
    },
    {
      title: "Shared Hosting",
      desc: "Affordable and beginner-friendly hosting with free SSL, email, backups & 24/7 support.",
      iconBg: "from-orange-500/20 to-orange-300/30",
      icon: "🌐"
    },
    {
      title: "Dedicated CPU Servers",
      desc: "Enterprise-grade hardware for extreme workloads, backed by full root access.",
      iconBg: "from-red-500/20 to-red-300/30",
      icon: "🔥"
    }
  ];

  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Powerful Hosting Services for Everyone
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect hosting solution tailored for your website, application, or business growth.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white rounded-3xl p-8 shadow-sm
                hover:shadow-xl transition-all duration-300
                border border-gray-200
                hover:-translate-y-1
              "
            >
              
              {/* Icon */}
              <div
                className={`
                  h-14 w-14 flex items-center justify-center rounded-2xl
                  bg-gradient-to-br ${service.iconBg}
                  text-3xl
                `}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.desc}
              </p>

              <button className="mt-6 text-indigo-600 hover:text-indigo-700 font-medium">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
