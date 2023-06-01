import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Application } from "@/types/application";
import { Search } from "@/types/search";

const initialState={
    value:[{} as Application] 
}

// const initialState:Application[]=[];

export const applications=createSlice({
    name:"applications",
    initialState,
    reducers:{
        fetchAll:(state,action:PayloadAction<string>)=>{
            console.log(action.payload);
        },
        add:(state,action:PayloadAction<Application>)=>{
            console.log(action.payload);
        },
        update:(state,action:PayloadAction<Application>)=>{
            console.log(action.payload);
        },
        del:(state,action:PayloadAction<Application>)=>{
            console.log(action.payload);
        },
        filter:(state,action:PayloadAction<Search>)=>{
            console.log(action.payload);
        }
    }
});

export const {fetchAll,add,update,del,filter} = applications.actions;

export default applications.reducer;
