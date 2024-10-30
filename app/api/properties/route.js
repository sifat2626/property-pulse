import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

// GET /api/properties
export const GET = async () => {
  try {
    await connectDB();
    const properties = await Property.find({});
    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
