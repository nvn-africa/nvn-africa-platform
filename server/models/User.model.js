import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "mobilizer","chief_mobilizer", "general_mobilizer","community_lead"],
        default: "mobilizer"
    },

    isBanned: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
