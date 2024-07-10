
const User= require('../models/userModel')
const Ticket=require("../models/ticketModel")
// get all users

const getallUsers=async(req , res)=>{
    
    try{
        const allUsers= await User.find({role:"customer"});
        if (allUsers){
            res.status(200).json({allUsers})
        }
    }catch(err){
        res.status(500).json({message:"Server Error"})
    }
    
}

const updateUserstatus=async(req,res)=>{
    try{
        const updateStatus=await Ticket.find(req.params._id)
        
       
    if (!updateStatus){ 
        return res.status(400).json("User Not found")
    }
    else{
        
        const updatedStatus= await Ticket.findByIdAndUpdate(
        req.params.id,
        {status:req.body.status},
        // {msg_to_customer},
        {new:true}
        
        )
        res.status(200).json({data:updatedStatus,message:"Successfully Updated"})
    }

    }
    catch(err){
        res.status(500).json({message:"Server Error"})
    }
}

const agentUpdateUser=async(req,res)=>{
    const agentUpdate=await Ticket.find(req.params._id)
    

    if (agentUpdate.status !=="open"){ 
        return res.status(400).json("U cannot change the status")
    }
    else{
        if (req.body.status==="inprogress"){
            const updatedagentStatus= await Ticket.findByIdAndUpdate(
                req.params.id,
                {status:req.body.status},
                // {msg_to_customer},
                {new:true}
                
                )
                res.status(200).json({data:updatedagentStatus,message:"Successfully Updated"})

        }
        else{
            res.status(500).json({message:"u cannot change the status to closed "})
        }
        
    }

    
    
}
module.exports={getallUsers,updateUserstatus,agentUpdateUser}