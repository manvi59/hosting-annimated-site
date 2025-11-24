import HostingServiceSection from "./HostingServiceSection";
import Footer from "../footer.jsx"
import Link from "next/link"

export default function HostingServices() {
return ( 

  <>

   <nav className="flex items-center justify-between px-14 py-6"  >
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

<Footer/>
  </>


);
}
