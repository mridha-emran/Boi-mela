const express = require("express");
const router = express.Router();
const  {
 addBooks,getAllbooks,updateBooks,deleteBooks,getSingleBooks
} = require("../controllers/booksController");


router.post("/books/new",addBooks);
router.get("/books",getAllbooks);
router.put("/books/:id",updateBooks);
router.delete("/books/:id",deleteBooks);
router.get("/books/:id",getSingleBooks);




module.exports = router;