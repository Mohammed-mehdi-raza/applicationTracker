"use client";

import React,{useEffect} from "react";
import { Application } from '@/types/application';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAppContext } from './client';
import { useAppDispatch } from "@/app/redux/hooks";
import { del } from "@/app/redux/features/applicationsSlice";

const Application = (props:Application) => {
    const ctc:string=String(props.CTC);
    const dispatch = useAppDispatch();

    const {application,setApplication} =useAppContext();

    const editHandler=()=>{
        setApplication(props);
    }

    const deleteHandler=()=>{
        dispatch(del(props));
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
            <Toolbar className='app'>
                <Typography>{props.Name}</Typography>
                <Typography>{props.Role}</Typography>
                <Typography>{props.Location} </Typography>
                <Typography>{ctc} </Typography>
                <Typography>{props.Status}</Typography>
                <Button variant='text' color="secondary" onClick={editHandler} ><EditIcon/> </Button>
                <Button variant='text' color="error" onClick={deleteHandler} ><DeleteIcon/> </Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Application;
