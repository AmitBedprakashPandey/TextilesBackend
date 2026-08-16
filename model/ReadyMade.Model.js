import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    rate: {
      type: Number,
    },
    avg: {
      type: Number,
    },
    popline:{
        type: Number,
    },
    border:{
        type: Number,
    }
  },
  { timestamps: true },
);

export default mongoose.model("readymadeitem", modelSchema);
