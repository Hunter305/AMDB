import express from "express";
import {
  createMovie,
  deleteMovie,
  findMovies,
  updateMovie,
  findMovie,
} from "../controllers/movieController.js";

const router = express.Router();

router.post("/", createMovie);

router.get("/", findMovies);

router.route("/:id").patch(updateMovie).delete(deleteMovie).get(findMovie);

export default router;
