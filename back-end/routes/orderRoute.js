const express = require("express");
const router = express.Router();
const {
  newOrder,userOrderDetails,myOrder,allOrders,deleteOrder,updateOrder

} = require("../controllers/orderController");
const {userAuthenticated,isAuthorizeAdmin } = require("../middleware/auth");

router.post("/order/new",userAuthenticated,newOrder);
router.get("/order/:id",userAuthenticated,userOrderDetails)
router.get("/orders/user",userAuthenticated,myOrder)
router.get("/all/orders",userAuthenticated,isAuthorizeAdmin, allOrders)
router.delete("/order/:id",userAuthenticated,isAuthorizeAdmin, deleteOrder)
router.put("/order/:id",userAuthenticated,isAuthorizeAdmin, updateOrder)



module.exports = router;