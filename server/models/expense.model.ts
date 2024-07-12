import mongoose, { Types } from "mongoose";

interface ExpenseType {
    user : Types.ObjectId,
    name : string,
    amount : number,
    date : Date
}

const expenseSchema = new mongoose.Schema<ExpenseType>({ 
    user : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
    name : {type : String, required : true},
    amount : {type : Number, required : true},
    date : {type : Date, required : true}
})

const Expense = mongoose.model<ExpenseType>("Expense", expenseSchema);
export default Expense