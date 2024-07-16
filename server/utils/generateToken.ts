import jwt from "jsonwebtoken";
import {Types} from "mongoose";
import {  Response } from "express";



const generateToken = (userId:Types.ObjectId, res:Response) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET as string);

    res.cookie("token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true,
        secure: true,
        domain : 'vercel.app'   
    })

return token;
}

export default generateToken;

