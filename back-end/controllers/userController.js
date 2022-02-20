const User = require("../models/userModel");
const registerUser =async (req,res)=>{
     const { name, email, password } = req.body;
      try{
        const user = await User.create({
            name,
            email,
            password,
    
        });
        res.status(201).json({
            success: true,
            user  
              });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 module.exports ={
   registerUser
 }