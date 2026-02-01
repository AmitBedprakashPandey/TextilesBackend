import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    areaName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("area", modelSchema);
