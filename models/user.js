const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  Name: {
    type: String,
    require: true,
  },
  FavoriteFoods: [String],
  age: Number,
});

module.exports = User = model("User", userSchema);
