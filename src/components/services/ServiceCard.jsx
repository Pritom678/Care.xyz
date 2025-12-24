import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  const { name, category, description, price, image, features, _id } = service;

  return (
    <div className="bg-base-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={image || "/placeholder.jpg"} // fallback
          alt={`${name} service`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className="badge badge-primary badge-outline">{category}</span>

        <h3 className="text-xl font-semibold mt-2">{name}</h3>

        <p className="text-sm text-neutral/80 leading-relaxed mt-2">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-1 text-sm text-neutral/75 mt-2">
          {features?.slice(0, 3).map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 mt-auto">
          <p className="text-lg font-bold text-primary">৳ {price}</p>

          <Link
            href={`/services/${_id}`}
            className="btn btn-primary btn-sm rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
