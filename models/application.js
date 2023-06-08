import mongoose from "mongoose";

const schema = new mongoose.Schema({
    Name: {
        type:String,
        required:true,
    },
	Role: {
        type:String,
        required:true,
    },
	Status:{
        type:String,
        required:true,
    },
	Location: {
        type:String,
        required:true,
    },
	CTC: {
        type:Number,
        required:true,
    },
	CreatedBy:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
	CreatedAt:{
        type:Date,
        default:Date.now,
    }, 
})

mongoose.models={};

export const Application = mongoose.model("Application",schema);