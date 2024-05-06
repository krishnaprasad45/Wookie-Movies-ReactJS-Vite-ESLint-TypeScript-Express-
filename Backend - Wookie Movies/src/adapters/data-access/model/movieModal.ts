const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: String,
  releaseYear: Number,
  genre: [String],
  actors: [String],
  plot: String,
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  runtime: Number
});

const Movie = mongoose.model('movies', movieSchema);

export default Movie
