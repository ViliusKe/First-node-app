import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true, min: 3 },
  raiting: { type: String, required: true },
  description: { type: String, required: true, min: 3 },
  imdbLink: { type: String, required: true, min: 3 },
});

export default mongoose.model("Movie", movieSchema);
