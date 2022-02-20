const Books = require("../models/bookModel");

const addBooks = async(req,res)=>{
      try{
            const book = await Books.create(req.body);        
              res.status(201).json({
                  success: true,
                  book,
              })
                
        }
        catch(err){
            res.status(500).json(err)
        }   
  
}


const getAllbooks  = async (_req,res)=>{

      try{     
         const book = await Books.find();
          res.status(200).json({
            success: true,
            book,
          });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 const updateBooks =async (req,res)=>{
        // console.log(req.params.id)
      try{
         let book = await Books.findById(req.params.id);
            // console.log(book)
          if (!book) {
              return  res.status(404).json({
                      success: false,
                      message: "book not found",
                    });   
              }
                  // console.log(req.body)
         book = await Books.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true,
                    useFindAndModify: false,
                  });

              res.status(200).json({
                success: true,
                book,
              });    
                    
      }

    catch(err){
        res.status(500).json(err)
    }
 }

 const deleteBooks =async (req,res)=>{
    console.log(req.params.id)
      try{
         let book = await Books.findById(req.params.id);
           if (!book) {
              return  res.status(404).json({
                      success: false,
                      message: "book not found",
                    });   
              } 
            await book.remove();

            res.status(200).json({
              success: true,
              message: "book Delete Successfully",
            });
    }
    catch(err){
        res.status(500).json(err)
    }
 }
const getSingleBooks  =async (req,res)=>{
      try{
      
          let book = await Books.findById(req.params.id);
           if (!book) {
              return  res.status(404).json({
                      success: false,
                      message: "book not found",
                    });   
              } 

            res.status(200).json({
              success: true,
              book
            });    
    }
    catch(err){
        res.status(500).json(err)
    }
 }

 
 module.exports ={
   addBooks,
  getAllbooks,
  updateBooks,
  deleteBooks,
  getSingleBooks
 }