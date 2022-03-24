const User = require("../models/userModel");

 const getAllUsers =async (_req,res)=>{
      try{
             const users = await User.find()
        res.status(200).json({
              success: true,
                users,
              });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }

  const getSingleUser =async (req,res)=>{
      try{
            const user = await User.findById(req.user.id);
             if (!user) {
                return  res.status(404).json({
                    success: false,
                    message: "user does not exist",
                    });   
                }     
                res.status(200).json({
                                success: true,
                                user,
                            });    
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 const updateUser=async (req,res)=>{
        const newUserData = {
            name: req.body.name,
            email: req.body.email,
        };
        console.log(newUserData)
        try{   
                             
            const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
                        new: true,
                        runValidators: true,
                        useFindAndModify: false,
            });
            // console.log(user)
            res.status(200).json({
                    success: true,
                    user
                });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 const updatePassword =async (req,res)=>{
    //    console.log(req.body.oldPassword)
     try{
          const user = await User.findById(req.user.id).select("+password");    
          const passwordMatch = await user.comparePassword(req.body.oldPassword);
      
           if (!passwordMatch) {
                return  res.status(400).json({
                    success: false,
                    message: "Old password is incorrect",
                });   
            }
           if (req.body.newPassword !== req.body.confirmPassword) {
                return  res.status(400).json({
                    success: false,
                    message: "password does not match",
                });   
            }
             user.password = req.body.newPassword;
            await user.save();

            res.status(200).json({
                    success: true,
                    user
                });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 const deleteUser =async (req,res)=>{
      try{
            const user = await User.findById(req.user.id);
            if (!user) {
                return  res.status(400).json({
                    success: false,
                    message: "User does not exist",
                });   
            }
            
            await user.remove();

            res.status(200).json({
                success: true,
                message: "User Deleted Successfully",
            });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 module.exports ={
   getAllUsers,
   getSingleUser,
   updateUser,
   updatePassword,
   deleteUser
 }