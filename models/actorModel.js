import mongoose, { Schema } from "mongoose";

const actorSchema = new Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
});

const Actor = mongoose.model("Actor", actorSchema);

export default Actor;
