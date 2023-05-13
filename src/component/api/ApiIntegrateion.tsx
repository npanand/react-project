import React, { useEffect, useState } from 'react'
import {API_URL} from './API'
import axios from 'axios'


const  ApiIntegrateion=()=>{
    const [datas,setdata]=useState({});
    const calledData= async()=>{
        var val=await axios.get(API_URL+'/user');
        setdata(val.data);
    }
    useEffect( ()=>{
        calledData();
        
    },[]);
    
    
    

  return (
    <div>
        
        
        
         
    </div>
  )
}

export default ApiIntegrateion;