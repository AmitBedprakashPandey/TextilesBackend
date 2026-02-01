import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
    {
        cityName: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("city", modelSchema);
