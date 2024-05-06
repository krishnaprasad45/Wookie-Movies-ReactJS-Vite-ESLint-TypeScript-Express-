import { Document, Schema, model } from 'mongoose';

interface Movie {
  title: string;
  director?: string;
  releaseYear?: number;
  genre: string[];
  actors: string[];
  plot?: string;
  rating?: number;
  runtime?: number;
}

const movieSchema = new Schema<Movie & Document>({
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

const MovieInterface = model<Movie & Document>('Movie', movieSchema);
export default MovieInterface;
