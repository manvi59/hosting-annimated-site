"use client";

export default function BlogPage() {
  const posts = [
    {
      title: "Top 10 Tips to Speed Up Your Website in 2025",
      desc: "Learn how to boost performance, reduce load time, and improve SEO ranking using these real-world hosting optimizations.",
      image:
        "https://res.cloudinary.com/dp1chlgql/image/upload/v1678963590/blog-hosting-1.jpg",
      date: "Nov 2025",
    },
    {
      title: "Shared vs VPS vs Cloud Hosting – What Should You Choose?",
      desc: "A full comparison for beginners and professionals to pick the best server based on performance, price, and scalability.",
      image:
        "https://res.cloudinary.com/dp1chlgql/image/upload/v1678963590/blog-hosting-3.jpg",
      date: "Oct 2025",
    },
    {
      title: "How to Secure Your Website from Hackers (2025 Guide)",
      desc: "SSL, malware scan, DDoS prevention, WAF rules — complete cybersecurity checklist for your hosting.",
      image:
        "https://res.cloudinary.com/dp1chlgql/image/upload/v1678963590/blog-hosting-2.jpg",
      date: "Sep 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white py-24 px-4 md:px-12">

      {/* HERO */}
      <div className="relative max-w-5xl mx-auto text-center mb-20">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-600/20 blur-[180px] rounded-full"></div>

        <h1 className="relative text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-2xl">
          Hosting Insights & Expert Guides
        </h1>

        <p className="relative mt-5 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Stay updated with the latest trends in hosting, servers, cloud technologies,
          security, website performance optimization, and more.
        </p>

        <div className="relative mt-8 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search blog articles..."
            className="w-full py-3 px-5 rounded-xl bg-white/10 border border-white/10 text-gray-200 
                       placeholder-gray-400 focus:outline-none focus:border-orange-500 
                       backdrop-blur-md transition-all duration-300"
          />
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {posts.map((post, i) => (
          <div
            key={i}
            className="group bg-white/5 border border-white/10 rounded-2xl shadow-lg 
                       hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-500 
                       backdrop-blur-md cursor-pointer"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>

            <div className="p-6">
              <span className="text-sm text-orange-400 font-medium">{post.date}</span>

              <h2 className="text-xl font-bold mt-3 group-hover:text-orange-400 transition-all">
                {post.title}
              </h2>

              <p className="text-gray-400 mt-3 leading-relaxed">
                {post.desc}
              </p>

              <button className="mt-5 text-orange-500 font-semibold hover:text-orange-400 transition-all">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* EXTRA SPACING */}
      <div className="py-20"></div>

    </div>
  );
}
