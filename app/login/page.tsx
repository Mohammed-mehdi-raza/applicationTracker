"use client";

import React,{useState} from 'react';
import { TextField ,Button } from '@mui/material';
import Link from "next/link";
import { User } from '@/types/user';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { login } from '../redux/features/userSlice';
import { redirect } from 'next/navigation';

const Page = () => {

  const [data,setData]=useState<User>({email:"",password:""});

  const dispatch:any=useAppDispatch();
  const user=useAppSelector((state)=>state.userReducer.value);

  const handleChange=(e:any)=>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const handleSubmit=()=>{
    dispatch(login(data));
  }

  if(user.email){
    redirect("/")
  }

  return (
    <div className="container">
      <div className='login'>
        <TextField type="email" required variant='outlined' color='success' placeholder='Username(email)' name='email' value={data.email} onChange={handleChange}></TextField>
        <TextField type="password" required variant='outlined' color='primary' placeholder='Password' name='password' value={data.password} onChange={handleChange}></TextField>
        <center><Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>Submit</Button></center>
        <center><p>OR</p></center>
        <center><Link href="/register" className='link'>New User</Link></center>
      </div>
    </div>
  )
}

export default Page;
