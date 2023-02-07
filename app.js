const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@cluster0.kp9zvne.mongodb.net/?retryWrites=true&w=majority";
const recentRouter = require("./router/recent");
const popularRouter = require("./router/popular");
const userRouter = require("./router/user");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json());
mongoose.set("strictQuery", false);
mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection.on("open", () => {
  console.log(" DB Connected.....");
});

app.use("/recent", recentRouter);
app.use("/users", userRouter);
app.use("/popular", popularRouter);

app.listen(9000, () => {
  console.log("server is running");
});
