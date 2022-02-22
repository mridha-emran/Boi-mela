const express = require("express");
const router = express.Router();
const  {
    registerUser,login,logoutUser

} = require("../controllers/authController");


router.post("/register",registerUser);
router.post("/login",login);
router.get("/logout",logoutUser);




module.exports = router;