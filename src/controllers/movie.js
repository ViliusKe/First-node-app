import MovieModel from "../models/movie.js";
import { v4 as uuidv4 } from "uuid";

const MOVIE_LIST = async (req, res) => {
  try {
    const response = await MovieModel.find();

    return res.status(200).json({
      movies: response,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Problems occured",
    });
  }
};

const MOVIE_LIST_BY_ID = async (req, res) => {
  try {
    const response = await MovieModel.findOne({ id: req.params.id });

    if (!response) {
      return res.status(404).json({
        message: `Movie with id ${req.params.id} does not exist`,
      });
    }

    return res.status(200).json({
      movie: response,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Problems occured",
    });
  }
};

const MOVIE_LIST_SORTED = async (req, res) => {
  try {
    const response = await MovieModel.find();
    const sortedMovies = [...response].sort((a, b) => b.raiting - a.raiting);

    return res.status(200).json({
      movies: sortedMovies,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Problems occured",
    });
  }
};

const INSERT_MOVIE = async (req, res) => {
  try {
    const movie = new MovieModel({
      id: uuidv4(),
      title: req.body.title,
      raiting: req.body.raiting,
      description: req.body.description,
      imdbLink: req.body.imdbLink,
    });

    const response = await movie.save();

    return res.status(201).json({
      message: "ok",
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Problems occured",
    });
  }
};

const DELETE_MOVIE_BY_ID = async (req, res) => {
  try {
    const response = await MovieModel.deleteOne({ id: req.params.id });

    if (!response) {
      return res.status(404).json({
        message: `Movie with id ${req.params.id} does not exist`,
      });
    }

    return res.status(200).json({
      message: `Movie with id ${req.params.id} was removed`,
      movie: response,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Problems occured",
    });
  }
};

const UPDATE_MOVIE = async (req, res) => {
  try {
    const response = await MovieModel.findOneAndUpdate(
      { id: req.params.id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json({
      message: "updated",
      response: response,
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Problems occured",
    });
  }
};

export {
  MOVIE_LIST,
  MOVIE_LIST_BY_ID,
  MOVIE_LIST_SORTED,
  INSERT_MOVIE,
  DELETE_MOVIE_BY_ID,
  UPDATE_MOVIE,
};
