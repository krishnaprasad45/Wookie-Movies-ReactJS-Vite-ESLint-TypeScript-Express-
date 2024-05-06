const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL;

// Connect to MongoDB Atlas
mongoose.connect(mongoUrl);
// Create a model without defining a schema
const Movie = mongoose.model("Movie", {});
export default {
  getAllMovies: async () => {
    try {
      const movies = await Movie.find({});
      return movies;
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  },
};
