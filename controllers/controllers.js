import express from "express";
import mongoose from "mongoose";

//load recipe model
import Recipe from "../models/Recipe.js";

const router = express.Router();
export const getRecipes = async (req, res) => {
  try {
    const postRecipes = await Recipe.find();
    console.log(postRecipes);
    res.status(200).json(postRecipes);
  } catch (err) {
    console.log("pp[s");
    res.status(404).json({ message: err.message });
  }
};
export const getRecipe = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const recipe = await Recipe.findById(id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createRecipe = async (req, res) => {
  const {
    title,
    publisher,
    ingredients,
    category,
    cuisine,
    servings,
    cookingTime,
    directions,
    img,
  } = req.body;
  const newRecipe = new Recipe({
    title,
    publisher,
    ingredients,
    category,
    cuisine,
    servings,
    cookingTime,
    directions,
    img,
  });
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export default router;
