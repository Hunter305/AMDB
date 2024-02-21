import express from "express";
import { createMovie, deleteMovie, findMovies, updateMovie } from "../controllers/movieController";

const router = express.Router();

router.post("/movies", createMovie);

router.get("/movies", findMovies);

router.patch("/movies/:id", updateMovie);

router.delete("/movies/:id", deleteMovie);

export default router;
