import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    prefix: {
      type: String,
      required: true,
      trim: true,
    },
    startNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    currentNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("SerialNumber", modelSchema);
