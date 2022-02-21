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
            res.status(200).json({
                  success: true,
                  user 
                  });     
      }
      catch(err){
          res.status(500).json(err)
      }
  }

 module.exports ={
   registerUser,
   login
 }