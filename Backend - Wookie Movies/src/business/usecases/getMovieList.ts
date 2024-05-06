import movieRepository from '../../adapters/data-access/repository/movieRepository';

const getMovieList = async () => {
  try {
    const movieData = await movieRepository.getAllMovies();
    return movieData;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching movies");
  }
};

export default getMovieList;
