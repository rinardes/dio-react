import { useContext } from "react";
import MovieContext from "./AppContext/Context";

const useODBM = () => {
  const { movies, getMovie } = useContext(MovieContext);

  return { movies, getMovie };
};

export default useODBM;
