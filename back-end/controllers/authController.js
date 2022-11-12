const User = require("../models/userModel");
const tokenFanction = require("../utils/tokenFanction");
const cloudinary = require("cloudinary");

// Register a User
  const registerUser =async (req,res)=>{
      const { name, email, password } = req.body;
        try{
           const myCloud = await cloudinary.v2.uploader.upload(req.body.userImages, {
              folder: "userImages",
              width: 150,
              crop: "scale",
            });
  
          const user = await User.create({
              name,
              email,
              password,
              userImages: {
              public_id: myCloud.public_id,
              url: myCloud.secure_url,
            }
            });    
            tokenFanction(user, 201, res)
      }
      catch(err){
          res.status(500).json(err)
      }
        
  }
  // Login User
  const login =async (req,res)=>{
        const { email, password } = req.body;
        try{
            // checking if user has given password and email both
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

  // Logout User
   const logoutUser =async (_req,res)=>{
      console.log("dd")
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