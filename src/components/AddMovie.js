import React, { useState } from 'react';
import './AddMovie.css';

function AddMovie({ addMovie }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !posterURL || !rating) {
      alert('Please fill in all fields');
      return;
    }

    const newMovie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating),
    };

    addMovie(newMovie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        min="1"
        max="5"
        step="0.1"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;
