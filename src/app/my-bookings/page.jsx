
import { getMyBookings } from "@/actions/server/booking";
import MyBookings from "@/components/booking/MyBookings";

export const metadata = {
  title: "My Bookings | care.xyz",
  description: "Learn about care.xyz and our mission to provide compassionate caregiving.",
};

const MyBookingPage = async () => {
  const result = await getMyBookings();

  if (!result.success) {
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load bookings
      </div>
    );
  }

  return <MyBookings bookings={result.data} />;
};

export default MyBookingPage;
