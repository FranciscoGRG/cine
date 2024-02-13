import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { startLoadingFilms, setFilms } from '../slices/filmSlice';
import { ObtenerDetalles } from '../js/script'
import { AddFavorite } from '../js/script'; 


const MovieDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.films.films);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        dispatch(startLoadingFilms());
        const pelis = await ObtenerDetalles(id);
        dispatch(setFilms(pelis));

      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [dispatch]);

  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg flex justify-center items-center">
      {movieDetails ? (
        <div className="flex">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{movieDetails.title}</h1>
            <p className="text-gray-300 mb-6">{movieDetails.overview}</p>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Géneros: {movieDetails.genres ? movieDetails.genres.map(genre => genre.name).join(', ') : 'No genres available'}
                </h2>
                <h2 className="text-xl font-semibold mb-2">Puntuación: {movieDetails.vote_average}</h2>
              </div>
            </div>

            <Link to={`/buyTicket/${movieDetails.title}`}>
              <button className="bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline mb-4">
                Comprar Entrada
              </button>
            </Link>
            <button onClick={() => AddFavorite(movieDetails)} className="bg-[#0171c2] ml-4 text-white py-2 px-4 rounded-full hover:bg-[#214c6b] focus:outline-none focus:shadow-outline mb-4">
              Añadir a favoritos 
            </button>
          </div>
          <div className="flex-none">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movieImage mb-4 rounded-lg shadow"
            />
          </div>
        </div>
      ) : (
        <p className="text-gray-400">Cargando...</p>
      )}
    </div>
  );



}


export default MovieDetails