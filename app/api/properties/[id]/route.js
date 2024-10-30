import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    // Await the params to get the route parameters asynchronously
    const { id } = await params;

    await connectDB();

    // Check if the ID is present
    if (!id) {
      return NextResponse.json(
        { message: "Property ID is required" },
        { status: 400 }
      );
    }

    const property = await Property.findById(id);

    // If property is not found
    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    // If found, return property details
    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    // Handle any potential server or database errors
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
