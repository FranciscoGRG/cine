import React from 'react';
import { GetTickets } from '../js/script';

function Tickets() {
    const tickets = GetTickets();

    return (
        <div className="max-w-xl mx-auto my-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Mis Tickets</h1>
            {tickets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tickets.map((ticket, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-gray-600 mb-2">Peli: {ticket.ticket}</h2>
                            <p className="text-gray-600 mb-2">Nombre: {ticket.nombre}</p>
                            <p className="text-gray-600 mb-2">Fila: {ticket.fila}</p>
                            <p className="text-gray-600 mb-2">Hora: {ticket.hora}</p>
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
