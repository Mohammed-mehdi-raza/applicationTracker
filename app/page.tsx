"use client";

import ApplicationForm from "@/components/applicationForm";
import Applications from "@/components/applications";
import Filter from "@/components/filter";
import { useAppSelector } from "./redux/hooks";
import { redirect } from "next/navigation";


export default function Home() {

  const user = useAppSelector((state)=>state.userReducer.value);

  if(!user.email){
    redirect("/login");
  }

  return (
    <div className="outer">
      <div className="main">
        <Applications/>
        <Filter/>
        <ApplicationForm/>
      </div>
      <div className="pagination"></div>
    </div>
  )
}
