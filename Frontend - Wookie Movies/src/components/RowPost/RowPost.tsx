import { useState, useEffect } from "react";
import "./RowPost.css";
import { apiAxios } from "../../Constraints/axiosInterceptor";
import { Movie } from "../../Interface/movieInterface";
import Navbar from "../Navbar/Navbar";


const baseUrl = import.meta.env.VITE_BASE_URL;

function RowPost() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const moviesByGenre: { [key: string]: Movie[] } = {};
  const [searchTerm, setSearchTerm] = useState("");

  // Filter movies based on search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    apiAxios.get(baseUrl).then((response) => {
      setMovies(response.data);
    });
  }, []);

  movies.forEach((movie) => {
    movie.genres.forEach((genre: string | number) => {
      if (!moviesByGenre[genre]) {
        moviesByGenre[genre] = [];
      }
      moviesByGenre[genre].push(movie);
    });
  });

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      {/* Passing props to the Navbar component */}
      <div className="movie-list">
        {Object.keys(moviesByGenre).map((genre) => (
          <div key={genre} className="genre-section">
            <h2 className="genre-title">{genre}</h2>
            <div className="movies-row">
              {filteredMovies
                .filter((movie) => movie.genres.includes(genre))
                .map((movie) => (
                  <div key={movie.id} className="movie-card">
                    <img
                      src={movie.poster}
                      alt={movie.title}
                      className="movie-poster"
                    />
                    <div className="movie-details">
                      <h3 className="movie-title">{movie.title}</h3>
                      <p className="movie-rating">
                        IMDb Rating: {movie.imdb_rating}
                      </p>
                      <div className="movie-rating">
                        <span className="star-icon">★</span>
                        <span className="star-icon">★</span>
                        <span className="star-icon">★</span>
                        <span className="star-icon">☆</span>
                        <span className="star-icon">☆</span>
                      </div>
                      <p className="movie-length">Length: {movie.length}</p>
                      <p className="movie-overview">{movie.overview}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RowPost;
