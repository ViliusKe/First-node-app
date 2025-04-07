import express from "express";
import "dotenv/config";
import movieRouter from "./src/routes/movie.js";

const app = express();

app.use(express.json());

app.use(movieRouter);

app.use((req, res) => {
  return res.status(404).json({ message: "Endpoint does not exist" });
});

// const port = 3000;

app.listen(process.env.PORT, () => {
  console.log(`APP STARTED ON PORT ${process.env.PORT}`);
});
