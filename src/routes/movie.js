import express from "express";
import {
  MOVIE_LIST,
  MOVIE_LIST_BY_ID,
  MOVIE_LIST_SORTED,
  INSERT_MOVIE,
  DELETE_MOVIE_BY_ID,
  UPDATE_MOVIE,
} from "../controllers/movie.js";
import auth from "../middleware/auth.js";
import validate from "../middleware/validation.js";
import createTaskSchema from "../schemas/movie.js";

const router = express.Router();

router.get("/movies", auth, MOVIE_LIST);

router.get("/movies/:id", auth, MOVIE_LIST_BY_ID);

router.get("/movies-sorted", auth, MOVIE_LIST_SORTED);

router.post("/movies", validate(createTaskSchema), auth, INSERT_MOVIE);

router.put("/movies/:id", auth, UPDATE_MOVIE);

router.delete("/movies/:id", auth, DELETE_MOVIE_BY_ID);

export default router;
