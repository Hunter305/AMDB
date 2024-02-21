import mongoose, { Schema } from "mongoose";

const producerSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  dob: { type: String, required: true },
  bio: { type: String, required: true },
});

const Producer = mongoose.model("Producer", producerSchema);

export default Producer;
