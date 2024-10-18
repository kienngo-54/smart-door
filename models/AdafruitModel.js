import mongoose from "mongoose";

const AdafruitSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
  },
  { timestamps: true }
);

export const AdafruitModel = mongoose.model("Door", AdafruitSchema);
