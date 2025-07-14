import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import { Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

function App() {
  const [movies, setMovies] = useState([
  {
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology.',
    posterURL: 'https://play-lh.googleusercontent.com/-qtECEmfe9yjg9w57QlILDP8Bgk5mT-cOUduloX_48y_NGYaP4dgZnrY0tUP7WX5x-vXEKhOzWL-QgFXyp4',
    rating: 4.8,
    trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',  // Inception trailer embed link
  },
  {
    title: 'The Dark Knight',
    description: 'Batman battles the Joker to save Gotham City.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg',
    rating: 4.9,
    trailerURL: 'https://www.youtube.com/embed/EXeTwQWrcwY',  // The Dark Knight trailer embed link
  },
  {
    title: 'Harry Potter and the Sorcerer’s Stone',
    description: 'A young boy discovers he is a wizard on his 11th birthday and attends Hogwarts School of Witchcraft and Wizardry.',
    posterURL: 'https://m.media-amazon.com/images/I/71p2Pf8CyoS.jpg',
    rating: 4.7,
    trailerURL: 'https://www.youtube.com/embed/VyHV0BRtdxo',  // Harry Potter trailer embed link
  },
  {
    title: 'Interstellar',
    description: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity\'s survival.',
    posterURL: 'https://ih1.redbubble.net/image.3197148878.7432/fposter,small,wall_texture,square_product,600x600.jpg',
    rating: 4.6,
    trailerURL: 'https://www.youtube.com/embed/zSWdZVtXT7E',  // Interstellar trailer embed link
  },
]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const matchesRating = ratingFilter ? movie.rating >= parseFloat(ratingFilter) : true;
    return matchesTitle && matchesRating;
  });

  // Function to add a new movie to state
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
  <Routes>
    <Route
      path="/"
      element={
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1>Welcom to the Movie App</h1>

          <AddMovie addMovie={addMovie} />

          <Filter
            titleFilter={titleFilter}
            setTitleFilter={setTitleFilter}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
          />

          <MovieList movies={filteredMovies} />
        </div>
      }
    />

    <Route
      path="/movie/:title"
      element={<MovieDetails movies={movies} />}
    />
  </Routes>
);
}
export default App;
