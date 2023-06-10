"use client";

import React,{useState,useEffect} from 'react';
import { TextField , Button } from '@mui/material';
import Link from 'next/link';
import { User } from '@/types/user';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { register } from '../redux/features/userSlice';
import { redirect } from 'next/navigation';
import {toast} from "react-hot-toast"
import * as api from "../redux/services/userApi";

const Page = () => {

  const [data,setData]=useState<User>({firstName:"",lastName:"",email:"",password:""});
  const [pass,setPass]=useState<any>({pass:"",cPass:""});
  const dispatch=useAppDispatch();
  const user=useAppSelector((state)=>state.userReducer.value);

  const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    if(e.target.name === "pass" || e.target.name === "cPass"){
      setPass({...pass,[e.target.name]:e.target.value});
    }else{
      setData({...data,[e.target.name]:e.target.value});
    }
  }

  const handleSubmit=async()=>{
    if(pass.pass===pass.cPass){
      try {
        const us = await api.REGISTER({...data,password:pass.pass});
        if(!us.data.success){
          return toast.error(us.data.message);
        }
        toast.success(us.data.message);
        dispatch(register(us.data.user));
      } catch (error:any) {
        toast.error(error);
      }


    }else{
      toast.error("password does not match");
    }
  }

  // if(user._id){
  //   redirect('/');
  // }

  useEffect(()=>{
    if(user._id){
      redirect('/');
    }
  },[user]);

  return (
    <div className="container">
        <div className="register">
            <div className="four">
                <TextField type="text" size="small" required variant='outlined' color='secondary' placeholder='First Name' name="firstName" value={data.firstName} onChange={handleChange}></TextField>
                <TextField type="text" size="small" required variant='outlined' color='secondary' placeholder='Last Name' name="lastName" value={data.lastName} onChange={handleChange}></TextField>
                <TextField type="email" size="small" required variant='outlined' color='secondary' placeholder='Email' name="email" value={data.email} onChange={handleChange}></TextField>
                <TextField type="password" size="small" required variant='outlined' color='secondary' placeholder='Password' name="pass" value={pass.pass} onChange={handleChange}></TextField>
            </div>
            <center><TextField type="password" size="small" required variant='outlined' color='secondary' placeholder='Confirm Password' name="cPass" value={pass.cPass} onChange={handleChange}></TextField></center>
            <center><Button type="submit" variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button></center>
            <center><p>OR</p></center>
            <center><Link href="/login" className='link'>Login</Link></center>
        </div>
    </div>
  )
}

export default Page
