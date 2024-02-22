import Movie from "../models/movieModel.js";

const createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const findMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("actors producer");
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) {
      return res.status(404).send();
    }
    res.send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).send();
    }
    res.send(movie);
  } catch (error) {
    res.status(500).send(error);
  }
};

const findMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("actors producer");
    res.json(movie);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { createMovie, findMovies, updateMovie, deleteMovie, findMovie };
