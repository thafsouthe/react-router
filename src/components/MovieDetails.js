import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MovieDetails.css'; // Create this CSS file for styling

function MovieDetails({ movies }) {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.title === title);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating} / 5</p>

      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          title={movie.title + ' Trailer'}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MovieDetails;
