"use client";

import React,{ReactNode, createContext, useState} from "react";
import { User , UserContextType } from "@/types/user";

export const context = createContext<UserContextType | {}>({user:{}})

export const ContextProvider=({children}:any)=>{
    const [user,setUser]=useState<User>({});
    return (
        <context.Provider value={{user,setUser}}>
            {children}
            {/* <Toaster/> */}
        </context.Provider>
    )
}