import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export const verifyToken = async (req, res, next) => {
    try {
        console.log("AUTH HEADER:", req.headers.authorization);
        // let token;
        let authHeader = req.headers.Authorization || req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decode.userId).select("-password");
        if (!user) return res.status(401).json({ message: "Invalid token user" });

        req.user = user;
        console.log("The decoded user is: ", req.user);
        next();
    } catch (error) {
        res.status(400).json({ message: "Token is not valid" })
    }

}