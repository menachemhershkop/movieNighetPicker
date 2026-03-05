export function filterMovies(movies, query){
    if (!query){
        return movies
    }
    const lower =query.toLowerCase()
    return movies.filter((movie)=> movie.title.toLowerCase().includes(lower)|| movie.gener.join(" ").includes(lower) ) 
}