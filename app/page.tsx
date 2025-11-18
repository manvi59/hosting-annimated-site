// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import PriceSection from "./PriceSection.jsx"
export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-14 py-6">
        <div className="text-3xl font-bold">Wavespace</div>

        <ul className="flex items-center gap-10 text-lg">
          <li className="hover:text-black/60 cursor-pointer">Services ↗</li>
          <li className="cursor-pointer">Case studies⁰⁹</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">Blog</li>
        </ul>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg">
          Contact Us ↗
        </button>
      </nav>

      {/* HERO SECTION */}
      {/* <section className="px-14 py-20 grid grid-cols-1 md:grid-cols-2 gap-10"> */}
      <section className="px-14 py-20 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
        {/* LEFT SIDE TEXT */}
        <div>
          {/* Tag */}
          <div className="flex items-center gap-2 bg-green-100 w-fit px-4 py-1 rounded-full mb-6">
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <p className="text-sm">Available for New Projects</p>
          </div>

          <h1 className="text-6xl md:text-6xl font-bold leading-tight mb-6">
            Global Hosting <br />
            agency digital partner
            <br />
            {/* for <span className="gradient-text">SaaS companies.</span><br /> */}
            {/* <span className="gradient-text2">future unicorns</span> */}
          </h1>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-8">
            <button className="bg-black text-white px-8 py-4 rounded-full text-xl">
              Book a call
            </button>

            <button className="bg-white border px-8 py-4 rounded-full text-xl flex items-center gap-2">
              <img src="/server.jpg" className="w-10 h-10" />
              View work
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex  justify-end ">
          <div className="flex-col mt-20">
            <p className="text-lg leading-relaxed mb-6 text-black-700">
              Wavespace is a global UX agency <br></br>that helps brands scale
              with fast,<br></br>
              high-performance digital experiences.
            </p>

            {/* <div className="flex items-center gap-3 mb-6">
            <img src="/photo1.avif" className="w-10 h-10 rounded-full" />
            <img src="/photo1.avif" className="w-10 h-10 rounded-full" />
            <img src="/photo1.avif" className="w-10 h-10 rounded-full" />

            <p className="text-gray-600">Loved by 500+ Founders</p>
          </div> */}

            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-3">
                <img
                  src="/photo1.avif"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/photo1.avif"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="/photo1.avif"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <p className="text-gray-600">Loved by 500+ Founders</p>
            </div>

            <div className="flex items-center gap-3">
              <img src="/cloud.jpg" className="w-10 h-10" />

              <div className="flex">
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
                <span className="text-red-500 text-2xl">★</span>
              </div>

              <p>13 Reviews</p>
            </div>

            <img src="/certified.png" className="w-56 mt-8 hidden " />
          </div>
        </div>
      </section>

      <section className="relative w-full h-[650px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-b from-[#cfd8ff] to-[#b5c3ff]"></div>

        <div className="relative z-10 bg-white w-[85%] h-[520px] shadow-xl rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#98a8ff] to-[#c7d1ff]"></div>

          <div className="relative z-20 w-full h-full flex items-center justify-center">
            <h1 className="absolute top-12 left-16 text-white text-7xl font-bold opacity-70 tracking-wide">
              Host Web
            </h1>

            <p className="absolute left-16 top-28 text-white tracking-wider">
              LUXURIOUS
            </p>
            <p className="absolute left-16 bottom-20 text-white">
              ALL TIME BEST <br /> OFFERS
            </p>

            <p className="absolute right-10 top-25 text-white text-right">
              Lorem ipsum dolor sit amet consectetur,<br></br> adipisicing elit.
              Repellat qui perferendis
              <br></br>consequatur magni saepe, est at ratione <br></br>eligendi
              amet eaque sit consectetur <br></br>quas hic itaque totam
              perspiciatis?
            </p>
            <p className="absolute right-16 bottom-20 text-white text-right">
              CELEBRATE INDIVIDUALITY <br /> WITH UNIQUE OUTFITS
            </p>

            <p className="absolute bottom-12 text-white font-semibold bg-black/30 px-6 py-2 rounded-full">
              SHOP NOW, SAVE MORE
            </p>

            <img src="/host.png" className="relative h-[420px] z-30" />
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-6 md:px-14">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900 mb-12">
          Bold UX design, billion-dollar proof. We <br />
          measure impact,{" "}
          <span className="text-gray-500">not just ship pixels.</span>
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01 */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between">
            <p className="text-gray-400 text-sm">/01</p>
            <div>
              <h2 className="text-4xl font-bold">92%</h2>
              <p className="text-gray-500 mt-2 text-sm">
                client satisfaction <br /> in post-project reviews.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between">
            <p className="text-gray-400 text-sm">/02</p>
            <div>
              <h2 className="text-4xl font-bold">$10B+</h2>
              <p className="text-gray-500 mt-2 text-sm">
                valuation influenced <br /> by our design
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between">
            <p className="text-gray-400 text-sm">/03</p>
            <div>
              <h2 className="text-4xl font-bold">2019</h2>
              <p className="text-gray-500 mt-2 text-sm">
                Founded, 6 years <br /> of experience
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between md:col-span-1">
            <p className="text-gray-400 text-sm">/04</p>
            <div>
              <h2 className="text-4xl font-bold">25M+</h2>
              <p className="text-gray-500 mt-2 text-sm">
                monthly visits <br /> on client platforms
              </p>
            </div>
          </div>

          {/* Card 05 */}
          <div className="bg-white rounded-2xl shadow-sm border p-8 h-[230px] flex flex-col justify-between md:col-span-2">
            <p className="text-gray-400 text-sm">/05</p>
            <div>
              <h2 className="text-4xl font-bold">500+ global project</h2>
              <p className="text-gray-500 mt-2 text-sm">
                250+ testimonial with trusted by YC-backed, <br />
                VC-funded, a16z, Sequoia
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-14 bg-white">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight text-gray-900 mb-10">
          Partner with a full design team <br />
          on a flat monthly subscription.
        </h1>

        {/* Brand Logos */}
        {/* <div className="flex flex-wrap justify-center items-center gap-6 mb-12 opacity-70">
    <img src="https://img.freepik.com/premium-vector/hosting-technology-logo-symbol-icon-template_166742-6367.jpg" className="h-20" />
    <img src="/logo-kodezi.png" className="h-6" />
    <img src="/logo-delve.png" className="h-6" />
    <img src="/logo-heygen.png" className="h-6" />
    <img src="/logo-zeroessay.png" className="h-6" />
  </div> */}

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-10 gap-3">
          <button className="px-5 py-2 bg-black text-white rounded-full text-sm">
            Monthly
          </button>
          <button className="px-5 py-2 bg-gray-200 rounded-full text-sm">
            Quarterly -10%
          </button>
          <button className="px-5 py-2 bg-gray-200 rounded-full text-sm">
            Yearly
          </button>
          <button className="px-5 py-2 bg-gray-200 rounded-full text-sm">
            2 Months Free
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-2">Starter</h2>
            <p className="text-gray-600 mb-6">
              Perfect for early startups and marketers needing steady design
              support.
            </p>

            <h3 className="text-4xl font-bold mb-2">
              $2,200<span className="text-lg font-medium">/monthly</span>
            </h3>
            <p className="text-gray-500 mb-6">Cancel anytime</p>

            <button className="w-full bg-black text-white py-3 rounded-full mb-3">
              Buy Now
            </button>
            <button className="w-full border py-3 rounded-full">
              Book an Intro Call
            </button>

            {/* Review Card */}
            <div className="mt-6 p-4 rounded-xl border bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Isragh Khan</p>
                  <p className="text-xs text-gray-500">CEO at Kodezi</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                “Wavespace very reliable & we enjoy their designs!”
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ 55 hours per month</li>
              <li>✔ All design services included</li>
              <li>✔ Dedicated senior designer + PM</li>
            </ul>
          </div>

          {/* Accelerate Plan (Highlighted) */}
          <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-8">
            <div className="text-right text-sm text-gray-700 mb-2 font-semibold">
              Only 5 spots left
            </div>

            <h2 className="text-2xl font-semibold mb-2">Accelerate</h2>
            <p className="text-gray-600 mb-6">
              For SaaS & VC-backed teams needing rapid expert design.
            </p>

            <h3 className="text-4xl font-bold mb-2">
              $4,400<span className="text-lg font-medium">/monthly</span>
            </h3>
            <p className="text-gray-500 mb-6">Cancel anytime</p>

            <button className="w-full bg-[#c7d1ff] py-3 rounded-full mb-3 font-semibold">
              Buy Now
            </button>
            <button className="w-full border py-3 rounded-full">
              Book an Intro Call
            </button>

            {/* Review Card */}
            <div className="mt-6 p-4 rounded-xl border bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Nick Fisher</p>
                  <p className="text-xs text-gray-500">
                    COO at a funded startup
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                “Highly happy with design delivered by Wavespace!”
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ 110 hours per month</li>
              <li>✔ All design services included</li>
              <li>✔ Senior Designer + Copywriter + PM</li>
            </ul>
          </div>

          {/* Custom Plan */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-2">Flexible Project</h2>
            <p className="text-gray-600 mb-6">
              For startups & brands needing flexible, one-time, or mixed
              projects.
            </p>

            <h3 className="text-4xl font-bold mb-2">Custom Project</h3>
            <p className="text-gray-500 mb-6">Full stack design team</p>

            <button className="w-full border py-3 rounded-full bg-white">
              Get custom quote
            </button>

            {/* Review Card */}
            <div className="mt-6 p-4 rounded-xl border bg-gray-50">
              <div className="flex items-center gap-3 mb-2">
                <img src="/profile.jpg" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">Abraham Ajayi</p>
                  <p className="text-xs text-gray-500">CEO at ActiveSync</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                “Wavespace brought my idea to life. Amazing UX experience.”
              </p>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700 text-sm">
              <li>✔ Flexible scope & timeline</li>
              <li>✔ Custom development or no-code</li>
              <li>✔ Senior Designer + Copywriter + PM</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[650px] overflow-hidden flex items-center justify-center ">
        <img src="/banner.webp" className="w-full h-full" />
      </section>

      <section className="relative w-full h-[650px] overflow-hidden flex items-center justify-center">
        {/* Animated Gradient Background */}
        {/* <div className="absolute inset-0 animate-gradient bg-gradient-to-b from-[#cfd8ff] to-[#b5c3ff]"></div> */}
        <div className="absolute inset-0 animate-gradient"></div>

        {/* White Frame Container */}
        <div className="relative z-10 bg-white w-[90%] h-[620px]  overflow-hidden">
          {/* Inner gradient bg behind the video */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#98a8ff] to-[#c7d1ff]"></div>

          {/* Video Full Cover */}
          <video
            src="/hosting.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        </div>
      </section>

      <section className="w-full py-10 overflow-hidden bg-white">
        <div className="flex gap-16 items-center scroll-animation whitespace-nowrap">
          <img
            src="https://img.freepik.com/premium-vector/hosting-technology-logo-symbol-icon-template_166742-6367.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/web-hosting-concept-2-colored-icon-simple-blue-element-illustration-web-hosting-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-4512.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/logo-with-blue-orange-cloud_1071-109.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149203402.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/hosting-logo-vector-design-template_717549-251.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-data-logo-concept-cloud-paper-logo-document-cloud-logo-design-illustration_467060-1376.jpg"
            className="h-20 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/cloud-gradient-logo-design-template_474888-1900.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-logo-that-says-cloud-logo-it_267160-959.jpg"
            className="h-40 opacity-70"
          />

          {/* Duplicate list for seamless infinite loop */}
          <img
            src="https://img.freepik.com/premium-vector/hosting-technology-logo-symbol-icon-template_166742-6367.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/web-hosting-concept-2-colored-icon-simple-blue-element-illustration-web-hosting-concept-symbol-design-can-be-used-web-mobile-ui-ux_159242-4512.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/logo-with-blue-orange-cloud_1071-109.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/gradient-data-logo-template_23-2149203402.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/hosting-logo-vector-design-template_717549-251.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-data-logo-concept-cloud-paper-logo-document-cloud-logo-design-illustration_467060-1376.jpg"
            className="h-20 opacity-70"
          />
          <img
            src="https://img.freepik.com/free-vector/cloud-gradient-logo-design-template_474888-1900.jpg"
            className="h-40 opacity-70"
          />
          <img
            src="https://img.freepik.com/premium-vector/cloud-logo-that-says-cloud-logo-it_267160-959.jpg"
            className="h-40 opacity-70"
          />
        </div>
      </section>

      {/* <section>
        <div className="service_card is_blue"> ... </div>
        <div className="service_card is_white"> ... </div>
        <div className="service_card is_yellow2"> ... </div>
        <div className="service_card is_red"> ... </div>
        <div className="service_card is_black"> ... </div>
      </section> */}

      <PriceSection/>

      
    </main>
  );
}
