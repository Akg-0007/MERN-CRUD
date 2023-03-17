
import User from '../schema/user-schema.js'
export const adduser=async (request,response)=>{

    
    const user=request.body;
    const newUser= User(user);

    try {
       await newUser.save();
       response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}
export const getusers=async(req,res)=>{
    try {
        const users =await User.find({});
        res.status(200).json(users);

    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const getuse=async(req,res)=>{
    try {
        // const user=await User.find({_id:req.params.id});
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
export const edituser=async(req,res)=>{
    let user=req.body;
    const edituser=new User(user);
    try {
       await User.updateOne({_id:req.params.id},edituser);
       res.status(201).json(edituser);

    } catch (error) {
        res.status(409).json({message:error.message});

    }
}

export const deluser=async(req,res)=>{
   
    try {
       await User.deleteOne({_id:req.params.id});
       res.status(200).json({message:"user deleted succefully"});

    } catch (error) {
        res.status(409).json({message:error.message});

    }
}

