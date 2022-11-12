const Books = require("../models/bookModel");
const cloudinary = require("cloudinary");
const ApiFeatures = require("../utils/apifeatures");

//  add new book -- Admin
const addBooks = async(req,res)=>{
  try{  
      let  bookImages= [];
         //  for single image 
        if (typeof req.body.bookImages === "string") {
          bookImages.push(req.body.bookImages);
        } else {
          //  for multiple image
          bookImages = req.body.bookImages;
        }
     
        const imagesLinks = [];
          for (let i = 0; i <  bookImages.length; i++) {
            const result = await cloudinary.v2.uploader.upload(bookImages[i],
               {
                 folder: "bookImages",
               });

            imagesLinks.push({
              public_id: result.public_id,
              url: result.secure_url,
            });
          }

        req.body.bookImages = imagesLinks;
        const books = await Books.create(req.body);
                    res.status(201).json({
                        success: true,
                        books,
                    })            
  }
  catch(err){
    res.status(500).json(err)
  }   
  
}
// Get All book
const getAllbooks  = async (req,res)=>{
      try{   
        //  api search method used from utils api features
        const apiFeature= new ApiFeatures(Books.find(),req.query).search().filter()
         // page resust for pagination
          const resultPerPage = 8;
          const productsCount = await Books.countDocuments();
          apiFeature.pagination(resultPerPage);
          const books = await apiFeature.query;
          res.status(200).json({
            success: true,
            books,
            resultPerPage,
            productsCount
          });     
    }
    catch(err){
        res.status(500).json(err)
    }
 }
// update book
 const updateBooks =async (req,res)=>{

      try{
         let book = await Books.findById(req.params.id);
    
          if (!book) {
              return  res.status(404).json({
                      success: false,
                      message: "book not found",
                    });   
              }
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
// delete book
 const deleteBooks =async (req,res)=>{
    // console.log(req.params.id)
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
// Get book Details
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
// Create New Review or Update the review
const createBookstReview =async(req,res)=>{
    const { comment, productId } = req.body;
    try{
         const review = {
          user: req.user._id,
          name: req.user.name,
          comment,
          };
         const product = await Books.findById(productId);

          const isReviewed = product.reviews.find(
            (rev) => rev.user.toString() === req.user._id.toString()
          );

         if (isReviewed) {
              product.reviews.forEach((rev) => {
                if (rev.user.toString() === req.user._id.toString())
                    (rev.comment = comment);
                });

              } else {
                product.reviews.push(review);
              }

          await product.save({ validateBeforeSave: false });

          res.status(200).json({
          success: true,
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
  getSingleBooks,
  createBookstReview
 }