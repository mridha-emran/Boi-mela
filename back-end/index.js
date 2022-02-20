const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dovtenv=require("dotenv");

 dovtenv.config({
     path:"./config.env"
 })

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DB, {useNewUrlParser: true,})
.then(() => {
    console.log("Connected to MongoDB !");
});

app.use(express.json());

const books = require("./routes/bookRoute");

app.use("/api", books);

app.listen(PORT, () => {
    console.log(`Connected to Server port : ${PORT}`)
})