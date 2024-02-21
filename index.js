import express from "express";
import dotenv from "dotenv";
dotenv.config();

import db from "./config/db.js";
db();

import actorRouter from "./routes/actorRouter.js";
import producerRouter from "./routes/producerRouter.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("app is running");
});

app.use("/api/actor", actorRouter);
app.use("/api/producer", producerRouter);

app.listen(port, () => {
  console.log(`app connected at port ${port}`);
});
