import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    prefix: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    startNumber: {
      type: String,
      required: true,
      min: 1,
    },
    currentNumber: {
      type: String,
      required: true,
    },
    companyid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
      unique: true,
  },
  },
  { timestamps: true }
);

export default mongoose.model("SerialNumber", modelSchema);
