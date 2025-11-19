import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true,
        unique: true
    },

    project_description: {
        type: String,
        required: true
    },

    project_lead: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    location: {
        type: String,
        required: true
    },
    volunteers: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        check_in_time: Date,
        check_out_time: Date,
        hours_earned: Number
    }],

    status: {
        type: String,
        enum: ["pending", "active", "completed", "approved", "rejected"],
        default: "pending"
    },
    start_date: {
        type: Date,
        required: false
    },

    end_date: {
        type: Date,
        required: false
    },

    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    approved_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    rejected_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

}, { timestamps: true })

const Project = mongoose.model("Project", projectSchema);
export default Project; 