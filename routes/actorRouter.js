import express from "express";
import {
  createActor,
  deleteActor,
  findActor,
  findActors,
  updateActor,
} from "../controllers/actorController.js";

const router = express.Router();

router.route("/").get(findActors).post(createActor);
router.route("/:id").get(findActor).patch(updateActor).delete(deleteActor);

export default router;
