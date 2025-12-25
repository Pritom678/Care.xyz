"use client";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { deleteBooking } from "@/actions/server/booking";

const MyBookings = ({ bookings }) => {
  const router = useRouter();

  if (!bookings.length) {
    return (
      <div className="text-center mt-10 text-gray-500">No bookings found</div>
    );
  }

  const handleDelete = async (id) => {
    const res = await Swal.fire({
      title: "Are you sure?",
      text: "This booking will be permanently deleted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!res.isConfirmed) return;

    const result = await deleteBooking(id);

    if (result.success) {
      Swal.fire("Deleted!", "Booking has been removed.", "success");
      router.refresh();
    } else {
      Swal.fire("Error", result.error, "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-primary text-center">
        My Bookings
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="card bg-base-100 shadow-xl rounded-xl overflow-hidden"
          >
            {/* Image */}
            <figure>
              <img
                src={booking.image || "/service-placeholder.jpg"}
                alt={booking.service}
                className="h-48 w-full object-cover"
              />
            </figure>

            <div className="card-body space-y-2">
              <h3 className="text-xl font-semibold">{booking.service}</h3>

              <p>
                <strong>Duration:</strong> {booking.duration} day(s)
              </p>

              <p>
                <strong>Total Cost:</strong>{" "}
                <span className="text-primary font-semibold">
                  ৳ {booking.totalCost}
                </span>
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`badge ${
                    booking.status === "Pending"
                      ? "badge-warning"
                      : "badge-success"
                  }`}
                >
                  {booking.status}
                </span>
              </p>

              <p className="text-sm text-gray-500">
                {booking.location.division}, {booking.location.district},{" "}
                {booking.location.city}, {booking.location.area}
              </p>

              <p className="text-xs text-gray-400">
                Booked on: {new Date(booking.createdAt).toLocaleDateString()}
              </p>

              {/* Buttons */}
              <div className="card-actions justify-end mt-4">
                <button
                  className="btn btn-outline btn-error btn-sm"
                  onClick={() => handleDelete(booking._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
