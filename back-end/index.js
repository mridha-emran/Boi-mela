const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dovtenv=require("dotenv");
const cookieParser = require("cookie-parser");

 dovtenv.config({
     path:"./config.env"
 })

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.DB, {useNewUrlParser: true,})
.then(() => {
    console.log("Connected to MongoDB !");
});

app.use(express.json());
app.use(cookieParser());

const books = require("./routes/bookRoute");
const auth = require("./routes/authRoute")
const users = require("./routes/usersRoute")

app.use("/api", books);
app.use("/api", auth);
app.use("/api", users);

app.listen(PORT, () => {
    console.log(`Connected to Server port : ${PORT}`)
})