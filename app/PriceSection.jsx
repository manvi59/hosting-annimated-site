"use client";

import { useEffect } from "react";

export default function PriceSection() {
  useEffect(() => {
    const items = document.querySelectorAll(".stack-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = [...items].indexOf(entry.target);

          if (entry.isIntersecting) {
            entry.target.classList.add("active");

            // make all previous items visible
            for (let i = 0; i < index; i++) {
              items[i].classList.add("active");
            }
          } else {
            entry.target.classList.remove("active");

            // hide all items after this
            for (let i = index; i < items.length; i++) {
              items[i].classList.remove("active");
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="stack-container">

      <div className="stack-item bg-pink-300">First</div>
      <div className="stack-item bg-blue-300">Second</div>
      <div className="stack-item bg-gray-400">Third</div>
      <div className="stack-item bg-yellow-300">Fourth</div>
      <div className="stack-item bg-orange-400">Fifth</div>

    </section>
  );
}
