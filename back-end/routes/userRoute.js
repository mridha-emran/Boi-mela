const express = require("express");
const router = express.Router();
const  {
    registerUser,
} = require("../controllers/userController");


router.post("/register",registerUser);
// router.get("/books",getAllbooks);
// router.put("/books/:id",updateBooks);
// router.delete("/books/:id",deleteBooks);
// router.get("/books/:id",getSingleBooks);




module.exports = router;