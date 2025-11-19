import express from "express";
import { verifyToken } from "../middleware/protected.js";
import { authorizeRole } from "../middleware/roleMiddleware.js";
import { completed_project, create_project, delete_project, ongoing_project, upcoming_project, update_project, view_my_project } from "../controllers/Project.controllers.js";

const router = express.Router()

// Admin Routes
// router.get("/admin", verifyToken, authorizeRole("admin"), admin)
router.get("/my-projects", verifyToken, view_my_project)
router.post("/create-project", verifyToken, authorizeRole("admin", "mobilizer"), create_project)
router.put("/upcoming-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), upcoming_project)
router.put("/ongoing-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), ongoing_project)
router.put("/completed-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), completed_project)

router.put("/updated-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), update_project)
router.delete("/:id", verifyToken, authorizeRole("admin", "mobilizer"), delete_project)




export default router;
