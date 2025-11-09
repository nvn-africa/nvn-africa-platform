import mongoose from "mongoose";

const kycSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    document_type: {
        type: String,
        enum: ['national_id', 'passport', 'drivers_license', 'student_id'],
        required: true
    },
    file_url: {
        type: String,
        required: true
    },
    selfie_url: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "verified", "rejected"],
        default: "pending"
    },
    reviewed_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    rejection_reason: {
        type: String
    },
}, { timestamps: true })

const KYC = mongoose.model("Kyc", kycSchema);
export default KYC; 