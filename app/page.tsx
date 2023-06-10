"use client";

import ApplicationForm from "@/components/applicationForm";
import Applications from "@/components/applications";
import Filter from "@/components/filter";
import { redirect } from "next/navigation";
import { useAppSelector } from "./redux/hooks";
import Paginate from "@/components/Paginate";
import React , {useEffect} from "react";

export default function Home() {

  const user = useAppSelector((state)=>state.userReducer.value);

  useEffect(()=>{
    if(!user._id){
      console.log("hell");
      redirect("/login");
    }
  },[user])

  return (
    <div className="outer">
      <div className="main">
        <Applications/>
        <Filter/>
        <ApplicationForm/>
      </div>
      <div className="pagination">
        <Paginate/>
      </div>
    </div>
  )
}
