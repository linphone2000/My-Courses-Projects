import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";

const app = express();

mongoose.connect("mongodb://localhost:27017/wikiDB");

// app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    res.send("Hello")
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while retrieving items.");
  }
});

app.listen(3000,()=>{
    console.log("Server is running on port \"3000\".");
})