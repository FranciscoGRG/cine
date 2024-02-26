import React from 'react';
import { GetTickets } from '../js/script';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Tickets() {
    const tickets = GetTickets();
    const tickets2 = useSelector((state) => state.tickets.tickets);

    //Lo muestro por consola solo para comprobar que funciona el slice ya que los favoritos y tickets lo tengo por localStorage
    console.log("Tiket Email: " + tickets2.email + ", Ticket Tittle: " + tickets2.title + ", id: " + tickets2.id)

    return (
        <div className="max-w-4xl mx-auto my-8 bg-gray-800 text-white p-8 rounded-lg">
            <h1 className="text-4xl font-bold mb-8 text-center">Mis Entradas</h1>
            {tickets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tickets.map((ticket, index) => (
                        <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                            <p className="text-gray-200 font-semibold mb-2">Película: {ticket.title}</p>
                            <p className="text-gray-300 mb-2">Fila: {ticket.fila}</p>
                            <p className="text-gray-300 mb-2">Hora: {ticket.hora}</p>
                            <Link to={`/movieDetail/${ticket.id}`}>
                                <button className="bg-indigo-700 text-white py-2 px-4 rounded-md mt-4 hover:bg-indigo-800 focus:outline-none focus:ring focus:border-indigo-300">
                                    Ver Detalles
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center">No tienes tickets disponibles.</p>
            )}
        </div>
    );
}

export default Tickets;
