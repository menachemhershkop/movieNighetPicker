import React from 'react'
import { Link } from 'react-router'
function MovieCard({movie}) {
  
  return (
    <div>

      <Link to={`/movie/${movie.imdbID}`}>
      <div className='card'>
        <h3>{movie.Title}</h3>
        <img src={movie.Images[0]}></img>
        <p>year: {movie.Year}</p>
        <p>Language: {movie.Language}</p>
        <p>ganer: {movie.Genre}</p>
        <p>Runtime: {movie.Runtime}</p>
      </div></Link>
    </div>
  )
}

export default MovieCard
