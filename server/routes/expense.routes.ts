import exp from "constants";
import express, {Router} from "express";
import { createExpense, deleteExpense, getExpenses, setLimit } from "../controllers/expense.controller";import protectRoute from "../middlewares/protectRoute";
import { set } from "mongoose";


const expenseRouter: Router = express.Router();
expenseRouter.get("/", protectRoute,getExpenses);
expenseRouter.post("/create", protectRoute,createExpense);
expenseRouter.delete("/:id", protectRoute,deleteExpense);
expenseRouter.patch('/limit',protectRoute,setLimit);

export default expenseRouter;