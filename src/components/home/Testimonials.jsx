"use client";

import Image from "next/image";
import { FaChild, FaHandsHelping, FaUsers, FaClock } from "react-icons/fa";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Mother",
    text: "care.xyz has been a lifesaver for my little one. The caregiver is kind, professional, and truly treats my child like family.",
    avatar: "/testimonials/ayesha.jpg",
  },
  {
    name: "Md. Kamal",
    role: "Family Member",
    text: "Our elderly father is happier and more comfortable thanks to the compassionate care provided by care.xyz.",
    avatar: "/testimonials/kamal.jpg",
  },
  {
    name: "Sara Ahmed",
    role: "Caregiver",
    text: "Being part of care.xyz allows me to make a real difference in families’ lives every day. It’s a supportive and rewarding platform.",
    avatar: "/testimonials/sara.jpg",
  },
];

// Metrics with React Icons
const metrics = [
  { label: "Children Helped", value: "1,250+", icon: FaChild },
  { label: "Elderly Assisted", value: "980+", icon: FaHandsHelping },
  { label: "Caregivers", value: "150+", icon: FaUsers },
  { label: "Hours of Care Delivered", value: "25,000+", icon: FaClock },
];

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Success Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="space-y-2 flex flex-col items-center">
                <Icon className="w-8 h-8 text-primary mx-auto" />
                <h3 className="text-3xl lg:text-4xl font-bold text-primary">{metric.value}</h3>
                <p className="text-md font-semibold text-neutral">{metric.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-base-100 rounded-2xl shadow-sm transform transition duration-500 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
            >
              <p className="text-neutral/90 mb-4">"{item.text}"</p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-neutral/70">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
