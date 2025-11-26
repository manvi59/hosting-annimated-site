"use client";

export default function StepsSection({
  title = "Get Your Business Online in 3 Easy Steps",
  steps = [],
  src,
  reverse = false,
  bgColor = "#F7F7FF",
}) {
  return (
    <section className="w-full">

      {/* SECTION TITLE */}
      {title && (
        <h1 className="text-4xl font-bold text-gray-900 text-center m-12">
          {title}
        </h1>
      )}

      {/* MAIN WRAPPER */}
      <div
        className={`max-w-7xl rounded-2xl mx-auto p-10 grid md:grid-cols-2 gap-12`}
        style={{ backgroundColor: bgColor }}
      >

        {/* TEXT */}
        <div className={`space-y-10 max-md:text-center ${reverse ? "order-1 md:order-2" : "order-2 md:order-1"}`}>
          {steps.length > 0 && (
            <p className="mt-8">
              <span className="text-blue-500 text-2xl font-bold">Steps to follow</span>
            </p>
          )}

          {steps.map((step, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-900 mt-10">
                {idx + 1}. {step.title}
              </h2>
              <p className="mt-3 text-gray-700 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <div className={`flex justify-center items-center ${reverse ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
          <div className="rounded-2xl p-4">
            <img src={src} alt="Steps Image" className="rounded-xl w-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
