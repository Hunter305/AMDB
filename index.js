import express from "express";
import dotenv from "dotenv";
dotenv.config();

import db from "./config/db.js";

const app = express();
const port = process.env.PORT;
db();

app.listen(port, () => {
  console.log(`app connected at port ${port}`);
});
