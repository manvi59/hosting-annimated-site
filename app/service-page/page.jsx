import HostingServiceSection from "./HostingServiceSection";
import Footer from "../footer.jsx";
import Link from "next/link";
import ServiceHero from "./ServiceHero.jsx";
import Feature from "./Feature.jsx";

export default function HostingServices() {
  return (
    <>
      <nav className="flex items-center justify-between px-14 py-6">
        {/* <div className="text-3xl font-bold">Wavespace</div> */}
        <Link href={"/"}>
          <div className="text-3xl font-bold">Domainz</div>
        </Link>

        <ul className="flex items-center gap-10 text-lg">
          <Link href={"/service-page"}>
            <li className="hover:text-black/60 cursor-pointer">Services ↗</li>
          </Link>
          <li className="cursor-pointer">Case studies⁰⁹</li>
          <li className="cursor-pointer">Pricing</li>
          <Link href={"/about"}>
            <li className="cursor-pointer">About us</li>
          </Link>
          <li className="cursor-pointer">Blog</li>
        </ul>

        <button className="bg-[#5B4BFF] hover:bg-[#6A5CFF] text-white px-6 py-3 rounded-full text-lg">
          Contact Us ↗
        </button>
      </nav>

      {/* <section
        className="relative px-14 py-24 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 overflow-hidden"
        style={{ background: "#6456f7" }}
      >
        <div className="absolute inset-0 opacity-30 blur-[120px] bg-gradient-to-br from-white via-purple-200 to-transparent"></div>

        <div className="relative z-10 animate-fadeUpSlow">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full mb-6 border border-white/30">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <p className="text-sm text-white">Available for New Projects</p>
          </div>

          <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tight mb-8 drop-shadow-lg">
            Dedicated Servers <br />
            High Performance <br />
            <span className="bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
              For Global Scale
            </span>
          </h1>

          <div className="flex gap-6 mt-10">
            <button className="bg-black hover:bg-white hover:text-black transition-all duration-300 text-white px-10 py-4 rounded-full text-xl shadow-lg">
              Book a Call
            </button>

            <button className="bg-white hover:bg-gray-200 border px-10 py-4 rounded-full text-xl flex items-center gap-3 shadow-lg transition-all duration-300">
              <img src="/server.jpg" className="w-10 h-10 animate-float" />
              View Work
            </button>
          </div>
        </div>

        <div className="relative mt-16 md:mt-0 z-10 animate-slideInRight">
        
          <img
            src="/server-room.png"
            height={500}
            width={500}
            className="h-full w-full"
          />
        </div>
      </section> */}
      <ServiceHero/>
      

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

      <div>
        {/* SECTION 1 — WordPress Hosting */}
        <HostingServiceSection
          title="WordPress Hosting"
          description="Optimized servers for WordPress websites. Fast, secure, and easy to manage with one-click installs and automated updates."
          list={[
            "High-Performance Servers",
            "One-Click WordPress Install",
            "Automatic Updates",
            "Free SSL Certificate",
            "Daily Backups",
            "24/7 Support",
          ]}
          src="https://img.freepik.com/premium-photo/marketing-team-meeting-brainstorming-research-concept_1279686-22314.jpg"
          reverse={false}
        />

        {/* SECTION 2 — Node.js Hosting */}
        <HostingServiceSection
          title="Node.js Hosting"
          description="Run your Node.js applications with scalable and secure servers. Deploy apps quickly with full control over your environment."
          list={[
            "High-Speed Node.js Servers",
            "Custom Node.js Versions",
            "Database Integration",
            "SSH Access",
            "Scalable Hosting Plans",
            "Priority Support",
          ]}
          src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg"
          reverse={true}
        />

        {/* SECTION 3 — Database Hosting */}
        <HostingServiceSection
          title="Database Hosting"
          description="Secure and reliable hosting for MySQL, PostgreSQL, and MongoDB databases. Ideal for your applications and websites."
          list={[
            "High Availability Databases",
            "Automated Backups",
            "Data Encryption",
            "Scalable Storage",
            "Monitoring & Alerts",
            "Expert Support",
          ]}
          src="https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg"
          reverse={false}
        />

        {/* SECTION 4 — Email Hosting */}
        <HostingServiceSection
          title="Email Hosting"
          description="Professional email hosting for your domain. Secure, reliable, and fully compatible with popular email clients."
          list={[
            "Custom Domain Emails",
            "Spam & Virus Protection",
            "Webmail Access",
            "IMAP/POP3 Support",
            "Large Mailbox Storage",
            "24/7 Support",
          ]}
          src="https://img.freepik.com/free-vector/abstract-creative-website-hosting-illustration_23-2149225963.jpg"
          reverse={true}
        />
      </div>

          {/* <Feature/> */}

      <Footer />
    </>
  );
}
