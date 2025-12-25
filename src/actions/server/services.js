"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async () => {
  const services = await dbConnect(collections.SERVICES).find().toArray();

  // Convert _id to string
  return services.map((s) => ({
    ...s,
    _id: s._id.toString(),
  }));
};

export const getSingleService = async (id) => {
  if (id.length !== 24) return {};

  const service = await dbConnect(collections.SERVICES).findOne({ _id: new ObjectId(id) });
  if (!service) return {};

  return { ...service, _id: service._id.toString() };
};
