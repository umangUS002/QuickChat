import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to proctect routes
export const proctectRoute = async (req,res,next) => {
    try {
        const token = req.headers.token;

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.userId).select("-password");

        if(!user) return res.json({sucess: false, message: "User not found"});

        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        return res.json({sucess: false, message: error.message});
    }   
}