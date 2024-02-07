import { movies } from "../data/movie"
import MovieDetail from "./MovieDetail";

const fetchMoviesData=()=>{
    return movies;
}
const Movie = () => {
    const movieData = fetchMoviesData();
    return (
        <div className="movie-cntainer">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    movieData.map((movie, index)=>(
                      <MovieDetail key={movie.id} movie={movie} index={index}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Movie
