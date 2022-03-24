const Order = require("../models/orderModel");
const Books = require("../models/bookModel");

 const newOrder =async (req,res)=>{
     const {
    deliveryInfo, bookItems,bookPrice,paymentInfo,
    totalPrice
  } = req.body;
    // console.log(req.body)
      try{
         const order = await Order.create({
            deliveryInfo,bookItems,
            bookPrice,paymentInfo,totalPrice,
            user: req.user._id,
        });
        console.log("order",order)
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
     console.log("singl order",req.params.id)
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
        
        console.log("singll chek order",order)
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
    //   console.log("good2")
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


 
  const updateOrder = async (req,res)=>{
    //  console.log(req.params.id)
      try{
            const order = await Order.findById(req.params.id); 
             if(!order) {
                return res.status( 404).json({
                        message: "Order not found with this Id",
                      });   
              }
              console.log("oder stat chack",order.orderStatus)
             if(order.orderStatus === "Delivered") {
                return res.status(401).json({
                        message: "You have already delivered this order",
                      });   
              }
        //    console.log("oder stat body",req.body.status) 
            if (req.body.status === "Shipped") {
                order.bookItems.forEach(async (o) => {
                    // console.log("test",o.book, o.quantity)
                await updateStock(o.book, o.quantity);
                });
            order.orderStatus = req.body.status;
            
        //  console.log("oder statsss body",order.orderStatus)

            if (req.body.status === "Shipped") {
                order.deliveredAt = Date.now();
            }
        // console.log("oder chack",order)

            await order.save({ validateBeforeSave: false });
                res.status(200).json({
                    success: true,
                });
            }                          
    }
    catch(err){
        res.status(500).json(err)
    }
 }
async function updateStock(id, quantity) {
    // console.log("new test" ,id)
  const product = await Books.findById(id);
//   console.log("new test product",product)
  product.stock =   product.stock-quantity;

  await product.save({ validateBeforeSave: false });
}

 

 module.exports ={
   newOrder,
   userOrderDetails,
   myOrder,
   allOrders,
   deleteOrder,
   updateOrder
 }