import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function MovieSearch() {
  const { searchQuery } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=es`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjlkY2U4YWU2ZmFiYTU1NDlhN2EwMGY0ODJjMGZhZiIsInN1YiI6IjY1YjdjZTljYTI4NGViMDE2MzBiMzBiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E_NhWU7wArsmfx2HM1P1cxDOrFHv4Kd-R1SELKDuinQ'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setMovieDetails(json.results))
      .catch(err => console.error('error:' + err));
  }, [searchQuery]);

  return (
    <>
      <ul className='moviesGrid'>
        {movieDetails.map((peli) => (
          <MovieCard key={peli.id} peli={peli}/>
        ))}
      </ul>
    </>
  );
}

export default MovieSearch;