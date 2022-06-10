const express = require("express");
const router = express.Router();
const  {
 addBooks,getAllbooks,updateBooks,deleteBooks,getSingleBooks, createBookstReview
} = require("../controllers/booksController");
const {userAuthenticated} = require("../middleware/auth");



router.post("/books/new",addBooks);
router.get("/books",getAllbooks);
router.put("/books/:id",updateBooks);
router.delete("/books/:id",deleteBooks);
router.get("/books/:id",getSingleBooks);
router.put("/reviews",userAuthenticated,createBookstReview);




module.exports = router;