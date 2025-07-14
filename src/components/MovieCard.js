import React from 'react';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${title}`);
  };

  return (
    <div className="movie-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Rating:</strong> {rating} / 5</p>
    </div>
  );
}


export default MovieCard;
