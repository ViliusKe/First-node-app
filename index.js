import express from "express";
import "dotenv/config";
import movieRouter from "./src/routes/movie.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.log(err);
  });

app.use(movieRouter);

app.use((req, res) => {
  return res.status(404).json({ message: "Endpoint does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`APP STARTED ON PORT ${process.env.PORT}`);
});
