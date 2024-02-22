import express from "express";
import {
  createMovie,
  deleteMovie,
  findMovies,
  updateMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/", createMovie);

router.get("/", findMovies);

router.patch("/:id", updateMovie);

router.delete("/:id", deleteMovie);

export default router;
