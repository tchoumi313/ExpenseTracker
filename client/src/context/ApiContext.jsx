import { createContext, useState, useContext } from "react";
import axiosInstance from "../config/axios";
export const ApiContext = createContext()


export const ApiProvider = ({children}) =>{
  const [expenseStats, setExpenseStats] = useState([]);
    const [activeTab, setActiveTab] = useState("stats");

 
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const fetchExpenseStats = async () => {
    try{
      const res = await axiosInstance.get(`/api/expense/stats?month=${monthIndex + 1}&year=${year }`, { withCredentials: true });
      setExpenseStats(res.data);
    }catch(error){
      console.log(error.message);
    }
  }

  const value = {
    expenseStats,
    fetchExpenseStats,
    monthIndex,
    setMonthIndex,
    year,
    setYear,
    setActiveTab,
    activeTab
  }

  return  <ApiContext.Provider value={value}>{children}</ApiContext.Provider>

}

export const useApi = () =>useContext(ApiContext)