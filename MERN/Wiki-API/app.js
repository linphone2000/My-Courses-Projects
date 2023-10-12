const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/wikiDB");
const articleSchema = {
  title: String,
  content: String,
};
const Article = mongoose.model("Article", articleSchema);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    console.log(articles);
    res.send(articles)
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while retrieving items.");
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
