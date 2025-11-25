import mongoose from "mongoose";

const projectRequestSchema = new mongoose.Schema({
    volunteer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    },
}, { timestamps: true });

const ProjectRequest = mongoose.model("Project Request", projectRequestSchema);
export default ProjectRequest; 