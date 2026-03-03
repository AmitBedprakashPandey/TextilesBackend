import mongoose from "mongoose";

const MeterGroupSchema = new mongoose.Schema(
  {
    groupNo: {
      type: Number,
      required: true,
    },
    pattern: {
      type: String,
      trim: true,
    },
    rate: {
      type: Number,
      required: true,
      min: 0,
    },
    meters: [
      {
        type: Number,
        required: true,
        min: 0,
      },
    ],
    totalMeters: {
      type: Number,
      required: true,
      min: 0,
    },
    thaans: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false }
);

const PurchaseSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    groups: {
      type: [MeterGroupSchema],
      required: true,
      validate: [(val) => val.length > 0, "At least one group is required"],
    },
    grandTotalMeters: {
      type: Number,
      required: true,
      min: 0,
    },
    grandTotalThaans: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("fCustomer", PurchaseSchema);