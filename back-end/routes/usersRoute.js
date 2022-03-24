const express = require("express");
const router = express.Router();
const  {
        getAllUsers,getSingleUser,updateUser,updatePassword,deleteUser
} = require("../controllers/usersController");

const { userAuthenticated,isAuthorizeAdmin} = require("../middleware/auth");

router.get("/user",userAuthenticated,isAuthorizeAdmin,getAllUsers);
router.get("/user/details",userAuthenticated,getSingleUser);
router.put("/user/details",userAuthenticated,updateUser);
router.put("/user/password/:id",userAuthenticated,updatePassword);
router.delete("/user/:id",userAuthenticated,isAuthorizeAdmin, deleteUser);




module.exports = router;