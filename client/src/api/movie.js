export async function getMovies (){
    const res = await fetch ("http://http://localhost:3000/api/movie")
    if (!res.ok) throw new Error("movie less");
    return res.json()
}