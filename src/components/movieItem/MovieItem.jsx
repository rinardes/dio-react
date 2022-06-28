import React from 'react'
import './MovieItem.css'

function MovieItem(props) {
  const {poster, title, imdb } = props
  return (
    <div className='movie__item'>
      <a href={`https://www.imdb.com/title/${imdb}/`} target={'_blank'}>
        <img src={poster} alt="" />
      </a>
        <h1>{title}</h1>
    </div>
  )
}

export default MovieItem