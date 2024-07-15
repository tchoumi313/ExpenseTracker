import express, { Router } from 'express';
import { signUp , login, logout } from '../controllers/auth.controller';
import protectRoute from '../middlewares/protectRoute';


const authRouter : Router = express.Router();

authRouter.post('/signup',signUp)
authRouter.post('/login',login)
authRouter.post('/logout',protectRoute,logout)


export default authRouter ; 
