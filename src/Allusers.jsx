import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {getuser,deluser} from "./service/api.js"
const Allusers = () => {
  const[users,setusers]=useState([])
    useEffect(()=>{
  getallusers();
    },[])
    const getallusers=async()=>{
        const resp=await getuser();
        setusers(resp.data);
    }
    const del=async(id)=>{
      await deluser(id);
      getallusers();
    }
  return (
     
  <table class="table table-sm mt-5 mx-5">
  <thead className='bg-dark text-white'>
    <tr className='fs-4'>
      <th scope="col"></th>
      <th scope="col">Name</th>    
      <th scope="col">Phone Number</th>
      <th scope="col">Email Address</th>
    </tr>
  </thead>
  <tbody>
  { users.map(e=>( 
    <tr key={e._id}>
      <th scope="row" ></th>
      <td>{e.name}</td>
      <td>{e.phone}</td>
      <td>{e.email}</td>
      <div className='d-flex'>
        <Link to={`/edit/${e._id}`}>
        <button className='btn btn-danger m-2'>EDIT</button>
        </Link>
      
      <button className='btn btn-success m-2'onClick={()=>del(e._id)} >DELETE</button>
      </div>
    </tr>
    )) 
  } 
  </tbody>
</table>
        
    
  )
}

export default Allusers