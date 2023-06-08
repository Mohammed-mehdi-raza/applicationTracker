"use client";

import React,{useState} from 'react';
import { TextField ,Button } from '@mui/material';
import Link from "next/link";
import { User } from '@/types/user';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { login } from '../redux/features/userSlice';
import { redirect } from 'next/navigation';
import * as api from "../redux/services/userApi";
import { toast } from 'react-hot-toast';

const Page = () => {

  const [data,setData]=useState<User>({email:"",password:""});

  const dispatch:any=useAppDispatch();
  const user=useAppSelector((state)=>state.userReducer.value);

  const handleChange=(e:any)=>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit=async()=>{
    
    try {
      const us = await api.LOGIN(data);

      if(!us.data.success){
        return toast.error(us.data.message);
      }

      dispatch(login(us.data.user));

      toast.success(us.data.message);

    } catch (error:any) {

      return toast.error(error);

    }
  }

  if(user._id){
    redirect("/")
  }

  return (
    <div className="container">
      <div className='login'>
        <TextField type="email" required variant='outlined' color='secondary' placeholder='Username(email)' name='email' value={data.email} onChange={handleChange}></TextField>
        <TextField type="password" required variant='outlined' color='secondary' placeholder='Password' name='password' value={data.password} onChange={handleChange}></TextField>
        <center><Button type="submit" variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button></center>
        <center><p>OR</p></center>
        <center><Link href="/register" className='link'>New User</Link></center>
      </div>
    </div>
  )
}

export default Page;
