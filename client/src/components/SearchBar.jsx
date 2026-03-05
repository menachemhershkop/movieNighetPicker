import React from 'react'
import { useMovieStore } from '../store/movieStore'

function SearchBar() {
  const setSearchQuery = useMovieStore(state=>state.setSearchQuery)
  return (
    <div>
      <input type="text" placeholder='Search by title or genre' onChange={(e)=>setSearchQuery(e.target.value)}/>
    </div>
  )
}

export default SearchBar
