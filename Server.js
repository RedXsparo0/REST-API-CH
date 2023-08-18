const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./models/user");
const app = express();
connectDB();
const port = 5000;




User.create([
  { Name: "Ahmed", FavoriteFoods: "Tacos , chicken , pasta" , age: 24 },
  { Name: "Ahmed", FavoriteFoods: "Tacos , chicken " , age: 24 },
  { Name: "Ahmed", FavoriteFoods: "Tacos" , age: 24 },
])
  .then((res) => {
    console.log("data", res);
  })
  .catch((err) => {
    console.log("err", err);
  });

// User.find()
//   .then((res) => {
//     console.log("data", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   });


// const DeleteUser = async (req , res )=> {

// const user = await User.findById("64bbf77c81dd42647fc34929")  
// if(user) user.deleteOne();

// } 
// DeleteUser(); 

// const updateUser = async (req,res) => {
//     const user = await User.findById('64bbf77c81dd42647fc34927')
// if (user) {
//     user.firstName = "updatedname" 
//     user.age = 26

//     await user.save()

// } }
//   updateUser() 
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`running on port ${port}`);
});


