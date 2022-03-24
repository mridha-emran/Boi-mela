const express = require("express");
const router = express.Router();
const {
 payment

} = require("../controllers/paymentController");
const {userAuthenticated } = require("../middleware/auth");

router.post("/payment", payment);



module.exports = router;