"use client";

import { Button,FormControl,InputLabel,Select,MenuItem,TextField} from '@mui/material';
import React ,{useState} from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { Search } from '@/types/search';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { filter,setPage,fetchAll } from '@/app/redux/features/applicationsSlice';
import toast from "react-hot-toast";
import * as api from "../app/redux/services/applicationApi";
import { useAppContext } from './client';

const Filter = () => {

  const [fil,setFil] =useState<Boolean>(true);
  const dispatch=useAppDispatch();
  const id = useAppSelector((state)=>state.userReducer.value._id);
  const {search,setSearch} =useAppContext();

  const clickHandeler=async()=>{
    setFil(!fil);
    const ap = await api.FETCHALL(id,1);
    if(!ap.data.success){
      toast.error(ap.data.message);
    }
    dispatch(fetchAll(ap.data.applications));
    dispatch(setPage(ap.data.totalPage));
  }

  const searchHandeler=async(e:any)=>{
    try {
      const res = await api.FILTER(search,id,1);
      if(!res.data.success){
        toast.error(res.data.message);
      }
      dispatch(filter(res.data.app));
      dispatch(setPage(res.data.totalPage));
    } catch (error:any) {
      toast.error(error.message);
    }
  }

  const handleChange=(e:any)=>{
    setSearch({...search,[e.target.name]:e.target.value}); 
  }

  return (
    <div className='filter'>
      {
        fil ?
        <div className="f">
          <Button variant="outlined" color="secondary" onClick={clickHandeler}> <FilterListIcon/> Filter</Button>
        </div> 
        : 
        <div className="filterContainer">
          <div className="filterExit">
            <Button variant="text" color="error"  onClick={clickHandeler}><ClearIcon/></Button>
          </div>
          <div className="filterForm">
            <TextField type="text" size='small' required variant='outlined' color='secondary' name="Search" placeholder='Search Box' onChange={handleChange} value={search.Search}></TextField>
            <center><FormControl sx={{ m: 1, minWidth: 120 }} size="small" color="secondary">
                  <InputLabel id="demo-select-small-label">Category</InputLabel>
                  <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Category"
                      name='Category'
                      onChange={handleChange}
                      value={search.Category}
                  >
                      <MenuItem value="None"><em>None</em></MenuItem>
                      <MenuItem value="Name">Name of the Company</MenuItem>
                      <MenuItem value="Role">Role</MenuItem>
                      <MenuItem value="Location">Location</MenuItem>
                      <MenuItem value="Status">Status</MenuItem>
                      <MenuItem value="CTC">CTC</MenuItem>
                  </Select>
              </FormControl></center>
              <Button variant="contained" color="secondary" onClick={searchHandeler}>search</Button>
          </div>
        </div>
      }
    </div>
  )
}

export default Filter;
