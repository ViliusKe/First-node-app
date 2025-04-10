import express from "express";
import {
  MOVIE_LIST,
  MOVIE_LIST_BY_ID,
  MOVIE_LIST_SORTED,
  INSERT_MOVIE,
  DELETE_ALL_MOVIES,
} from "../controllers/movie.js";

import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.get("/movieList", MOVIE_LIST);

router.get("/movieListById/:id", MOVIE_LIST_BY_ID);

router.get("/movieListSorted", MOVIE_LIST_SORTED);

router.post("/insertMovie", INSERT_MOVIE);

router.delete("/deleteAllMovies", DELETE_ALL_MOVIES);

export default router;
