import React, { useEffect } from 'react'
import { useMovieStore } from '../store/movieStore'
import { getMovies } from '../api/movie'
import SearchBar from '../components/SearchBar';
import { filterMovies } from '../utils/filterMovies';
import useDebondes from '../hooks/useDebondes';
import MovieCard from '../components/MovieCard';
import { data } from 'react-router';

function Home() {
    const {movie, isLoading, error, searchQuery, setMovies, setLoading, setError}= useMovieStore()
    // const movie = useMovieStore(state => state.movie)
    // const movies = getMovies()

    const debouncedQuery = useDebondes(searchQuery)

    
    useEffect(() => {
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
            const filtered = filterMovies(movie, debouncedQuery)
            if (isLoading) return <p>Loading...</p>
            if (error) return <p>{error}</p>
            
            return (
              <div>
      <SearchBar/>
       <div className='list'>
        {filtered.map((movie) => {
          
          return (
            <div key={movie.imdbID}>
          <MovieCard  movie={movie}/>
          </div>
        )})}
       </div>
    </div>
  )
}

export default Home
