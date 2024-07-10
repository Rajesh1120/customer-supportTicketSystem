

const checkRoles=(roles)=>{
    return (req,res,next)=>{
        
        if (roles.includes(req.user.role)){
            
            // res.status(200).json({message:"success"})
            next();
        }
        else{
            res.status(500).json({message:"Forbidden"})
        }
    }
}

module.exports={checkRoles};

