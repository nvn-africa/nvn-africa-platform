import mongoose from "mongoose"
import KYC from "../models/Kyc.model.js"
import User from "../models/User.model.js"

export const admin = async (req, res) => {
    try {
        res.json({ message: "welcome admin" })
    } catch (error) {
        res.status(500).json({ message: "Error in admin controller", error: error })
    }
}

export const manager = async (req, res) => {
    try {
        res.json({ message: "welcome admin and manager" })
    } catch (error) {
        res.status(500).json({ message: "Error in manager controller", error: error })
    }
}

export const user = async (req, res) => {
    try {
        res.json({ message: "welcome all" })
    } catch (error) {
        res.status(500).json({ message: "Error in user controller", error: error })
    }
}


export const kyc_upload = async (req, res) => {
    try {
        const { document_type, file_url, selfie_url, rejection_reason } = req.body;

        if (!document_type || !file_url || !selfie_url) return res.status(400).json({ message: "All fields are required" })

        const user_id = req.user._id;

        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const userExists = await User.findById(user_id);

        if (!userExists) return res.status(400).json({ message: "This user does not exist" })

        const kycExists = await KYC.findOne({ user_id });

        if (kycExists) {
            return res.status(400).json({ message: "KYC already submitted and pending verification" });
        }

        const kyc_verify = new KYC({
            user_id: user_id,
            document_type,
            file_url, selfie_url,
            rejection_reason
        })

        await kyc_verify.save();

        return res.status(201).json({
            success: true,
            message: `KYC for ${user_id} was uploaded`,
            data: kyc_verify
        });
    } catch (error) {
        res.status(500).json({ message: "Error in kyc_verification controller", error: error })
    }
}



export const kyc_approval = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid KYC ID" });
        }

        const approvedKyc = await KYC.findById(id);

        if (!approvedKyc) return res.status(400).json({ message: "This kyc does not exist" })

        const status = approvedKyc.status || " "
        const adminId = req.user._id

        if (status === "verified") return res.status(400).json({ message: "This kyc has already been verified" })

        if (!mongoose.Types.ObjectId.isValid(adminId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        approvedKyc.status = "verified";
        approvedKyc.reviewed_by = adminId;

        await approvedKyc.save();


        return res.status(201).json({
            success: true,
            message: `KYC for ${approvedKyc.user_id} was verified by ${req.user.username}`,
            data: approvedKyc
        });
    } catch (error) {
        res.status(500).json({ message: "Error in kyc_approval controller", error: error })
    }
}


export const kyc_rejection = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid KYC ID" });
        }

        const uploadedKyc = await KYC.findById(id);

        if (!uploadedKyc) return res.status(400).json({ message: "This kyc does not exist" })

        const status = uploadedKyc.status || " "
        const adminId = req.user._id

        if (status === "rejected") return res.status(400).json({ message: "This kyc has already been rejected" })

        if (!mongoose.Types.ObjectId.isValid(adminId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        uploadedKyc.status = "rejected";
        uploadedKyc.reviewed_by = adminId;

        await uploadedKyc.save();


        return res.status(201).json({
            success: true,
            message: `KYC for ${uploadedKyc.user_id} was rejected by ${req.user.username}`,
            data: uploadedKyc
        });
    } catch (error) {
        res.status(500).json({ message: "Error in kyc_approval controller", error: error })
    }
}


export const user_profile = async (req, res) => {
    try {
        const userId = req.user._id;
        const userProfile = await User.findById(userId).select("-password");
        if (!userProfile) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.status(200).json({ message: "User profile fetched successfully", data: userProfile })

    } catch (error) {
        res.status(500).json({ message: "Error in user_profile controller", error: error })
    }
}

