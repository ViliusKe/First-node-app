import express from "express";
import {
  MOVIE_LIST,
  MOVIE_LIST_BY_ID,
  MOVIE_LIST_SORTED,
  INSERT_MOVIE,
  DELETE_MOVIE_BY_ID,
  UPDATE_MOVIE,
} from "../controllers/movie.js";

const router = express.Router();

router.get("/movies", MOVIE_LIST);

router.get("/movies/:id", MOVIE_LIST_BY_ID);

router.get("/movies-sorted", MOVIE_LIST_SORTED);

router.post("/movies", INSERT_MOVIE);

router.put("/movies/:id", UPDATE_MOVIE);

router.delete("/movies/:id", DELETE_MOVIE_BY_ID);

export default router;
