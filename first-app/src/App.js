import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import Tea from "./tea";

import searchIcom from "./search.svg";
const API_URL = "http://www.omdbapi.com?apikey=e6c63c**";
const App = () => {
 

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search)

  };
  useEffect(() => {
    // searchMovies("spiderman");
  });
  return (
    <div className="app">
      <h1>Movie Reel </h1>
      <Tea/>

      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} 
        onChange={(e)=>{
            setSearchTerm(e.target.value);
        }} />
        <img src={searchIcom} alt="search" onClick={() => {
    console.warn("Effect....",searchTerm);

            searchMovies(searchTerm);
        }} />
      </div>
        {
            movies?.length > 0 ? (
                <div className="container">
                    {
                        movies.map((movie)=>(
                            <MovieCard movie={movie}/>
                        ))
                    }
                </div>
            ) : (<div>
                <h2>No movies found</h2>
            </div>)
        }
    </div>
  );
};

export default App;
