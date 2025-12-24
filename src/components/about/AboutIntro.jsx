"use client";

import Image from "next/image";
import { FaHeart, FaChild, FaUserNurse, FaHandsHelping } from "react-icons/fa";

const values = [
  {
    icon: FaHeart,
    title: "Compassion First",
    desc: "We believe true care begins with empathy, patience, and love.",
  },
  {
    icon: FaChild,
    title: "Child-Centered Care",
    desc: "Safe, nurturing environments that help children grow happily.",
  },
  {
    icon: FaUserNurse,
    title: "Respect for Seniors",
    desc: "Supporting independence while honoring dignity and life experience.",
  },
  {
    icon: FaHandsHelping,
    title: "Trusted Professionals",
    desc: "Every caregiver is carefully verified and trained with care.",
  },
];

const AboutIntro = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative w-full h-105 rounded-3xl overflow-hidden shadow-md fade-up">
          <Image
            src="/about/well.png"
            alt="Caregiving with compassion"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Who We Are
          </h2>
          <p className="text-neutral/80 leading-relaxed mb-6">
            care.xyz is a caregiving platform built to support families,
            children, and elderly individuals with reliable, compassionate, and
            professional care.
          </p>
          <p className="text-neutral/80 leading-relaxed">
            We connect people who need care with caregivers who genuinely care —
            because trust, safety, and warmth matter most.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-8 bg-base-200 rounded-2xl text-center
                         transition-all duration-500 hover:-translate-y-3 hover:shadow-lg fade-up"
            >
              <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-neutral/75">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AboutIntro;
