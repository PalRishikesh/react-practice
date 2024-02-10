import React from 'react'
import withFetch from './../HOC/WithFetch'

export const MovieList = (props) => {
    const {movies} = props;
    console.log("movies: ",movies);

  return (
    <div className='movie-container'>
        <h2>Movie List - With HoC</h2>
        {
            <ul>
                {
                    movies.map((movie, index)=>(
                        <li key={index}>
                            <img src={movie.url} alt={movie.title}/>
                            <span>{movie.title}</span>
                        </li>
                    ))
                }
            </ul>
        }
    </div>
  )
}
export default withFetch(MovieList)
