"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

export const getLocations = async () => {
  const locations = await dbConnect(collections.LOCATIONS).find().toArray();

  // Convert ObjectIds or other non-serializable fields if needed
  return locations.map((loc) => ({
    ...loc,
    _id: loc._id.toString(), // if you use _id anywhere
  }));
};
