const Books = require("../models/bookModel");
const cloudinary = require("cloudinary");
const addBooks = async(req,res)=>{

  try{ 
   
      let  bookImages= [];

  if (typeof req.body.bookImages === "string") {
    bookImages.push(req.body.bookImages);
  } else {
    bookImages = req.body.bookImages;
  }
      //  console.log(bookImages)
  const imagesLinks = [];

  // console.log(imagesLinks)
  for (let i = 0; i <  bookImages.length; i++) {
    const result = await cloudinary.v2.uploader.upload(bookImages[i], {
      folder: "bookImages",
    });
      
    // console.log("rr",result)
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.bookImages = imagesLinks;
  // console.log("ling",imagesLinks)
  // req.body.user = req.user.id;
  // console.log("raja",req.user.id)
   const books = await Books.create(req.body);
     console.log(books)
              res.status(201).json({
                  success: true,
                  books,
              })
                
        }
        catch(err){
            res.status(500).json(err)
        }   
  
}

const getAllbooks  = async (_req,res)=>{
      try{     
         const books = await Books.find();
          res.status(200).json({
            success: true,
            books,
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
    // console.log("test")
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