"use client";

import { Button,FormControl,InputLabel,Select,MenuItem,TextField} from '@mui/material';
import React ,{useState} from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';
import { Search } from '@/types/search';
import { useAppDispatch } from '@/app/redux/hooks';
import { filter } from '@/app/redux/features/applicationsSlice';

const Filter = () => {

  const [fil,setFil] =useState<Boolean>(true);
  const [state,setState]=useState<Search>({});
  const dispatch=useAppDispatch();

  const clickHandeler=()=>{
    setFil(!fil);
  }

  const searchHandeler=(e:any)=>{
    dispatch(filter(state));
  }

  const handleChange=(e:any)=>{
    setState({...state,[e.target.name]:e.target.value}); 
  }

  return (
    <div className='filter'>
      {
        fil ?
        <div className="f">
          <Button variant="text" color="success" onClick={clickHandeler}> <FilterListIcon/> Filter</Button>
        </div> 
        : 
        <div className="filterContainer">
          <div className="filterExit">
            <Button variant="text" color="error"  onClick={clickHandeler}><ClearIcon/></Button>
          </div>
          <div className="filterForm">
            <TextField type="text" size='small' required variant='outlined' color='primary' name="search" placeholder='Search Box' onChange={handleChange} value={state.search}></TextField>
            <center><FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label">Category</InputLabel>
                  <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Category"
                      name='category'
                      onChange={handleChange}
                      value={state.category}
                  >
                      <MenuItem value="None"><em>None</em></MenuItem>
                      <MenuItem value="Name of the Company">Name of the Company</MenuItem>
                      <MenuItem value="Role">Role</MenuItem>
                      <MenuItem value="Location">Location</MenuItem>
                      <MenuItem value="Status">Status</MenuItem>
                      <MenuItem value="CTC">CTC</MenuItem>
                  </Select>
              </FormControl></center>
              <Button variant="text" color="primary" onClick={searchHandeler}>search</Button>
          </div>
        </div>
      }
    </div>
  )
}

export default Filter
