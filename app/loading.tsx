"use client";

import React from 'react';
import {CircularProgress} from "@mui/material";

const Loading = () => {
  return (
    <div className="container">
        <div className='Loader'>
            <CircularProgress/>
        </div>
    </div>
  )
}

export default Loading;
