import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
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


    status: {
        type: String,
        enum: ["upcoming", "ongoing", "completed"],
        default: "upcoming"
    },
    start_date: {
        type: Date,
        required: false
    },

    end_date: {
        type: Date,
        required: false
    },

    requirements: [String],
    neededVolunteers: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    images: [String],

}, { timestamps: true })

const Project = mongoose.model("Project", projectSchema);
export default Project; 