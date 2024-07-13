"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const protectRoute = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "You are not authorized" });
    }
    try {
        const user = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        if (!user) {
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = user;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "You are not authorized" });
    }
};
exports.default = protectRoute;
