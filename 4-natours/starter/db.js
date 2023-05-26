const mongoose = require("mongoose");
require("dotenv").config({ path: "./env_/.env" });
//const db = "mongodb+srv://salman:salman8212@cluster0.smczilf.mongodb.net/PracticeDb"
const db = process.env.DB_URL;
mongoose.connect(db)
  .then((res) => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log("error connecting to database, ", err);
  });
