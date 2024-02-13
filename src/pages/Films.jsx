import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useSelector, useDispatch } from 'react-redux';
import { setGenres } from '../slices/filmSlice';
import { setFilms } from '../slices/filmSlice'; 
import { ObtenerGerenos } from '../js/script';
import { ObtenerPeliculas } from '../js/script'; 

function Films() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.films.films);
  const genres = useSelector((state) => state.films.genres);
  const [loadingGenres, setLoadingGenres] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {

        const fetchedMovies = await ObtenerPeliculas()
        dispatch(setFilms(fetchedMovies))

        const fetchedGenres = await ObtenerGerenos();
        dispatch(setGenres(fetchedGenres));

      } catch (error) {
        console.error('Error fetching genres:', error);
      } finally {
        setLoadingGenres(false);
      }
    };

    fetchGenres();
  }, [dispatch]);

  return (
    <>
      <h1 className='title'>Ultimos estrenos</h1>

      {loadingGenres ? (
        <p>Loading genres...</p>
      ) : (
        <ul className='moviesGrid'>
          {movies.map((peli) => (
            <MovieCard key={peli.id} peli={peli} genres={genres} />
          ))}
        </ul>
      )}
    </>
  );
}

export default Films;
