import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, min: 3 },
  email: { type: String, required: true },
  password: { type: String, required: true },
  movieIds: { type: [String], required: true },
});

export default mongoose.model("User", userSchema);
