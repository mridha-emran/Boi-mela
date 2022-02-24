const express = require("express");
const router = express.Router();
const {
  newOrder,userOrderDetails,myOrder,allOrders,deleteOrder

} = require("../controllers/orderController");
const {userAuthenticated } = require("../middleware/auth");

router.post("/order/new",userAuthenticated,newOrder);
router.get("/order/:id",userAuthenticated,userOrderDetails)
router.get("/orders/user",userAuthenticated,myOrder)
router.get("/all/orders",userAuthenticated,allOrders)
router.delete("/order/:id",userAuthenticated,deleteOrder)



module.exports = router;