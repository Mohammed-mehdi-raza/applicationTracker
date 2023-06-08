"use client";

import { Application, ApplicationContextType } from "@/types/application";
import { createContext, useContext, useState ,useEffect } from "react";
import * as api from "../app/redux/services/userApi";
import { useAppDispatch } from "@/app/redux/hooks";
import {login} from "../app/redux/features/userSlice";
import { Search } from "@/types/search";

export const appContext = createContext<ApplicationContextType | {}>({application:{},setApplication:()=>{},search:{},setSearch:()=>{}});

export const useAppContext=()=>(useContext(appContext) as ApplicationContextType);

export const ApplicationProvider=({children}:any)=>{
    const [application,setApplication]=useState<Application>({});
    const [search,setSearch]=useState<Search>({});
    const dispatch = useAppDispatch();

    useEffect(()=>{
        api.PROFILE().then(us=>{
            if(us.data.success){
            dispatch(login(us.data.user));
            }
        })
    },[]);

    return (
        <appContext.Provider value={{application,setApplication,search,setSearch}}>
            {children}
        </appContext.Provider>
    )
}