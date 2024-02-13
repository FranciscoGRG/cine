const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjlkY2U4YWU2ZmFiYTU1NDlhN2EwMGY0ODJjMGZhZiIsInN1YiI6IjY1YjdjZTljYTI4NGViMDE2MzBiMzBiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E_NhWU7wArsmfx2HM1P1cxDOrFHv4Kd-R1SELKDuinQ'

export const ObtenerPeliculas = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };

    try {
        const responseMovies = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
        const dataMovies = await responseMovies.json();
        return (dataMovies.results);
    } catch (error) {
        console.error(error);
    }
};

export const ObtenerGerenos = async () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };

    try {
        const responseGenres = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en-US', options);
        const dataGenres = await responseGenres.json();
        return (dataGenres.genres);
    } catch (error) {
        console.error(error);
    }
};

export const ObtenerPelisNuevas = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return (data.results)
    } catch (error) {
        console.error('Error fetching movie details:', error);
    }
};

export const ObtenerPelisId = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}`;

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjlkY2U4YWU2ZmFiYTU1NDlhN2EwMGY0ODJjMGZhZiIsInN1YiI6IjY1YjdjZTljYTI4NGViMDE2MzBiMzBiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E_NhWU7wArsmfx2HM1P1cxDOrFHv4Kd-R1SELKDuinQ'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const ObtenerDetalles = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=es`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token,
        },
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};

export const ObtenerCasting = async (id) => {
    const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token,
        },
    };

    try {
        const response = await fetch(creditsUrl, options);
        const data = await response.json();
        return data.cast;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        throw error;
    }
};

export const ObtenerPeliNombre = async (searchQuery) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&language=es`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie credits:', error);
        throw error;
    }
}

export const AddFavorite = async (peli) => {
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        const isAlreadyFavorite = favorites.some((favorite) => favorite.id === peli.id);

        if (!isAlreadyFavorite) {
            favorites.push(peli);

            localStorage.setItem('favorites', JSON.stringify(favorites));

            console.log('Película agregada a favoritos:', peli);
            alert('Película agregada a favoritos:', peli)
        } else {
            console.log('La película ya está en favoritos:', peli);
            alert('La película ya está en favoritos:', peli)
        }
    } catch (error) {
        console.error('Error al agregar película a favoritos:', error);
        alert('Error al agregar película a favoritos:', error)
    }
};

export const GetFavorites = () => {
    try {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

        console.log('Películas favoritas:', favorites);

        return favorites;
    } catch (error) {
        console.error('Error al obtener películas favoritas:', error);
        return [];
    }
};

export const AddTicket = (formularioData) => {
    try {
        const tickets = JSON.parse(localStorage.getItem('tickets')) || [];

        tickets.push(formularioData);

        localStorage.setItem('tickets', JSON.stringify(tickets));

        console.log('Ticket añadido:', formularioData);
        alert('Compra realizada')
    } catch (error) {
        console.error('Error al añadir el ticket:', error);
    }
};

export const GetTickets = () => {
    try {
        const storedTickets = localStorage.getItem('tickets');

        if (!storedTickets) {
            return [];
        }

        const tickets = JSON.parse(storedTickets);

        return tickets;
    } catch (error) {
        console.error('Error al obtener los tickets:', error);
        return [];
    }
};

