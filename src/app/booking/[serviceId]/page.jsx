import BookingForm from "@/components/booking/BookingForm";
import { getSingleService, getServices } from "@/actions/server/services";
import { getLocations } from "@/actions/server/location";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

const BookingPage = async ({ params }) => {
  const { serviceId } = await params;

  // Fetch service and other data
  const service = await getSingleService(serviceId);
  if (!service || Object.keys(service).length === 0) notFound();

  const [locations, services] = await Promise.all([
    getLocations(),
    getServices(),
  ]);
  const session = await getServerSession();
  const user = session?.user || null;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">
        Book Service: {service.name}
      </h1>

      <BookingForm
        locations={locations}
        services={services}
        serviceId={serviceId}
        user={user}
      />
    </section>
  );
};

export default BookingPage;
