import express from "express";
import { verifyToken } from "../middleware/protected.js";
import { authorizeRole } from "../middleware/roleMiddleware.js";
import { approved_request, completed_project, create_project, delete_project, getStats, my_approved_projects, ongoing_project, project_request, rejected_request, upcoming_project, update_project, view_all_approved_project_requests, view_all_project, view_all_project_requests, view_all_rejected_project_requests, view_my_created_project } from "../controllers/Project.controllers.js";

const router = express.Router()


// PROJECTS
router.post("/create-project", verifyToken, authorizeRole("admin", "mobilizer"), create_project)
router.get("/view-projects", verifyToken, view_all_project)
// router.get("/projects/:id", verifyToken, get_single_project);

router.get("/my-approved-projects", verifyToken, my_approved_projects)

router.put("/updated-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), update_project)

router.put("/upcoming-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), upcoming_project)
router.put("/ongoing-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), ongoing_project)
router.put("/completed-project/:id", verifyToken, authorizeRole("admin", "mobilizer"), completed_project)
router.get("/created-projects", verifyToken, view_my_created_project)
router.delete("/:id", verifyToken, authorizeRole("admin", "mobilizer"), delete_project)



// REQUESTS 
router.get("/view-projects-requests", verifyToken, view_all_project_requests)
router.post("/project-request/:id", verifyToken, authorizeRole("volunteer"), project_request)
router.put("/approve-project-request/:id", verifyToken, authorizeRole("admin"), approved_request)
router.put("/reject-project-request/:id", verifyToken, authorizeRole("admin"), rejected_request)

router.get("/stats", getStats);

export default router;
