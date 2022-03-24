const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");

 dotenv.config({
     path:"./config.env"
 })

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DB, {useNewUrlParser: true,})
.then(() => {
    console.log("Connected to MongoDB !");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


const books = require("./routes/bookRoute");
const auth = require("./routes/authRoute")
const users = require("./routes/usersRoute")
const order = require("./routes/orderRoute")
const payment = require("./routes/paymentRoute")

app.use("/api", books);
app.use("/api", auth);
app.use("/api", users);
app.use("/api", order);
app.use("/api", payment);

app.listen(PORT, () => {
    console.log(`Connected to Server port : ${PORT}`)
})