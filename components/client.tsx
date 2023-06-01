"use client";

import { Application, ApplicationContextType } from "@/types/application";
import { createContext, useContext, useState } from "react";

export const appContext = createContext<ApplicationContextType | {}>({application:{},setApplication:()=>{}});

export const useAppContext=()=>(useContext(appContext) as ApplicationContextType);

export const ApplicationProvider=({children}:any)=>{
    const [application,setApplication]=useState<Application>({});

    return (
        <appContext.Provider value={{application,setApplication}}>
            {children}
            {/* <Toaster/> */}
        </appContext.Provider>
    )
}