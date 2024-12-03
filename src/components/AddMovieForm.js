import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (!title.trim()) {
      alert("Please enter a valid movie title.");
      return;
    }
    const newMovie={id: Date.now(),title, watched:false};
    onAddMovie(title.trim());
    setTitle("");

  };

  return(
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      placeholder="Enter a movie title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}>
      </input>
      <button>Add Movie</button>
       </form>
  ); // TODO: add a form to add a new movie
}
