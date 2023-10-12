const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

// Schemas
// Fruit Schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});
const Fruit = mongoose.model("Fruit", fruitSchema);
// Person Schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  favouriteFruit: [fruitSchema],
});
const Person = mongoose.model("Person", personSchema);

// Creation
// const pineapple = new Fruit({
//   name: "Pineapple",
//   rating: "9",
//   review: "Good Fruit",
// });
// pineapple.save();
// const banana = new Fruit({
//   name: "Banana",
//   rating: "6",
//   review: "Long fruit",
// });
// const orange = new Fruit({
//   name: "Orange",
//   rating: "8",
//   review: "Favorite fruit",
// });
// Fruit.insertMany([kiwi, orange, banana])
//   .then(() => {
//     console.log("Successfully saved all the fruist to fruitsDB.");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const person1 = new Person({
//   name: "Myint Zaw",
//   age: 21,
// });
// const person2 = new Person({
//   name: "Aung",
//   age: 18,
// });
// const person3 = new Person({
//   name: "Kaung",
//   age: 35,
// });
// Person.insertMany([person1, person2, person3])
//   .then(() => {
//     console.log("People inserted.");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });
// person.save();

// Reading
const getFruits = async () => {
  try {
    const fruits = await Fruit.find();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
    // mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
};
getFruits();

// Update
const updateFruit = async () => {
  try {
    const fruit = await Fruit.findOne({name:"Kiwi"})
    const result = await Person.updateOne(
        { name: "Kaung" }, 
        { $push: {favouriteFruit: fruit} }
    );
    if (result) {
      console.log("Fruit updated.");
    }
  } catch (err) {
    console.log(err);
  }
};
updateFruit();

// Delete
const deleteFruit = async () => {
  try {
    const result = await Fruit.deleteOne({ name: "Strawberry" });
    if (result) {
      console.log("Strawberry Deleted.");
    }
  } catch (err) {
    console.log(err);
  }
};
deleteFruit();

const deletePerson = async () => {
  try {
    const result = await Person.deleteMany({ name: "Aung" });
    if (result) {
      console.log("Person Deleted.");
    }
  } catch (err) {
    console.log(err);
  }
};
deletePerson();