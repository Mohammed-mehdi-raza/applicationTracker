"use client";

import { Application } from '@/types/application';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppContext } from './client';
import { useAppDispatch } from '@/app/redux/hooks';
import { add, update } from '@/app/redux/features/applicationsSlice';

const ApplicationForm = () => {

    const [applicationData,setApplicationData]=useState<Application>({Name:"",Role:"",Location:"",CTC:NaN,Status:'None'});
    const{application} =useAppContext();
    const dispatch = useAppDispatch();

    useEffect(()=>{
        if(application._id){
            setApplicationData(application);
        }
    },[application])

    const handleSubmit=(e:any)=>{
        if(application._id){
            dispatch(update(applicationData));
        }else{
            dispatch(add(applicationData));
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
                <TextField type="text" size='small' required variant='outlined' color='primary' name="Name" value={applicationData.Name} placeholder='Name of the company' onChange={handleChange}></TextField>
                <TextField type="text" size='small' required variant='outlined' color='primary' name="Role" value={applicationData.Role} placeholder='Role' onChange={handleChange}></TextField>
                <TextField type="text" size='small' required variant='outlined' color='primary' name="Location" value={applicationData.Location} placeholder='Location' onChange={handleChange}></TextField>
                <TextField type="number" size='small' required variant='outlined' color='primary' name="CTC" value={applicationData.CTC} placeholder='CTC' onChange={handleChange}></TextField>
            </div>
            <center>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
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
                <Button variant='contained' color="primary" onClick={handleSubmit}>Submit</Button>
                <Button variant="contained" color='primary' onClick={clear}>Clear</Button>
            </div>
        </div>
    )
}

export default ApplicationForm;
