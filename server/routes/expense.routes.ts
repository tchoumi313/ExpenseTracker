import exp from "constants";
import express, {Router} from "express";
import { createExpense, deleteExpense, getExpenses } from "../controllers/expense.controller";import protectRoute from "../middlewares/protectRoute";


const expenseRouter: Router = express.Router();
expenseRouter.get("/", protectRoute,getExpenses);
expenseRouter.post("/create", protectRoute,createExpense);
expenseRouter.delete("/:id", protectRoute,deleteExpense);

export default expenseRouter;