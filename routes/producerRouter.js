import express from "express";
import {
  createProducer,
  deleteProducer,
  findProducer,
  producers,
  updateProducer,
} from "../controllers/producerController.js";

const router = express.Router();

router.route("/").post(createProducer).get(producers);

router.route("/:id").patch(updateProducer).delete(deleteProducer).get(findProducer);

export default router;
