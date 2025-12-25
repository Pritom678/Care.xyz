"use server";

import authOptions from "@/lib/authOption";
import { collections, dbConnect } from "@/lib/dbConnect";
import { bookingInvoiceTemplate } from "@/lib/invoiceTemplate";
import { sendEmail } from "@/lib/sendEmail";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

// Save booking to MongoDB
export const createBooking = async (bookingData) => {
  try {
    const bookingCollection = dbConnect(collections.BOOKINGS);

    const result = await bookingCollection.insertOne({
      ...bookingData,
      createdAt: new Date(),
      status: "Pending",
    });

    const html = bookingInvoiceTemplate({
      bookingId: result.insertedId.toString(),
      serviceName: bookingData.service,
      duration: bookingData.duration,
      pricePerDay: bookingData.pricePerDay,
      totalCost: bookingData.totalCost,
      location: bookingData.location,
      customerEmail: bookingData.email,
      createdAt: new Date(),
    });

    await sendEmail({
      to: bookingData.email,
      subject: "Your Care.xyz Booking Invoice",
      html,
    });

    return { success: true, id: result.insertedId.toString() };
  } catch (error) {
    console.error("Error creating booking:", error);
    return { success: false, error: error.message };
  }
};

export const getMyBookings = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return { success: false, error: "Unauthorized" };
    }

    const bookingCollection = dbConnect(collections.BOOKINGS);

    const bookings = await bookingCollection
      .find({ email: session.user.email })
      .sort({ createdAt: -1 })
      .toArray();

    const safeBookings = bookings.map((b) => ({
      ...b,
      _id: b._id.toString(),
    }));

    return { success: true, data: safeBookings };
  } catch (error) {
    console.error("Get bookings error:", error);
    return { success: false, error: error.message };
  }
};

export const deleteBooking = async (bookingId) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return { success: false, error: "Unauthorized" };
    }

    const bookingCollection = dbConnect(collections.BOOKINGS);

    const result = await bookingCollection.deleteOne({
      _id: new ObjectId(bookingId),
      email: session.user.email, // 🔐 security check
    });

    if (result.deletedCount === 0) {
      return { success: false, error: "Booking not found" };
    }

    return { success: true };
  } catch (error) {
    console.error("Delete booking error:", error);
    return { success: false, error: error.message };
  }
};
