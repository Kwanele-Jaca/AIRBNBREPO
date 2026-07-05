import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
    },

    city:{
        type:String,
        required:true,
    },

    type:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    guests:Number,

    bedrooms:Number,

    bathrooms:Number,

    price:Number,

    images:[String],

    host:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

    rating:{
        type:Number,
        default:4.9,
    },

    reviews:{
        type:Number,
        default:0,
    },

    amenities:[String],

    weeklyDiscount:{
        type:Number,
        default:10,
    },

    cleaningFee:{
        type:Number,
        default:250,
    },

    serviceFee:{
        type:Number,
        default:180,
    },

    whereYouWillSleep:{
        bedroom:String,
        bed:String,
    },

    checkIn:{
        type:String,
        default:"14:00",
    },

    checkOut:{
        type:String,
        default:"10:00",
    },

    houseRules:{
        type:String,
        default:"No smoking. No parties.",
    },

    healthSafety:{
        type:String,
        default:"Smoke alarm and first aid kit available.",
    },

    cancellationPolicy:{
        type:String,
        default:"Free cancellation within 48 hours.",
    }

},
{timestamps:true}
);

export default mongoose.model("Property",propertySchema);