const Order = require("../models/orderModel");


 const newOrder =async (req,res)=>{
     const {
    deliveryInfo, bookItems,bookPrice,
    tax,totalPrice
  } = req.body;
      try{
         const order = await Order.create({
            deliveryInfo,bookItems,
            bookPrice,tax,totalPrice,
            user: req.user._id,
        });
         res.status(201).json({
            success: true,
            order,
        });    
    }
    catch(err){
        res.status(500).json(err)
    }
 }
 const userOrderDetails  =async (req,res)=>{
      try{
          const order = await Order.findById(req.params.id).populate(
            "user",
            "name email"
        );  
        if(!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found with this Id",
                });   
              }
        
        res.status(200).json({
            success: true,
            order,
        });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }
 const myOrder  =async (req,res)=>{
      console.log("good2")
      try{
        const orders = await Order.find({ user: req.user._id });
        res.status(200).json({
            success: true,
            orders,
        });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }
 const allOrders  =async (req,res)=>{
      try{
       const orders = await Order.find();
        res.status(200).json({
            success: true,
            orders,
             });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }
 
  
 const deleteOrder = async (req,res)=>{
     console.log(req.params.id)
      try{
            const order = await Order.findById(req.params.id); 
             if(!order) {
                return res.status(401).json({
                        success: false,
                        message: "Order not found with this Id",
                      });   
              }
            await order.remove();
            res.status(200).json({
                success: true,
            });  
              
             
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 module.exports ={
   newOrder,
   userOrderDetails,
   myOrder,
   allOrders,
   deleteOrder
 }