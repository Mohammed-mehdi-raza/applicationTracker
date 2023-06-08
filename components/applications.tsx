"use client"

import React, { useEffect } from 'react';
import Appplication from "./application";
import { Application } from '@/types/application';
import ApplicationHead from "./applicationHead";
import * as api from "../app/redux/services/applicationApi";
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import toast from "react-hot-toast";
import { fetchAll, setPage } from '@/app/redux/features/applicationsSlice';
import { User } from '@/types/user';

const fetchApplication = async(us:User["_id"],dispatch:any)=>{
  const ap = await api.FETCHALL(us,1);
  if(!ap.data.success){
    toast.error(ap.data.message);
  }
  dispatch(fetchAll(ap.data.applications));
  dispatch(setPage(ap.data.totalPage));
}

const Applications = () => {

  const application:Application[] = useAppSelector((state)=>state.applicationReducer.value);
  const us:User["_id"] = useAppSelector((state)=>state.userReducer.value._id);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    fetchApplication(us,dispatch).then(()=>{
      console.log("ok");
    });
  },[])

  return (
    <div className='application'>
      {
        application?.length ? <ApplicationHead/> :<></>
      }
      {
        application?.map((i:Application)=>(
          <Appplication key={i._id} {...i}/>
        ))
      }
    </div>
  )
}

export default Applications
