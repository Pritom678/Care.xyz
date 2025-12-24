import { getSingleService } from "@/actions/server/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative w-full h-87.5 rounded-3xl overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <span className="badge badge-primary badge-outline">
            {service.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold">{service.name}</h1>

          <p className="text-neutral/80 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price + CTA */}
          <div className="flex items-center gap-6 pt-4">
            <p className="text-2xl font-bold text-primary">৳ {service.price}</p>

            <Link
              href="/booking"
              className="btn btn-primary rounded-full px-8"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
