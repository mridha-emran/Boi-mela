const Payment = require("../models/paymentModel");

const payment = async(req,res)=>{
      // console.log(req.body)
      try{
           const payment= await Payment.create(req.body);        
              res.status(201).json({
                  success: true,
                  payment,
                  status:"seccuse"
              })
                
        }
        catch(err){
            res.status(500).json(err)
        }   
  
}
 
 module.exports ={
   payment
 }