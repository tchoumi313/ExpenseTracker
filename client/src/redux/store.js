import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./edit/editSlice";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    edit: editReducer,
    auth: authReducer,
  },
});

export default store;
