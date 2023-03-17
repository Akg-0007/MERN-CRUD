import React, { useEffect } from 'react'
import { useState } from "react"
import { useNavigate ,useParams} from 'react-router-dom';
import { edituser,getuse } from "./service/api"; 
const def={
    name:"",
    password:"",
    phone:"",
    email:""
  }
const Edituser = () => {
    
 
        const[data,setdata]=useState(def);
        const nav=useNavigate();
        const {id}=useParams();
        useEffect(()=>{
            loaduser();
        },[])
        const loaduser=async()=>{
            const response=await getuse(id);
            setdata(response.data)
        }
       const onvch=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
       }
      //  console.log(data);
    
     const edit= async  ()=>{
      await edituser(data,id);
      nav('/all');
     }
  return (
    <div className='d-flex-column '>
    {/* <h1>Login user</h1>
    <div>
    <input type="text" placeholder='name' onChange={(e)=>{onvch(e)}} name="name"></input>
     </div>
     <div>
    <input type="password" placeholder='password' onChange={(e)=>{onvch(e)}} name="password"></input></div>
    <div>
    <input type="number" placeholder='phone' onChange={(e)=>{onvch(e)}} name="phone"></input></div>
   
   <div> <input type="email" placeholder='email' onChange={(e)=>{onvch(e)}} name="email"></input></div>
    <button onClick={()=>add()}>Login</button> */}



    <form className='w-50 mx-auto mt-3 border border-4 p-5'>
      <h1 className='text-center'>ADD USER</h1>
  <div class="mb-3">
    <label for="exampleInputEmail2" class="form-label">Username</label>
    <input value={data.name} name="name" type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" onChange={(e)=>{onvch(e)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input value={data.email} name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{onvch(e)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input value={data.password} name="password" type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>{onvch(e)}} />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword2" class="form-label">Phone Number</label>
    <input value={data.phone} name="phone" type="number" class="form-control" id="exampleInputPassword2" onChange={(e)=>{onvch(e)}} />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={()=>edit()} type="submit" class="btn btn-primary">Submit</button>
</form>
    
    </div>
  )
}

export default Edituser