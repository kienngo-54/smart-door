import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      min: 6,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 1024,
    },

    firstName: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    lastName: {
      type: String,
      required: true,
    },
    avatarURL: {
      type: String,
      default: "",
    },
    role: {
      // user or admin
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", UserSchema);
