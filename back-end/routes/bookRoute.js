const express = require("express");
const router = express.Router();
const  {
 addBooks
} = require("../controllers/books");

router.post("/books/new",addBooks);



module.exports = router;