import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Application } from "@/types/application";
import { Search } from "@/types/search";

const initialState={
    value:[{} as Application],
    totalPage:0 as number
}

// const initialState:Application[]=[];

export const applications=createSlice({
    name:"applications",
    initialState,
    reducers:{
        fetchAll:(state,action:PayloadAction<[Application]>)=>{
            state.value= action.payload;
        },
        add:(state,action:PayloadAction<Application>)=>{
            state.value = [...state.value,action.payload];
        },
        update:(state,action:PayloadAction<Application>)=>{
            state.value=state.value.map((i:Application)=>(i._id === action.payload._id) ? action.payload :i);
        },
        del:(state,action:PayloadAction<Application>)=>{
            state.value = state.value.filter((i:Application)=>i._id !== action.payload._id);
        },
        filter:(state,action:PayloadAction<[Application]>)=>{
            state.value = action.payload;
        },
        setPage:(state,action:PayloadAction<number>)=>{
            state.totalPage=action.payload;
        }
    }
});

export const {fetchAll,add,update,del,filter,setPage} = applications.actions;

export default applications.reducer;
