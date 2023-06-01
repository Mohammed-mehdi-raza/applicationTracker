import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState={
    value:{} as User
}

export const user=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action:PayloadAction<User>)=>{
            state.value=action.payload;
        },
        register:(state,action:PayloadAction<User>)=>{
            state.value=action.payload;
        },
        logout:(state)=>{
            state.value={}
        }
    }
})

export const {login,register,logout} = user.actions;

export default user.reducer;