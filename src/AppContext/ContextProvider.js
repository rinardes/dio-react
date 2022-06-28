import MovieContext from "./Context";
import api from "./api";
import { useState, useCallback } from "react";

const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState({
    canSearch: false,
    moviesList: undefined,
  });

  const getMovie = (movie) => {
    const params = {
      apikey: process.env.REACT_APP_API_KEY,
      s: `${movie}`,
    };

    api.get("", { params }).then(({ data }) => {
      if (data.Response == "False") return;
      setMovies({
        canSearch: true,
        moviesList: data,
      });
    });
  };

  const contextValues = {
    movies,
    getMovie: useCallback((movie) => getMovie(movie), []),
  };

  return (
    <MovieContext.Provider value={contextValues}>
      {children}
    </MovieContext.Provider>
  );
};

export default ContextProvider;
