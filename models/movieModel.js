import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema({
  movieName: { type: String, required: true },
  yearOfRelease: { type: Number, required: true },
  plot: { type: String, required: true },
  posterName: { type: String, required: true },
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
  producer: { type: Schema.Types.ObjectId, ref: "Producer", required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
