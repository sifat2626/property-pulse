import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if the db is already connected, don't connect again
  if (connected) {
    console.log("mongodb is already connected");
    return;
  }

  // connect to mongodb
  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
