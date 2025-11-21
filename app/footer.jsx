export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 px-6 lg:px-20">
      {/* top section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Brand + Text */}
        <div>
          <h2 className="text-3xl font-semibold text-white">Domainz</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Domainz is a complete hosting platform providing fast, secure and reliable
            solutions for businesses, developers, and creators worldwide.
          </p>

          <button className="mt-6 flex items-center gap-2   text-white font-medium px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400 transition">
            Company Deck
            {/* <span className="text-xl">⬇</span> */}
          </button>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Hosting</li>
            <li>Domains</li>
            <li>VPS</li>
            <li>Shared Hosting</li>
          </ul>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-white font-semibold mb-4">Case Studies</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Open Hub</li>
            <li>Better AI</li>
            <li>Spacebook</li>
            <li>Kodezi</li>
            <li>View all work</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      {/* Social section */}
      <div className="flex items-center justify-between mt-20">
        <div className="flex gap-8 text-gray-400">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
          <span>Twitter</span>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm text-gray-300">Let’s work together</p>
            <p className="text-2xl font-semibold text-blue-500 hover:text-blue-400 cursor-pointer">
              Call Domainz
            </p>
            
          </div>

          <button className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-400 transition text-black text-xl">
            {/* bg-blue-300 */}
            ↗
          </button>
        </div>
      </div>

      <hr className="border-gray-800 my-10" />

      {/* Bottom section */}
      <div className="flex flex-col lg:flex-row items-center justify-between text-gray-500 text-sm">
        <p>Domainz LLC © 2025</p>
        <p className="mt-4 lg:mt-0">
          Domainz is a global hosting & domain service provider.
        </p>
      </div>

      {/* Large background branding with cut-off effect */}
      <div className="relative mt-28 h-[20vw] overflow-hidden pointer-events-none select-none">
        <h1 className="absolute bottom-[-4vw] left-0 w-full text-[22vw] leading-none font-bold text-white tracking-tight uppercase">
          Domainz
        </h1>
      </div>
    </footer>
  );
}
