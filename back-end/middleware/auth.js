const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
//check Authenticated User by jwt token
 const userAuthenticated =async (req,res,next)=>{
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
 //check  User role 
 const isAuthorizeAdmin = async (req, res, next) => {
    try {
        const user = await User.findById({_id: req.user.id})
      
        if(user.role === "admin") {
            next()
        }else{
             return res.status(400).json({message: "Access denied"})
        }        
        
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

 
 module.exports ={
   userAuthenticated,
   isAuthorizeAdmin
 }