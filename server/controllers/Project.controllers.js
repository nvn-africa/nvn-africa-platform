import mongoose from "mongoose";
import User from "../models/User.model.js";
import Project from "../models/Project.model.js";

export const view_my_project = async (req, res) => {
    try {
        const userId = req.user._id;

        const my_projects = await Project.find({ project_lead: userId });
        return res.status(200).json({
            success: true,
            message: `These are my projects.`,
            data: my_projects
        });
    } catch (error) {
        res.status(500).json({ message: "Error in update_project controller", error });
    }
}

export const create_project = async (req, res) => {
    try {
        const { title, description, location, start_date, end_date, requirements } = req.body;

        if (!title || !description || !location || !start_date || !end_date || !requirements) {
            return res.status(400).json({ message: "All fields are required" })
        }
        if (!Array.isArray(requirements)) {
            return res.status(400).json({ message: "Requirements must be an array" });
        }

        const projectExists = await Project.findOne({ title });

        if (projectExists) {
            return res.status(400).json({ message: "project already submitted and pending verification" });
        }

        const project = new Project({
            title,
            description,
            project_lead: req.user._id,
            location,
            start_date,
            end_date,
            requirements: requirements,
            created_by: req.user._id
        })

        await project.save();

        return res.status(201).json({
            success: true,
            message: `project created and ${req.user._id} is the project lead`,
            data: project
        });
    } catch (error) {
        res.status(500).json({ message: "Error in create_project controller", error })
    }
}

const updateProjectStatus = async (req, res, newStatus) => {
    try {

        const userId = req.user._id;

        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Project ID" });
        }

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        if (project.project_lead.toString() !== userId.toString() && req.user.role !== "admin") {
            return res.status(403).json({ message: 'You are not authorized to update this project status' })
        }


        // if already same status
        if (project.status === newStatus) {
            return res.status(400).json({ message: `Project is already ${newStatus}` });
        }

        project.status = newStatus;


        await project.save();

        return res.status(200).json({
            success: true,
            message: `Project is now ${newStatus} by ${req.user.username}`,
            data: project
        });

    } catch (error) {
        return res.status(500).json({ message: "Error updating project status", error });
    }
}


export const upcoming_project = (req, res) =>
    updateProjectStatus(req, res, "upcoming");

export const ongoing_project = (req, res) =>
    updateProjectStatus(req, res, "ongoing");

export const activate_project = (req, res) =>
    updateProjectStatus(req, res, "active");

export const completed_project = (req, res) =>
    updateProjectStatus(req, res, "completed");


export const update_project = async (req, res) => {
    try {
        const userId = req.user._id;

        const { id } = req.params;
        const { title, description, project_lead, location, start_date, end_date, neededVolunteers, requirements } = req.body;



        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid project ID" });
        }

        const projectExists = await Project.findById(id);

        if (!projectExists) {
            return res.status(404).json({ message: "project does not exist" });
        }

        if (project_lead) {
            if (!mongoose.Types.ObjectId.isValid(project_lead)) {
                return res.status(400).json({ message: "Invalid project_lead ID" });
            }
            const userExists = await User.findById(project_lead);

            if (!userExists) return res.status(400).json({ message: "This project_lead does not exist" })
            projectExists.project_lead = project_lead

        }
        if (userId.toString() !== project_lead.toString()) {
            return res.status(403).json({ message: 'You are not authorized to update this project' })
        }

        if (title) projectExists.title = title;
        if (description) projectExists.description = description;
        if (location) projectExists.location = location;
        if (start_date) projectExists.start_date = start_date;
        if (end_date) projectExists.end_date = end_date;
        if (neededVolunteers) projectExists.neededVolunteers = neededVolunteers;

        if (requirements) {
            if (!Array.isArray(requirements)) {
                return res.status(400).json({ message: "Requirements must be an array" });
            }
            projectExists.requirements = requirements;
        }


        await projectExists.save();

        return res.status(200).json({
            success: true,
            message: `Project updated successfully. ${userId.username} is now the project lead.`,
            data: projectExists
        });
    } catch (error) {
        res.status(500).json({ message: "Error in update_project controller", error });
    }
}


// export const delete_project = async (req, res) => {
//     try {
//         const { id } = req.params;

//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({ message: "Invalid Project ID" });
//         }

//         const projectExists = await Project.findById(id);
//         if (!projectExists) {
//             return res.status(404).json({ message: "project does not exist" });
//         }


//         await projectExists.deleteOne();

//         return res.status(200).json({
//             success: true,
//             message: `Project deleted!`,
//             data: projectExists
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Error in delete_project controller", error });
//     }
// }

export const delete_project = async (req, res) => {
    try {
        const userId = req.user._id;

        const { id } = req.params;


        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid project ID" });
        }

        const projectExists = await Project.findById(id);
        if (!projectExists) {
            return res.status(404).json({ message: "project does not exist" });
        }


        if (userId.toString() !== projectExists.project_lead.toString()) {
            return res.status(403).json({ message: `You are not authorized to update this project ${projectExists.title} ${userId} ${projectExists.project_lead}` })
        }



        await Project.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: `Project deleted by ${req.user.username}`,
        });
    } catch (error) {
        res.status(500).json({ message: "Error in delete_project controller", error });
    }
}
