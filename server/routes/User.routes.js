import express from "express";
import { admin, kyc_approval, kyc_rejection, kyc_upload, manager, user, user_profile } from "../controllers/User.controllers.js";
import { verifyToken } from "../middleware/protected.js";
import { authorizeRole } from "../middleware/roleMiddleware.js";

const router = express.Router()

// Admin Routes
router.get("/admin", verifyToken, authorizeRole("admin"), admin)
router.put("/kyc-approval/:id", verifyToken, authorizeRole("admin"), kyc_approval)
router.put("/kyc-rejection/:id", verifyToken, authorizeRole("admin"), kyc_rejection)

// Both Admin and Manager
router.get("/manager", verifyToken, manager)


// Everyone
router.get("/user", verifyToken, user)
router.get("/user-profile", verifyToken, user_profile)

router.post("/kyc-upload", verifyToken, kyc_upload)

export default router;
