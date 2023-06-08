"use client";

import { Application } from '@/types/application';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppContext } from './client';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { add, update } from '@/app/redux/features/applicationsSlice';
import * as api from "../app/redux/services/applicationApi";
import { User } from '@/types/user';
import { toast } from 'react-hot-toast';

const ApplicationForm = () => {

    const [applicationData,setApplicationData]=useState<Application>({Name:"",Role:"",Location:"",CTC:NaN,Status:'None'});
    const {application} =useAppContext();
    const dispatch = useAppDispatch();
    const id:User["_id"] = useAppSelector((state)=> state.userReducer.value._id);

    useEffect(()=>{
        if(application._id){
            setApplicationData(application);
        }
    },[application])

    const handleSubmit=async(e:any)=>{
        if(application._id){
            try{
                const us = await api.UPDATE(applicationData);
                if(!us.data.success){
                    toast.error(us.data.message);
                }
                dispatch(update(applicationData));
                toast.success(us.data.message);
            }catch(err:any){
                toast.error(err.message);
            }
        }else{
            try {
                const us = await api.ADD(applicationData,id);
                if(!us.data.success){
                    toast.error(us.data.message);
                }
                dispatch(add(us.data.ne));
                toast.success(us.data.message);
            } catch (error:any) {
                toast.error(error.message);
            }
        }
    }

    const clear=(e:any)=>{
        setApplicationData({Name:"",Role:"",Location:"",CTC:NaN,Status:'None'});
    }

    const handleChange=(e:any)=>{
        setApplicationData({...applicationData,[e.target.name]:e.target.value})
    }

    return (
        <div className='form'>
            <div className="four">
                <TextField type="text" size='small' required variant='outlined' color='secondary' name="Name" value={applicationData.Name} placeholder='Name of the company' onChange={handleChange}></TextField>
                <TextField type="text" size='small' required variant='outlined' color='secondary' name="Role" value={applicationData.Role} placeholder='Role' onChange={handleChange}></TextField>
                <TextField type="text" size='small' required variant='outlined' color='secondary' name="Location" value={applicationData.Location} placeholder='Location' onChange={handleChange}></TextField>
                <TextField type="number" size='small' required variant='outlined' color='secondary' name="CTC" value={applicationData.CTC} placeholder='CTC' onChange={handleChange}></TextField>
            </div>
            <center>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" color="secondary">
                <InputLabel id="demo-select-small-label">Status</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    label="Status"
                    name='Status'
                    onChange={handleChange}
                    value={applicationData.Status}
                >
                    <MenuItem value="None"><em>None</em></MenuItem>
                    <MenuItem value="Applied">Applied</MenuItem>
                    <MenuItem value="OA Given">OA Given</MenuItem>
                    <MenuItem value="OA Cleared">OA Cleared</MenuItem>
                    <MenuItem value="Interviewed">Interviewed</MenuItem>
                    <MenuItem value="Interview Cleared">Interview Cleared</MenuItem>
                    <MenuItem value="HR Shortlisted">HR Shortlisted</MenuItem>
                    <MenuItem value="Selected">Selected</MenuItem>
                </Select>
            </FormControl>
            </center>
            <div className="two">
                <Button variant='contained' color="secondary" onClick={handleSubmit}>Submit</Button>
                <Button variant="contained" color='secondary' onClick={clear}>Clear</Button>
            </div>
        </div>
    )
}

export default ApplicationForm;
