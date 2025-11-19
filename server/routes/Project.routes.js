import express from "express";
import { verifyToken } from "../middleware/protected.js";
import { authorizeRole } from "../middleware/roleMiddleware.js";
import { activate_project, approve_project, complete_project, create_project, delete_project, reject_project, update_project } from "../controllers/Project.controllers.js";

const router = express.Router()

// Admin Routes
// router.get("/admin", verifyToken, authorizeRole("admin"), admin)
router.post("/create-project", verifyToken, authorizeRole("admin"), create_project)
router.put("/approve-project/:id", verifyToken, authorizeRole("admin"), approve_project)
router.put("/reject-project/:id", verifyToken, authorizeRole("admin"), reject_project)
router.put("/activate-project/:id", verifyToken, authorizeRole("admin", "project_lead"), activate_project)
router.put("/complete-project/:id", verifyToken, authorizeRole("admin", "project_lead"), complete_project)


router.put("/:id", verifyToken, authorizeRole("admin"), update_project)
router.delete("/:id", verifyToken, authorizeRole("admin"), delete_project)




export default router;
