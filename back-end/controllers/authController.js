const User = require("../models/userModel");
const tokenFanction = require("../utils/tokenFanction");
  const registerUser =async (req,res)=>{
      const { name, email, password } = req.body;
        try{
          const user = await User.create({
              name,
              email,
              password,
      
          });     
            tokenFanction(user, 201, res)
      }
      catch(err){
          res.status(500).json(err)
      }
        
  }

  const login =async (req,res)=>{
        const { email, password } = req.body;
        try{
            if(!email || !password) {
                return res.status(400).json({
                        success: false,
                        message: "Please Enter Email & Password",
                      });   
              }
            const user = await User.findOne({ email }).select("+password");

             if(!user) {
                return res.status(401).json({
                        success: false,
                        message: " Invalid credential",
                      });   
              }
             const passwordMatch = await user.comparePassword(password);

             if(!passwordMatch) {
                return res.status(401).json({
                        success: false,
                        message: " Invalid credential",
                      });   
              }
             tokenFanction(user, 200, res) 
      }
      catch(err){
          res.status(500).json(err)
      }
  }
   const logoutUser =async (_req,res)=>{
     try {
         res.clearCookie('token')
         return res.status(200).json({
             message: 'Logged Out successful !'
            })
        } 
        catch(err){
          res.status(500).json(err)
      }
        
    }
 module.exports ={
   registerUser,
   login,
   logoutUser
 }