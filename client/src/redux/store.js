import { configureStore } from "@reduxjs/toolkit";
import editReducer from  "./edit/editSlice"

const store = configureStore({
    reducer: {
        edit: editReducer
    }
})

export default store;