"use client";

export default function DomainSection({
  title,
  src,
  sections = [],
  reverse = false,
  bgColor = "#f2faff", // default background color
}) {
  return (
    <section className="w-full">

      {/* MAIN TITLE */}
      {title && (
        <h1 className="text-4xl font-bold text-gray-900 text-center m-10">
          {title}
        </h1>
      )}

      {/* MAIN WRAPPER */}
      <div
        className={`max-w-7xl rounded-2xl mx-auto 
                    flex items-center gap-[50px] p-[60px_40px]
                    ${reverse ? "flex-row-reverse" : "flex-row"}
                    max-[900px]:flex-col max-[900px]:text-center mt-15`}
        style={{ backgroundColor: bgColor }} // apply custom background color
      >

        {/* IMAGE */}
        <div className="flex flex-1 justify-center">
          <img 
            src={src} 
            alt="Domain Image"
            className="rounded-xl w-full max-w-[450px]"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-10">
          {sections.map((sec, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900">
                {sec.title}
              </h2>

              <p className="mt-3 text-gray-700 leading-relaxed">
                {sec.description}
              </p>

              {sec.example && (
                <p className="text-gray-600 mt-2">
                  <strong>Example:</strong> {sec.example}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
