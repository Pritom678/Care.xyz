import { getSingleService } from "@/actions/server/services";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";

const ServiceDetails = async ({ params }) => {
  const { id } = (await params) || {};

  if (!id) return notFound();

  const service = await getSingleService(id);
  if (!service || Object.keys(service).length === 0) return notFound();

  const session = await getServerSession();
  const user = session?.user || null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-lg">
          <Image
            src={service.image || "/placeholder-service.jpg"}
            alt={service.name || "Service"}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <span className="badge badge-primary badge-outline">
            {service.category || "Service"}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{service.name}</h1>
          <p className="text-neutral/80 leading-relaxed text-lg">
            {service.description}
          </p>

          {service.features?.length > 0 ? (
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-neutral/60">No features listed.</p>
          )}

          <div className="pt-4 flex items-center gap-6">
            <p className="text-2xl font-bold text-primary">৳ {service.price}</p>
          </div>

          {/* Redirect to booking page */}
          <div className="mt-6">
            <Link
              href={`/booking/${id}`}
              className="btn btn-primary rounded-full px-8 py-3 text-lg"
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
