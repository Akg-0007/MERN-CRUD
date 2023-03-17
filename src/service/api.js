
import axios from 'axios'


    const url='http://localhost:8000';

    export const adduser= async (data)=>{
        try{
            return await  axios.post(`${url}/add`,data)
            }
            catch(error){
             console.log("error while calling add user api",error)
            }
    }
    export const getuser= async ()=>{
        try{
            return await  axios.get(`${url}/all`)
            }
            catch(error){
             console.log("error while calling get users Api",error)
            }
    }

    export const getuse=async (id)=>{
        try {
            return await axios.get(`${url}/${id}`)
        } catch (error) {
            console.log("error while calling get user Api",error)
 
        }
    }
   
    export const edituser=async (user,id)=>{
        try {
            return await axios.post(`${url}/${id}`,user);
        } catch (error) {
            console.log("error while calling edituser api",error)
        }
    }
 export const deluser=async(id)=>{
    try {
        return await axios.delete(`${url}/${id}`)

    } catch (error) {
        console.log("error while calling deluser api",error)

    }
 }
