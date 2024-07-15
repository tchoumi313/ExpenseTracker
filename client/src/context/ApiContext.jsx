import { createContext, useState, useContext } from "react";
import axiosInstance from "../config/axios";
export const ApiContext = createContext()


export const ApiProvider = ({children}) =>{
  const [expenseStats, setExpenseStats] = useState([]);
  const month = 7;
  const year = 2024;

  const fetchExpenseStats = async () => {
    try{
      const res = await axiosInstance.get(`/api/expense/stats?month=${month}&year=${year}`, { withCredentials: true });
      setExpenseStats(res.data);
    }catch(error){
      console.log(error.message);
    }
  }

  const value = {
    expenseStats,
    fetchExpenseStats,
  }

  return  <ApiContext.Provider value={value}>{children}</ApiContext.Provider>

}

export const useApi = () =>useContext(ApiContext)