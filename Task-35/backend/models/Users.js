import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter your email"],
    }
});

const User = mongoose.model("User", userSchema);

export default User;