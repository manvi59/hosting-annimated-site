import ServiceSection from "./serviceSection";

export default function ServicePage() {
  return (
    <div>

      {/* SECTION 1 — Normal */}
      <ServiceSection
        title="UI/UX Design"
        description="Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device."
        list={[
          "UI UX Design",
          "UX Audit",
          "Design System",
          "UI UX Consulting",
          "UX Research",
          "Usability Testing",
          "Wireframe & UI Prototyping",
        ]}
        src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422a7f442bbf1487074_Web%20Design-p-1080.webp"
        reverse={false}
      />

      {/* SECTION 2 — Reversed */}
      <ServiceSection
        title="Web Design"
        description="You don’t just need a website, you need a sales machine. Our web design is user-friendly, fully responsive, and supports SEO. With each scroll, you can expect more clicks, longer time spent on your website, and more conversions."
        list={[
          "Web Design",
          "SaaS Design",
          "Product Design",
          "Website Redesign",
          "B2B Website Design",
          "Landing Page Design",
          "E-Commerce Design"
        ]}
        src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422ed8ffd5696dac6a4_UX%20Design-p-1080.webp"
        reverse={true}   // 🔥 Yeh bas yahi change h
      />

      {/* SECTION 3 — Normal */}
      <ServiceSection
        title="Mobile App Design"
        description="Make your app feel effortless from the first tap. We produce a neat and functional app that leads users through each action, improving their confidence and daily usage."
        list={[
          "Mobile App Design",
          "Design System",
          "IOS App Design",
          "Android App Design",
          "UX Design",
          "UI Design",
          "Usability Testing"
        ]}
        src="https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c4229130cd923555f69b_Mobile%20App%20Design-p-1080.webp"
        reverse={false}
      />
     
    </div>
  );
}
