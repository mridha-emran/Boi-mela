const User = require("../models/userModel");
const tokenFanction = require("../utils/tokenFanction");
const cloudinary = require("cloudinary");

  const registerUser =async (req,res)=>{
      const { name, email, password } = req.body;
      // console.log(req.body)
        try{
           const myCloud = await cloudinary.v2.uploader.upload(req.body.userImages, {
              folder: "userImages",
              width: 150,
              crop: "scale",
            });
            console.log("image",myCloud)
          const user = await User.create({
              name,
              email,
              password,
              userImages: {
              public_id: myCloud.public_id,
              url: myCloud.secure_url,
            }
            });  
            // console.log("user")   
            tokenFanction(user, 201, res)
      }
      catch(err){
          res.status(500).json(err)
      }
        
  }

  const login =async (req,res)=>{
          // console.log(req.body)
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
              // console.log(user)
             tokenFanction(user, 200, res) 
      }
      catch(err){
          res.status(500).json(err)
      }
  }
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