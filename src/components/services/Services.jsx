
import { getServices } from "@/actions/server/services";
import ServiceCard from "./ServiceCard";

const Services = async () => {
  const services = await getServices();

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Care Services
          </h2>
          <p className="text-neutral/80 max-w-2xl mx-auto">
            Compassionate, professional care services designed for children,
            seniors, and families who need trusted support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
