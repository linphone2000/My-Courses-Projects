//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const homeStartingContent =
  "Welcome to our Website! Discover a world of possibilities at our website, where simplicity meets elegance. We are here to provide you with the finest services and solutions to meet your needs. With a team of dedicated professionals, we strive to offer you an exceptional experience. Explore our range of products and services designed to enhance your lifestyle. From cutting-edge technology to exquisite craftsmanship, we bring you the best of the best. Our commitment to quality and customer satisfaction sets us apart. Join our community of like-minded individuals who appreciate the finer things in life. Immerse yourself in a world of inspiration and creativity.";
const aboutContent =
  "Let us guide you on a journey of discovery and help you unleash your full potential.";
const contactContent =
  "At our website, we believe in the power of innovation. We constantly strive to push boundaries and challenge conventions. Our aim is to provide you with the tools and knowledge to excel in every aspect of your life.Experience the difference with us. Start exploring today and unlock a world of endless possibilities. We are here to support and inspire you every step of the way.";
const posts = [{ title: "Big Title", content: homeStartingContent }];
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    posts: posts,
  });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody,
  };
  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postName",(req,res) =>{
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach((post)=>{
    const storedTitles = _.lowerCase(post.title);
    if (storedTitles === requestedTitle){
      res.render("post",{
        post: post
      })
    }
  });
})

app.listen(3000, () => {
  console.log("Server running.");
});
