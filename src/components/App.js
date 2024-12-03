import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    if (!title.trim()) {
      alert("Please enter a valid movie title.");
      return;
    }
  // TODO: Implement adding a new movie to the list;
    const newMovie = { id: Date.now(), title, watched: false };
    setMovies((prevMovies) => [newMovie, ...prevMovies]);
  };
  

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    setMovies((prevMovies)=>prevMovies.map((movie)=>{
      if(movie.id === id){
        return {...movie, watched: !movie.watched};
      }
      return movie;
    }));
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies((prevMovies)=>prevMovies.filter((movie)=>movie.id !== id));
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      {/* TODO: Add AddMovieForm Component */} 
      <AddMovieForm onAddMovie={handleAddMovie} />
      {/* TODO: Add MovieList Component */} 
      <MovieList movies={movies} onToggleWatched={handleToggleWatched} onDeleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App