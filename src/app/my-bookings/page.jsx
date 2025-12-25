
import { getMyBookings } from "@/actions/server/booking";
import MyBookings from "@/components/booking/MyBookings";


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
