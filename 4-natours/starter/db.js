 const mongoose = require("mongoose"); 
 const db = "mongodb+srv://salman:salman8212@cluster0.smczilf.mongodb.net/PracticeDb"
mongoose.connect(db)
  .then((res) => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log("error connecting to database, ", err);
  }); 