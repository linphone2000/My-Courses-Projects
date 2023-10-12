//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://linphone:linphone@cluster0.gcpdd8c.mongodb.net/todolistDB");

const itemsSchema = new mongoose.Schema({
  name: String,
});
const Item = mongoose.model("Item", itemsSchema);

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema],
});
const List = mongoose.model("list", listSchema);

const item1 = new Item({
  name: "Welcome to the todolist!",
});
const item2 = new Item({
  name: "Hit the + button to add a new item.",
});
const item3 = new Item({
  name: "<-- Hit this to delete an item.",
});
const defaultItems = [item1, item2, item3];

const insertItems = async () => {
  try {
    const result = await Item.insertMany(defaultItems);
    if (result) {
      console.log("Successfully saved default items to DB.");
    }
  } catch (err) {
    console.log(err);
  }
};

app.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    if (items.length === 0) {
      await insertItems();
      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: items });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while retrieving items.");
  }
});

app.get("/:customRoute", async (req, res) => {
  const customRoute = _.capitalize(req.params.customRoute);
  const listName = await List.findOne({ name: customRoute });
  try {
    if (listName) {
      res.render("list", {
        listTitle: customRoute,
        newListItems: listName.items,
      });
    } else {
      const list = new List({
        name: customRoute,
        items: defaultItems,
      });
      list.save();
      res.redirect("/" + customRoute);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/", async (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  try {
    const newItem = new Item({
      name: itemName,
    });
    if (listName === "Today") {
      await newItem.save();
      res.redirect("/");
    } else {
      const foundList = await List.findOne({ name: listName });
      try {
        foundList.items.push(newItem);
        await foundList.save();
        res.redirect("/" + listName);
      } catch (err) {
        console.log(err);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while adding the item.");
  }
});

app.post("/delete", async (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;
  if (listName === "Today") {
    try {
      await Item.findByIdAndRemove(checkedItemId);
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(500).send("An error occurred while deleting the item.");
    }
  } else {
    const foundList = await List.findOneAndUpdate(
      { name: listName },
      { $pull: { items: { _id: checkedItemId } } }
    );
    try {
      console.log(foundList);
      res.redirect("/" + listName);
    } catch (err) {
      console.log(err);
    }
  }
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
