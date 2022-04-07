import mongoose from "mongoose";
import config from "config";
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://recipeapp:Sugarsugar456@cluster0.bqg3h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
      }
    );
    console.log("hello");
  } catch (err) {
    console.log("not working ");
    console.error(err.message);
    process.exit(1);
  }
};
export default connectDB;
