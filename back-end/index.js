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
const user = require("./routes/userRoute")

app.use("/api", books);
app.use("/api", user);

app.listen(PORT, () => {
    console.log(`Connected to Server port : ${PORT}`)
})