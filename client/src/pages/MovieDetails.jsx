import React, { useEffect } from 'react'
import { Link,useParams } from 'react-router'
import { useMovieStore } from '../store/movieStore';

function MovieDetails() {
  const {id} =useParams();
  const movies = useMovieStore(state => state.movie)
  const {isLoading, error,  setLoading, setError}= useMovieStore()
  
  const setMovies = useMovieStore(state =>state.setMovies)  
   useEffect(() => {
    if (movies.length) return
            fetch('http://localhost:3000/api/movie')
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
            }
                return response.json();
            })
                .then((data) => {
                  setMovies(data)
                  
                  setLoading(true);
                })
                .catch((error) => {
                  setError(error);
                  setLoading(false);
                });
              }, []);
              const movie = movies.find(mov => mov.imdbID ===id)
              console.log(movie);
  if (!movie) return <p>movie not found</p>
  return (
    <div className='detalis'>
      <img src={movie.Images[1]} />
      <p>{movie.Year}</p>
      <p>{movie.Runtime} min</p>
      {/* <p>{movie.Gener.join(", ")}</p> */}

    <Link to={`/seats/${movie.imdbID}`}>
    <button>Select Seats</button>
    </Link>
    </div>
  )
}

export default MovieDetails
