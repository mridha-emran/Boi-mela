const express = require("express");
const router = express.Router();
const  {
        getAllUsers,getSingleUser,updateUser,updatePassword,deleteUser
} = require("../controllers/usersController");

const { userAuthenticated} = require("../middleware/auth");

router.get("/user",getAllUsers);
router.get("/user/:id",userAuthenticated,getSingleUser);
router.put("/user/:id",userAuthenticated,updateUser);
router.put("/user/password/:id",userAuthenticated,updatePassword);
router.delete("/user/:id",userAuthenticated,deleteUser);




module.exports = router;