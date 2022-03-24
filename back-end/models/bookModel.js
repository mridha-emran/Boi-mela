const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
     required: true
  },
  authour:{
     type: String,
  },
  published:{
     type: Number,
  },
  description: {
    type: String,
     required: true
  },
  price: {
    type: Number,
     required: true
  },
  
  bookImages:[{
      public_id: {
      type: String,
  
    },
    url: {
      type: String,

    },   
    }],


  stock: {
    type: Number,

  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("books", bookSchema);