const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/customers");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  const storage = multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,"image");
    },
    filename: (req,file,cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({storage:storage});
  app.post("/api/upload", upload.single("file"), (req,res) => {
    res.status(200).json("file has been uploaded");
  });

app.use("/api/customers", authRoute);




app.listen("5000", ()=> {
    console.log("Backend is Running");
});