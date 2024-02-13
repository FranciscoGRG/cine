/* eslint-disable react/prop-types */
// import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MovieCard.css'

function MovieCard({ peli }) {
  
  return (
    <li className="movieCard">
      <Link to={`/movieDetail/${peli.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`}
          alt={peli.title}
          width={230}
          height={345}
          className="movieImage"
        />
        </Link>
        <p>{peli.title}</p>
    </li>
  );
}

export default MovieCard;
