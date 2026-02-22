import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        ownerName: {
            type: String,
        },
        
        gstin: {
            type: String,
        },
        pan: {
            type: String,
        },
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        pincode: {
            type: String,
        },

        billingStreet1: {
            type: String,
            required: true,
        },
        billingStreet2: {
            type: String,

        },
        billingStreet3: {
            type: String,
        },
        billingMobile: {
            type: String,
        },
        billingEmail: {
            type: String,
        },
        billingPhone: {
            type: String,
        },
    },



    { timestamps: true }
);


export default mongoose.model("company", modelSchema);
