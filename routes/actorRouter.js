import express from "express";
import {
  createActor,
  deleteActor,
  findActor,
  findActors,
  updateActor,
  findMoviesOfActor,
} from "../controllers/actorController.js";

const router = express.Router();

router.route("/").get(findActors).post(createActor);
router.route("/:id").get(findActor).patch(updateActor).delete(deleteActor);
router.route("/movies/:id").get(findMoviesOfActor);

export default router;
