import React, { useEffect, useState } from 'react'
import { API_URL } from './api/API'
import axios from 'axios';

const Apidatadiaplay=() => {
    const[val,setVal]=useState([]);
   //console.log(val.map((item,index)=>{
     //      return
    //}));
    
    
   useEffect(()=>{
          axios.get(API_URL+"/user").then((res)=>{
            setVal(res.data);
          }).catch((err)=>{console.log(err)});

   },[])


  return (
       

    <div>
      

{val.map((user:any) => (
        <div key={user.name}>
          <p>{user.name}</p>
          {user.image}
          <p></p>
        </div>))}
    
    </div>

       
  )
}

export default Apidatadiaplay