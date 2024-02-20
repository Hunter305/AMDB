import mongoose from "mongoose";

const actorSchema = new mongoose.Schema({
  name: { unique: true, type: String, required: true },
});

const Actor = mongoose.model("Actor", actorSchema);

export default Actor;
