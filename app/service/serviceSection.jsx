"use client";

export default function servicesection({ title, description, list, reverse,src }) {
  return (
    <section
      className={`w-full max-w-[1400px] mx-auto flex items-center gap-[50px] p-[60px_40px]
      ${reverse ? "flex-row-reverse" : "flex-row"}
      max-[900px]:flex-col max-[900px]:text-center`}
    >           

      {/* IMAGE */}
      <div className="flex flex-1">
        <img
          src={src}
          alt="Phone UI"
          className="w-full max-w-[550px]"
        />
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        <h1 className="text-[48px] mb-5 font-bold mt-0">{title}</h1>

        <p className="text-[17px] leading-[1.6] text-[#444] max-w-[500px] font-medium ">
          {description}
        </p>

        <div className="w-full mt-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[60px_1fr_40px] py-4 border-b border-[#e5e5e5] text-[20px] items-center"
            >
              <span className="text-[#888] text-[18px]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[#111]">{item}</span>
              <span className="text-[22px] text-[#111] font-medium">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
