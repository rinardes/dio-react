import React from 'react'
import useODBM from '../../useODBM'
import MovieItem from '../movieItem/MovieItem';
import './movies.css'

function Movies() {

  const {movies} = useODBM();

  return (
    <div className='movies'>
        {movies.moviesList ?(
            movies.moviesList.Search.map((movie)=>(
            <MovieItem title={movie.Title} poster={movie.Poster} imdb={movie.imdbID} />
            ))
        ) : (
            <> </>
        )}
    </div>
    

    
  )
}

export default Movies