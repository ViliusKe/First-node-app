let movies = [
  {
    id: "1",
    title: "Pulp Fiction",
    raiting: 92,
    description: "American independent crime film.",
    imdbLink: "https://www.imdb.com/title/tt0110912/",
  },
  {
    id: "2",
    title: "The Boys",
    raiting: 86,
    description:
      "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
    imdbLink: "https://www.imdb.com/title/tt1190634/",
  },
];

const MOVIE_LIST = (req, res) => {
  if (!movies.length) {
    return res.status(404).json({
      message: "There are no movies",
    });
  }
  return res.status(200).json({
    movies: movies,
  });
};

const MOVIE_LIST_BY_ID = (req, res) => {
  const id = req.params.id;

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return res.status(404).json({
      message: `Movie with id ${id} does not exist`,
    });
  }
  return res.status(200).json({
    movie: movie,
  });
};

const MOVIE_LIST_SORTED = (req, res) => {
  if (!movies.length) {
    return res.status(404).json({
      message: "There are no movies",
    });
  }
  const sortedMovies = [...movies].sort((a, b) => b.raiting - a.raiting);

  return res.status(200).json({
    message: "ok",
    movies: sortedMovies,
  });
};

const INSERT_MOVIE = (req, res) => {
  const movie = {
    // id: uuidv4(),
    id: req.body.id,
    title: req.body.title,
    raiting: req.body.raiting,
    description: req.body.description,
    imdbLink: req.body.imdbLink,
  };

  movies.push(movie);

  return res.status(201).json({
    message: "ok",
  });
};

export { MOVIE_LIST, MOVIE_LIST_BY_ID, MOVIE_LIST_SORTED, INSERT_MOVIE };
