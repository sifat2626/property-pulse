import mongoose, { Schema } from "mongoose"; // Consistent ES Module syntax

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true, // unique should just be a boolean
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    image: {
      type: String, // Assuming you'll store an image URL or path as a string
      required: false, // Optional; adjust as needed
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
