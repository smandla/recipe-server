import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

import recipeRoutes from "./routes/api/recipes.js";
import mongoose from "mongoose";
const app = express();
dotenv.config();
// import API_URL_pass from './'
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//connect database
// connectDB();
app.use("/recipes", recipeRoutes);
console.log(process.env.REACT_APP_API);
const CONNECTION_URL = `mongodb+srv://recipeapp:${process.env.REACT_APP_API}@cluster0.bqg3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const port = process.env.PORT;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
  })
  .then(() =>
    app.listen(port, () =>
      console.log(`Server running on PORT https://localhost:${port}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set("useFindAndModify", false);
