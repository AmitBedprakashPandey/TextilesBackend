import { request } from "express";
import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
    {
        vendorCategory: {
            type: String,
            required: true,
        }
        ,vendorname: {
            type: String,
            required: true,
        },
        ownername: {
            type: String,
        },
        gstin: {
            type: String,
        },
        pan: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        mobile: {
            type: String,
            request: true,
            
        },
        address: {
            type: String,
            request: true,
            
        },
        address1: {
            type: String,
        },
        city: {
            type: String,
            request: true,
            
        },
        state: {
            type: String,
            request: true,
        },
        pincode: {
            type: String,
                required: true,
            
        },
        bankname: {
            type: String,
        },
        branch: {
            type: String,
        },
        ifsc: {
            type: String,
        },
        accountno: {
            type: String,
        },




    },
    { timestamps: true }
);

export default mongoose.model("vendor", modelSchema);
