import React from 'react'
import { GetFavorites } from '../js/script'
import MovieCard from '../components/MovieCard'

function Favorites() {

    let movieDetails = GetFavorites()

    return (
        <ul className='moviesGrid'>
            {movieDetails.map((peli) => (
                <MovieCard key={peli.id} peli={peli} />
            ))}
        </ul>
    )
}

export default Favorites
