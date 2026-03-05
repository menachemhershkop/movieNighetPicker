export function filterMovies(movies, query){
    console.log(query);
    
    if (!query){
        return movies
    }
    const lower =query.toLowerCase()
    return movies.filter((movie)=> movie.Title.toLowerCase().includes(lower)|| movie.Genre.includes(lower) ) 
}