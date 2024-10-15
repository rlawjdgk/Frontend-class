let initialState = {
  popularMovie: {},
  toRatedMovie: {},
  upComingMovie: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovie: payload.popularMovie,
        toRatedMovie: payload.toRatedMovie,
        upComingMovie: payload.upComingMovie,
      };

    default:
      return { ...state };
  }
};

export default movieReducer;
