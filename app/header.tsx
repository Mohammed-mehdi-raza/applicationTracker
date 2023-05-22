"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { context } from '@/components/client';
import Link from "next/link";
import { UserContextType } from '@/types/user';

const Header = () => {

  const {user} = React.useContext(context) as UserContextType;

  const logoutHandeler=()=>{
    console.log("wmkn");
  }
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='nav'>
          <Link href={"/"}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <ContentPasteSearchIcon/>
            </IconButton>
          </Link>
          {
            user?._id ?
            <Button onClick={logoutHandeler} color="inherit">Logout</Button>
            : <Link href={"/login"}>Login</Link>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
