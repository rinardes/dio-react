import "./App.css";
import MovieContext from "./AppContext/Context";
import { useContext, useEffect } from "react";
import Movies from "./components/movies/Movies";
import useODBM from "./useODBM";
import Header from "./components/header/Header";


function App() {  
  
  const {movies, getMovie} = useODBM();


  return (
    <div className="layout">
      <Header/>
      {movies.canSearch ? (
        <Movies />
      ): (
        <></>
      )}
    </div>  
  )
 
}

export default App;
