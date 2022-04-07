import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// const connectDB = require("./config/db");

import recipeRoutes from "./routes/api/recipes.js";
import mongoose from "mongoose";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//connect database
// connectDB();
app.use("/recipes", recipeRoutes);

const CONNECTION_URL =
  "mongodb+srv://recipeapp:Sugarsugar456@cluster0.bqg3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const port = process.env.PORT || 8082;

mongoose
  .connect(
    "mongodb+srv://recipeapp:Sugarsugar456@cluster0.bqg3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() =>
    app.listen(port, () =>
      console.log(`Server running on PORT https://localhost:${port}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
