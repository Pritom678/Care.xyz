"use client";

import { useEffect, useState } from "react";
import { createBooking } from "@/actions/server/booking";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const BookingForm = ({
  locations: locationsProp,
  services: servicesProp,
  serviceId,
  user,
}) => {
  const router = useRouter();

  const [locations, setLocations] = useState([]);
  const [services, setServices] = useState([]);

  // Booking fields
  const [selectedService, setSelectedService] = useState(null);
  const [duration, setDuration] = useState(1);
  const [pricePerDay, setPricePerDay] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // Location fields
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  // Initialize services and locations from props
  useEffect(() => {
    if (locationsProp) setLocations(locationsProp);
    if (servicesProp) setServices(servicesProp);

    // Preselect service if serviceId is provided
    if (serviceId && servicesProp?.length > 0) {
      const svc = servicesProp.find(
        (s) => s._id === serviceId || s.id === serviceId
      );
      if (svc) setSelectedService(svc);
    }
  }, [locationsProp, servicesProp, serviceId]);

  // Update pricePerDay when service changes
  useEffect(() => {
    if (selectedService) setPricePerDay(selectedService.price);
    else setPricePerDay(0);
  }, [selectedService]);

  // Update total cost
  useEffect(() => {
    setTotalCost(duration * pricePerDay);
  }, [duration, pricePerDay]);

  // Reset dependent selects
  useEffect(() => {
    setDistrict("");
    setCity("");
    setArea("");
  }, [division]);

  useEffect(() => {
    setCity("");
    setArea("");
  }, [district]);

  useEffect(() => {
    setArea("");
  }, [city]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService || !division || !district || !city || !area) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete",
        text: "Please fill all fields before booking.",
      });
      return;
    }

    const booking = {
      service: selectedService.name,
      serviceId: selectedService._id || selectedService.id,
      duration,
      pricePerDay,
      totalCost,
      location: { division, district, city, area },
      email: user?.email || null,
      image: selectedService.image,
    };

    const result = await createBooking(booking);

    if (result.success) {
      await Swal.fire({
        icon: "success",
        title: "Booking Confirmed!",
        text: `Your booking ID: ${result.id}`,
        showConfirmButton: true,
      });

      // Redirect to /mybooking page
      router.push("/my-bookings");
    } else {
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: result.error || "Something went wrong.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-base-100 rounded-2xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-primary">Book Care Service</h2>

      {/* Select Service */}
      <div>
        <label className="label">Select Service</label>
        <select
          value={selectedService?.name || ""}
          onChange={(e) => {
            const svc = services.find((s) => s.name === e.target.value);
            setSelectedService(svc);
          }}
          className="select select-bordered w-full"
          disabled={!!serviceId} // disable dropdown if serviceId is provided
        >
          {!serviceId && <option value="">Choose a Service</option>}
          {services.map((svc) => (
            <option key={svc._id || svc.id} value={svc.name}>
              {svc.name} - ৳ {svc.price}
            </option>
          ))}
        </select>
      </div>

      {/* Duration */}
      <div>
        <label className="label">Duration (Days)</label>
        <input
          type="number"
          min="1"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="input input-bordered w-full"
        />
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label">Division</label>
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">Select Division</option>
            {locations.map((loc) => (
              <option key={loc.division} value={loc.division}>
                {loc.division}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="label">District</label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="select select-bordered w-full"
            disabled={!division}
          >
            <option value="">Select District</option>
            {division &&
              locations
                .find((loc) => loc.division === division)
                ?.districts.map((d) => (
                  <option key={d.name} value={d.name}>
                    {d.name}
                  </option>
                ))}
          </select>
        </div>

        <div>
          <label className="label">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="select select-bordered w-full"
            disabled={!district}
          >
            <option value="">Select City</option>
            {division &&
              district &&
              locations
                .find((loc) => loc.division === division)
                ?.districts.find((d) => d.name === district)
                ?.cities.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
          </select>
        </div>

        <div>
          <label className="label">Area / Address</label>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="select select-bordered w-full"
            disabled={!city}
          >
            <option value="">Select Area</option>
            {division &&
              district &&
              city &&
              locations
                .find((loc) => loc.division === division)
                ?.districts.find((d) => d.name === district)
                ?.cities.find((c) => c.name === city)
                ?.areas.map((a, idx) => (
                  <option key={idx} value={a}>
                    {a}
                  </option>
                ))}
          </select>
        </div>
      </div>

      {/* Total Cost */}
      <p className="text-lg font-semibold">
        Total Cost: <span className="text-primary">৳ {totalCost}</span>
      </p>

      {/* Book Now */}
      <button type="submit" className="btn btn-primary rounded-full w-full">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
