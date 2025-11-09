import express from "express";
import { admin, kyc_approval, kyc_rejection, kyc_verification, manager, user } from "../controllers/User.controllers.js";
import { verifyToken } from "../middleware/protected.js";
import { authorizeRole } from "../middleware/roleMiddleware.js";

const router = express.Router()

// Admin Routes
router.get("/admin", verifyToken, authorizeRole("admin"), admin)
router.post("/kyc-approval", verifyToken, authorizeRole("admin"), kyc_approval)
router.post("/kyc-rejection", verifyToken, authorizeRole("admin"), kyc_rejection)

// Both Admin and Manager
router.get("/manager", verifyToken, manager)


// Everyone
router.get("/user", verifyToken, user)

router.post("/kyc-verification", verifyToken, kyc_verification)

export default router;
