import React, { useEffect } from 'react'
import { useMovieStore } from '../store/movieStore'
import { getMovies } from '../api/movie'
import SearchBar from '../components/SearchBar';

function Home() {
    const {movie,isLoading, error, searchQuery, setMovies, setLoading, setError}= useMovieStore()
    // const movies = getMovies()
    // console.log(movies);
    useEffect(() => {
          fetch('http://localhost:3000/api/movie')
          .then((response) => {
              if (!response.ok) {
              throw new Error('Network response was not ok');
          }
              return response.json();
          })
              .then((data) => {
                console.log(data);
              setLoading(true);
              })
              .catch((error) => {
              setError(error);
              setLoading(false);
          });
      }, []);

      if (isLoading) return <p>Loading...</p>
      if (error) return <p>{error}</p>
  return (
    <div>
      <SearchBar/>
       <div className=''></div>
    </div>
  )
}

export default Home
