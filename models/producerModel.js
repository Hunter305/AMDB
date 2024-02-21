import mongoose, { Schema } from "mongoose";

const producerSchema = new Schema({
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  bio: { type: String, required: true },
});

const Producer = mongoose.model("Producer", producerSchema);

export default Producer;
