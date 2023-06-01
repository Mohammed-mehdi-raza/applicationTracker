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

const Header = () => {
  const user = useAppSelector((state)=>state.userReducer.value);
  const dispatch = useAppDispatch();

  const logoutHandeler=()=>{
    dispatch(logout());
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
            <Button onClick={logoutHandeler} color="inherit">Logout</Button>
            : <Link className='link' href={"/login"}>Login</Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
