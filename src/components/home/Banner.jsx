"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Compassionate Care, Like Family",
    description:
      "Trusted caregivers providing gentle, respectful support for children and elderly — right at home.",
    image: "/banner/elder-care.jpg",
  },
  {
    title: "Because Every Life Deserves Dignity",
    description:
      "From daily assistance to specialized care, we’re here to bring comfort and peace of mind.",
    image: "/banner/child-care.jpg",
  },
  {
    title: "Caring Hands. Caring Hearts.",
    description:
      "Professional caregivers trained to support both emotional and physical well-being.",
    image: "/banner/home-nursing.jpg",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
          ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/20" />

          {/* Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-xl space-y-6 text-white">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg leading-relaxed text-white/90">
                {slide.description}
              </p>

              <div className="flex gap-4">
                <Link
                  href="/booking"
                  className="btn btn-primary rounded-full px-8"
                >
                  Book Care
                </Link>
                <Link
                  href="/services"
                  className="btn btn-outline text-white border-white rounded-full px-8"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all
            ${current === index ? "bg-white scale-110" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
