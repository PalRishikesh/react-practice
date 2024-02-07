import React from 'react'

const MovieDetail = ({ movie }) => {
    return (
        <div>
            <li key={movie.id} className="movie">
                <img src={movie.poster} alt="movie" />
                <p>{movie.title}</p>
                <p>{movie.year}</p>
                <p>Rating: {movie.rating}</p>
                <p>Run time: {movie.runtime}</p>
            </li>
        </div>
    )
}

export default MovieDetail
