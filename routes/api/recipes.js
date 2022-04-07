import express from "express";
import {
  getRecipes,
  getRecipe,
  createRecipe,
} from "../../controllers/controllers.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", createRecipe);
router.get("/:id", getRecipe);
export default router;
