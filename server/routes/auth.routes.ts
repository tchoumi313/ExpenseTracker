import express, { Router } from 'express';
import { signUp , login } from '../controllers/auth.controller';


const authRouter : Router = express.Router();

authRouter.post('/signup',signUp)
authRouter.post('/login',login)


export default authRouter ; 
