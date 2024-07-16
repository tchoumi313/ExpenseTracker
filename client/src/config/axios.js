import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080"

    // baseURL: "https://api-expense-log.vercel.app",
});

export default axiosInstance;
