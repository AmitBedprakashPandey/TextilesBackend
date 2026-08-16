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
            unique:true,
        },
        pan: {
            type: String,
            unique:true,
        },
        phone: {
            type: String,
            unique:true,
        },
        email: {
            type: String,
            unique:true,
        },
        mobile: {
            type: String,
            unique:true,unique:true,

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
