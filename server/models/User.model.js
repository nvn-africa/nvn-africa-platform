import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,
        unique: true
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
        enum: ["admin", "manager", "volunteer"],
        default: "volunteer"
    },

    isBanned: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;