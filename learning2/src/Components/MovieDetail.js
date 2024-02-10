import React from 'react'
import MovieRating from './MovieRating'

const MovieDetail = ({ movies }) => {
    return (
        <div>
            <h2>Movie List</h2>
            <ul className="movie-list">
                {
                    movies.map((movie) => (
                        <li key={movie.id} className="movie">
                            <img src={movie.poster} alt="movie" />
                            <p>{movie.title}</p>
                            <p>{movie.year}</p>
                            <p>Run time: {movie.runtime}</p>
                            <MovieRating rating={movie.rating}/>
                        </li>
                    ))
                }
            </ul>


        </div>
    )
}

export default MovieDetail
