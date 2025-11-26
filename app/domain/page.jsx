import DomainSection from "./DomainSection";
import StepsSection from "./StepsSection";
import BusinessCard from "./BusinessCard";
import FlipCard from "./FlipCard";

export default function DomainPage() {
  return (
    <div>

      {/* SECTION 1 — Domain info */}
      <DomainSection
        title="Search for the right low price top-level domain for your business"
        src="https://www.milesweb.in/assets/images/cheap-domain/global.png"
        sections={[
          {
            title: "Country",
            description:
              `A country code, also known as ccTLDs (Country Code Top Level domains) are best ways to connect with your customers from a particular country, sovereign state, or a dependent territory. They are the most popular domain names for all size businesses.`,
            example: ".in for India | .co.uk for UK"
          },
          {
            title: "Generic",
            description:
              `Generic, also known as gTLDs(Generic top-level domains) are best ways to mark your brand in the market. They build interest and awareness of your brand in the market. Enjoy the highest exposure by registering your business-related domain along with your country domain.`,
            example: ".edu | .cake"
          },
          {
            title: "Global",
            description:
              `Global domains, also known as TLDs (Top Level Domains) are the best ways to target the global market. To make it more effective, many businesses or individuals register a Country domain and Global domain together for a worldwide business connectivity.`,
            example: ".com | .org"
          }
        ]}
      />

      

      {/* SECTION 2 */}
      <StepsSection
        title="Get Your Business Online in 3 Easy Steps"
        src="https://www.milesweb.in/assets/images/domain/steps.png"
        steps={[
          { title: "Select a Domain Name", description: "Pick the right domain name extension from a range, including .com, .in, .org, and others." },
          { title: "Select Hosting Plan", description: "Choose the best web hosting price from MilesWeb, that's competitive with the market." },
          { title: "Launch Your Website", description: "Setup your website and get the instant account from us to launch your website immediately." },
        ]}
        reverse={false}
        bgColor="#F7F7FF"
      />




    <div className="bg-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

        {/* Top left */}
        <BusinessCard title="Represent your business" className="col-span-5 bg-blue-100 p-12">
          Clients will definitely check out your website before reaching to you, and your website representation starts right from its domain name. To showcase your professionalism and credibility, you must purchase a domain name.
        </BusinessCard>

        {/* Top middle */}
        <BusinessCard title="Get easily visible" className="col-span-5 bg-green-100 p-12">
          A clean and easy domain name attracts many visitors. Also, it is easy to remember the next time when you visitor wants to recall it. Maximize your online visibility with an easy to recall domain name and get easily identified.
        </BusinessCard>

        {/* Top right flip card */}
        <FlipCard
          className="col-span-2 bg-blue-100"
          frontContent={
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 stroke-current text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8" />
              </svg>
              <h3 className="font-bold text-2xl cursor-pointer text-gray-900 leading-snug text-center">
                Send<br />professional<br />emails
              </h3>
            </>
          }
          backContent={
            <p>This is the back side content for <br /><strong>Send professional emails</strong></p>
          }
        />

        {/* Bottom row */}

        <BusinessCard title="Business Safety" className="col-span-4 bg-blue-100">
          Domain squatting and hi-jacking is a common practice carried out by hackers on your online business. Protect it today, from such fraudulent and safeguard your business by providing a shield of copyright and trademark protection with MilesWeb.
        </BusinessCard>

        <FlipCard
          className="col-span-3 bg-blue-100"
          frontContent={
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mb-6 stroke-current text-blue-900" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <path d="M7 9h10M7 15h6" />
                <path d="M12 12h.01" />
              </svg>
              <h3 className="font-bold cursor-pointer text-2xl text-gray-900 leading-tight text-center">
                Establishes your brand identity
              </h3>
            </>
          }
          backContent={
            <p>This is the back side content for <br /><strong>Establishes your brand identity</strong></p>
          }
        />

        <BusinessCard title="Better Online Exposure" className="col-span-5 bg-blue-200">
          A domain name that relates to your business or organization, improves your website ranking on search engine pages. This gives wide exposure to your business by showing your website in top searches for your potential customers, and engages them for a longer time.
        </BusinessCard>

      </div>
    </div>



       <DomainSection
        title=""
        src="https://www.milesweb.in/assets/images/cheap-domain/perfect-domain.png"
        reverse={false}
        bgColor="#FFF7F7" // Custom background color
        sections={[
            {
            title: "Switch Hosting to MilesWeb",
            description:`We won't mind even if you have a registered domain name, you still can switch your hosting to MilesWeb. We are always happy to add more accounts in our web hosting family, and still promise you to provide the much better hosting treatment as others. Once associated with us, you will feel secure and valuable. That's how we care for our customers.`,
            }
        ]}
        />

 
        <DomainSection
        
        src="https://www.milesweb.in/assets/images/domain/manage-domain.png"
        sections={[
          {
            title: "How Do You Manage Your Domain Name?",
            description: `Manage all your domain names, renewals, billing and services in one place. Through our friendly Domain Manager which is included with every domain.`,
          },
           {
            description: `With a simple "one click" setup feature you can connect your domain instantly to Web Hosting, Email Hosting or any services, without any tech knowledge.`,
          },
           {
            description: `The Domain Manager comes complete with quick bulk update tools and domain folders allowing you to group and organise your domain portfolio easily.`,
          },

        ]}
      />
    </div>
  );
}
