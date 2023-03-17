import express from 'express';
import{adduser,getusers,getuse,edituser,deluser}from '../controller/user-controller.js'
const router=express.Router();
router.post('/add',adduser);
router.get('/all',getusers);
router.get('/:id',getuse);
router.post('/:id',edituser);
router.delete('/:id',deluser)

// router.get('/',(req,res)=>res.send("sdfsfv"));

export default router;