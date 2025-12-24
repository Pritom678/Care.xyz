"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const values = [
  {
    emoji: "🤍",
    title: "Compassion First",
    desc: "We lead with empathy, patience, and understanding in every care relationship.",
  },
  {
    emoji: "🛡️",
    title: "Trust & Safety",
    desc: "Every caregiver is carefully screened, trained, and supported.",
  },
  {
    emoji: "🫶",
    title: "Human Connection",
    desc: "We prioritize emotional well-being, not just physical assistance.",
  },
  {
    emoji: "🌱",
    title: "Growing Together",
    desc: "Care evolves with changing needs — we grow with your family.",
  },
];

const AboutMission = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const fadeElements = containerRef.current.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    fadeElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="bg-base-100 py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div className="space-y-6 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Our Mission
          </span>

          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug">
            Care is not a service. <br />
            It’s a responsibility we take personally.
          </h2>

          <p className="text-lg leading-relaxed text-neutral">
            At <span className="font-medium">care.xyz</span>, we believe that
            true care goes beyond tasks and routines. It is about dignity,
            patience, and human connection — especially for children and the
            elderly.
          </p>

          <p className="leading-relaxed text-neutral">
            Our platform exists to connect families with compassionate,
            background-verified caregivers who treat every child like their own
            and every elder with respect and warmth.
          </p>

          <p className="leading-relaxed text-neutral">
            Whether it’s daily assistance, emotional companionship, or
            specialized support, we focus on creating a safe, loving environment
            where families feel supported and never alone.
          </p>

          <Link
            href="/about"
            className="btn btn-outline btn-primary rounded-full px-8 mt-4"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-2 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-base-200 shadow-sm space-y-3 transform transition duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-lg fade-in opacity-0 translate-y-10"
            >
              <div className="text-3xl">{item.emoji}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-neutral">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
