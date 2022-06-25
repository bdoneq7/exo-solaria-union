import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    // firstname: {
    //     type: String,
    //     required: true,
    // },
    // lastname: {
    //     type: String,
    //     required: true,
    // },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    stripeCustomerId: {
        type: String,
        required: true,
    },
});

export default mongoose.model("User", userSchema);