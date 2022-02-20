const Books = require("../models/bookModel");


const addBooks = async(req,res)=>{
    
  const book = await Books.create(req.body);
        
    res.status(201).json({
        success: true,
        book,
    })
}



 
 module.exports ={
   addBooks

 }