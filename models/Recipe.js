import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  publisher: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
  },
  cookingTime: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  directions: {
    type: Array,
  },
  img: {
    type: String,
    required: true,
  },
});
const Recipe = mongoose.model("recipe", RecipeSchema);
export default Recipe;
// {

//   ingredients: [
//     { value: "2 avocados" },
//     { value: "1/3 cup diced red onion" },
//     { value: "1/3 cup sundried tomatoes" },
//   ],

//   directions: [
//     { value: "mix ingredients together" },
//     { value: "wrap in eggroll" },
//   ],

// },
