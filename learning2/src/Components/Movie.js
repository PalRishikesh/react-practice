import { movies } from "../data/movie"
import MovieAnalytics from "./MovieAnalytics";
import MovieDetail from "./MovieDetail";

const fetchMoviesData=()=>{
    return movies;
}
const Movie = () => {
    const movieData = fetchMoviesData();
    return (
        <div className="movie-cntainer">
            <h2>Movies</h2>
            <MovieDetail movies={movieData}/>
            <MovieAnalytics data= {movieData}/>
            
        </div>
    )
}

export default Movie
