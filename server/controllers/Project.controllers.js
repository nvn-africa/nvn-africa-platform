import mongoose from "mongoose";
import User from "../models/User.model.js";
import Project from "../models/Project.model.js";



export const create_project = async (req, res) => {
    try {
        const { project_name, project_description, project_lead, location, start_date, end_date } = req.body;

        if (!project_name || !project_description || !project_lead || !location || !start_date || !end_date) {
            return res.status(400).json({ message: "All fields are required" })
        }

        if (!mongoose.Types.ObjectId.isValid(project_lead)) {
            return res.status(400).json({ message: "Invalid project_lead ID" });
        }
        if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
            return res.status(400).json({ message: "Invalid project_lead ID" });
        }

        const userExists = await User.findById(project_lead);

        if (!userExists) return res.status(400).json({ message: "This project_lead does not exist" })

        const projectExists = await Project.findOne({ project_name });

        if (projectExists) {
            return res.status(400).json({ message: "project already submitted and pending verification" });
        }

        const project = new Project({
            project_name,
            project_description,
            project_lead,
            location,
            start_date,
            end_date,
            created_by: req.user._id
        })

        await project.save();

        return res.status(201).json({
            success: true,
            message: `project created and ${project_lead} is the project lead`,
            data: project
        });
    } catch (error) {
        res.status(500).json({ message: "Error in create_project controller", error: error })
    }
}

const updateProjectStatus = async (req, res, newStatus, actionField) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Project ID" });
        }

        const project = await Project.findById(id);
        if (!project) return res.status(404).json({ message: "Project not found" });

        // if already same status
        if (project.status === newStatus) {
            return res.status(400).json({ message: `Project is already ${newStatus}` });
        }

        project.status = newStatus;

        if (actionField) {
            project[actionField] = req.user._id;
        }

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


export const approve_project = (req, res) =>
    updateProjectStatus(req, res, "approved", "approved_by");

export const reject_project = (req, res) =>
    updateProjectStatus(req, res, "rejected", "rejected_by");

export const activate_project = (req, res) =>
    updateProjectStatus(req, res, "active");

export const complete_project = (req, res) =>
    updateProjectStatus(req, res, "completed");


export const update_project = async (req, res) => {
    try {
        const { id } = req.params;
        const { project_name, project_description, project_lead, location, start_date, end_date } = req.body;


        if (!mongoose.Types.ObjectId.isValid(project_lead)) {
            return res.status(400).json({ message: "Invalid project_lead ID" });
        }
        if (!mongoose.Types.ObjectId.isValid(req.user._id)) {
            return res.status(400).json({ message: "Invalid project_lead ID" });
        }

        const userExists = await User.findById(project_lead);

        if (!userExists) return res.status(400).json({ message: "This project_lead does not exist" })

        const projectExists = await Project.findById(id);

        if (!projectExists) {
            return res.status(404).json({ message: "project does not exist" });
        }


        projectExists.project_name = project_name || projectExists.project_name;
        projectExists.project_description = project_description || projectExists.project_description;
        projectExists.project_lead = project_lead || projectExists.project_lead;

        projectExists.location = location || projectExists.location;
        projectExists.start_date = start_date || projectExists.start_date;
        projectExists.end_date = end_date || projectExists.end_date;

        // projectExists.edited_by = req.user._id || projectExists.edited_by;


        await projectExists.save();

        return res.status(200).json({
            success: true,
            message: `Project updated successfully. ${project_lead} is now the project lead.`,
            data: projectExists
        });
    } catch (error) {
        res.status(500).json({ message: "Error in update_project controller", error });
    }
}


export const delete_project = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Project ID" });
        }

        const projectExists = await Project.findById(id);
        if (!projectExists) {
            return res.status(404).json({ message: "project does not exist" });
        }


        await projectExists.deleteOne();

        return res.status(200).json({
            success: true,
            message: `Project deleted!`,
            data: projectExists
        });
    } catch (error) {
        res.status(500).json({ message: "Error in delete_project controller", error });
    }
}
