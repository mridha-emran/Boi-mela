const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

 const userAuthenticated =async (req,res,next)=>{
  //  console.log(req.cookies)
     try{
          const { token } = req.cookies;
        if (!token) {
            return  res.status(404).json({
                    success: false,
                    message: "Please Login to access this resource",
                    });   
            }
          
        const Datadecode = jwt.verify(token, process.env.JWT_SECRET);
          
            req.user = await User.findById(Datadecode.id);

            next();     
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 
 module.exports ={
   userAuthenticated
 }