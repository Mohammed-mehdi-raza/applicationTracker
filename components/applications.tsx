"use client"

import React from 'react';
import Appplication from "./application";
import { Application } from '@/types/application';
import ApplicationHead from "./applicationHead";

const Applications = () => {

  const val1:Application={_id:"dsjn", Name:"ndfkl",Role:"ldkfglks",Status:"dflksgkl",CTC:32,Location:"lkfglk,fdgkl,dlfkm"};
  const val2:Application={Name:"ndlkksdmfkl",Role:"ldklks",Status:"dflgkl",CTC:39,Location:"lkfglk,fdgkl,dlflcknklkm"};

  return (
    <div className='application'>
      <ApplicationHead/>
      <Appplication {...val1}/>
      <Appplication {...val2}/>
    </div>
  )
}

export default Applications
