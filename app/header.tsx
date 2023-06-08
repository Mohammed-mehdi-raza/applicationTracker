"use client";

import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Link from "next/link";
import * as React from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import {logout} from "./redux/features/userSlice";
import * as api from "./redux/services/userApi";
import { toast } from 'react-hot-toast';

const Header = () => {
  const user = useAppSelector((state)=>state.userReducer.value);
  const dispatch = useAppDispatch();

  const logoutHandeler=async()=>{
    try{
      const us = await api.LOGOUT();
      if(!us.data.success){
        toast.error(us.data.message);
      }
      toast.success(us.data.message);
      dispatch(logout());
    } catch(err:any){
      return toast.error(err.message);
    }
  }
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='nav'>
          <Link href={"/"}>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <ContentPasteSearchIcon/>
            </IconButton>
          </Link>
          {
            user?.email?
            <Button onClick={logoutHandeler} color="secondary">Logout</Button>
            : <Link className='link' href={"/login"}>Login</Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
