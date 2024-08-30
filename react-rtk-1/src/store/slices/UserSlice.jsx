import { createSlice } from "@reduxjs/toolkit";
import { clearAllUser } from "../action";

const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            
        },
        removeUser(state,action){
            state.splice(action.payload,1)
            console.log("hi + ",action.payload);
            
        },
        // deleteUsers(state,action){
        //     //Simple way
        //     // state.length = 0;
        //     return []
        // }
    },
    extraReducers(builder){
        // builder.addCase(userSlice.actions.deleteUsers,()=>{
        //     console.log("extra reducer");
        //     return [] //optin this line
        // })

        // we are taking action from action folder
        builder.addCase(clearAllUser,()=>{
            console.log("extra reducer");
            return [] //optin this line
        })
    }
})


export {
    userSlice
}

export const {addUser, removeUser, deleteUsers} = userSlice.actions; // In Actions, all reducers metnod will be available 