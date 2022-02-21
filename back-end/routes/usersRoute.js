const express = require("express");
const router = express.Router();
const  {
        getAllUsers,getSingleUser,updateUser,updatePassword,deleteUser
} = require("../controllers/usersController");



router.get("/user",getAllUsers);
router.get("/user/:id",getSingleUser);
router.put("/user/:id",updateUser);
router.put("/user/password/:id",updatePassword);
router.delete("/user/:id",deleteUser);




module.exports = router;