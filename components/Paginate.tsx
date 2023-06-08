import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import toast from "react-hot-toast";
import { useAppContext } from './client';
import * as api from "../app/redux/services/applicationApi";
import { fetchAll , setPage ,filter } from '@/app/redux/features/applicationsSlice';

const Paginate = () => {

  const [page,setP] = useState(1);

  const total = useAppSelector((state)=>state.applicationReducer.totalPage);

  const id = useAppSelector((state)=>state.userReducer.value._id);

  const {search} = useAppContext();

  const dispatch = useAppDispatch();

  const handleChange=async(event: React.ChangeEvent<unknown>, value: number)=>{
    try {
      if(search.Category){
        const res = await api.FILTER(search,id,value);
        if(!res.data.success){
          toast.error(res.data.message);
        }
        dispatch(filter(res.data.app));
        dispatch(setPage(res.data.totalPage));
      }else{
        const ap = await api.FETCHALL(id,value);
        if(!ap.data.success){
          toast.error(ap.data.message);
        }
        dispatch(fetchAll(ap.data.applications));
        dispatch(setPage(ap.data.totalPage));
      }
    } catch (error:any) {
      toast.error(error.message)
    }
    setP(value);
  }
  return (
    <div>
      <Pagination page={page} onChange={handleChange} variant="outlined" color='secondary' count={total} />
    </div>
  )
}

export default Paginate;
