import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjlkY2U4YWU2ZmFiYTU1NDlhN2EwMGY0ODJjMGZhZiIsInN1YiI6IjY1YjdjZTljYTI4NGViMDE2MzBiMzBiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E_NhWU7wArsmfx2HM1P1cxDOrFHv4Kd-R1SELKDuinQ'
        }
      };

      try {
        const responseMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const dataMovies = await responseMovies.json();
        setMovies(dataMovies.results);

        const responseGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', options);
        const dataGenres = await responseGenres.json();
        setGenres(dataGenres.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Cartelera de Cine</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 text-white p-4 rounded-md shadow-md">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-400">{movie.release_date}</p>
            <p className="text-gray-300 mt-2">{movie.overview}</p>
            <p className="text-blue-500 mt-4">
              Géneros: {movie.genre_ids.map((genreId) => genres.find((genre) => genre.id === genreId)?.name).join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
