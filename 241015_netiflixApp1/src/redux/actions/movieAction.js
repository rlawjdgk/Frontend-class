// const getMovies = () => {};

// export default movies = { getMovies };
import api from "../api";

const API_KEY = import.meta.env.VITE_API_KEY;

const getMovies = () => {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`
    );
    const toRatedMovieApi = api.get(
      `movie/top_rated?api_key=${API_KEY}&language=ko-kr&page=1`
    );
    const upComingMovieApi = api.get(
      `movie/upcoming?api_key=${API_KEY}&language=ko-kr&page=1`
    );

    const [popularMovie, toRatedMovie, upComingMovie] = await Promise.all([
      popularMovieApi,
      toRatedMovieApi,
      upComingMovieApi,
    ]);

    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovie: popularMovie.data,
        toRatedMovie: toRatedMovie.data,
        upComingMovie: upComingMovie.data,
      },
    });
    console.log(popularMovie, toRatedMovie, upComingMovie);
  };
};

export const movieAction = { getMovies };
