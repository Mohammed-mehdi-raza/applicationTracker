"use client";

import React,{useEffect} from "react";
import { Application } from '@/types/application';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAppContext } from './client';
import { useAppDispatch } from "@/app/redux/hooks";
import { del } from "@/app/redux/features/applicationsSlice";
import * as api from "../app/redux/services/applicationApi";
import { toast } from "react-hot-toast";
import {green} from "@mui/material/colors"

const Application = (props:Application) => {
    const ctc:string=String(props.CTC);
    const dispatch = useAppDispatch();

    const {application,setApplication} =useAppContext();

    const editHandler=()=>{
        setApplication(props);
    }

    const deleteHandler=async()=>{
        try {
            const us = await api.DELETE(props);
            if(!us.data.success){
                toast.error(us.data.message);
            }
            dispatch(del(props));
            toast.success(us.data.message);
        } catch (error:any) {
            toast.error(error.message);
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
            <Toolbar className='app'>
                <Typography color={green[500]} >{props.Name}</Typography>
                <Typography color={green[500]}>{props.Role}</Typography>
                <Typography color={green[500]}>{props.Location} </Typography>
                <Typography color={green[500]}>{ctc} </Typography>
                <Typography color={green[500]}>{props.Status}</Typography>
                <Button variant='text' color="secondary" onClick={editHandler} ><EditIcon/> </Button>
                <Button variant='text' color="error" onClick={deleteHandler} ><DeleteIcon/> </Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Application;
