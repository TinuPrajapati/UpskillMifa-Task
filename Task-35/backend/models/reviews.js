import mongoose from "mongoose";
import { Schema } from "mongoose";

const reviewSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter title"]
    },
    content:{
        type:String,
        required:[true,"Please enter content"]
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const Review = mongoose.model("Review",reviewSchema);

export default Review;