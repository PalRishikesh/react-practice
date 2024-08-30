import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice"


// store

const store = configureStore({
    reducer:{
        users:userSlice.reducer,
    }
})


export default store;