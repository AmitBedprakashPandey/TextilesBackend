import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    unitName: {
      type: String,
      required: true,
      trim: true,
    },
    unitShort: {
      type: String,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("unit", modelSchema);
