const mongoose = require("mongoose");

const  paymentSchema = new mongoose.Schema({
    cardNumber: {
        type: Number,
        required: true
    },
    cardExpiry: {
        type: Number,
        required: true
    }
  
 
});

module.exports = mongoose.model("Payment", paymentSchema);