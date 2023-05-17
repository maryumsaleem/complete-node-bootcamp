require("./db");
const express = require("express");
const app = express(); 
const routes = require("./routes/tourRoutes"); 
const bodyParser = require("body-parser");
/************** Middlewares ****************/ 
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/************** Routes ****************/
app.use("/", routes); /*** Application Route ***/

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
module.exports = app;