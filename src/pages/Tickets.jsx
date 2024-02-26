import React from 'react';
import { GetTickets } from '../js/script';
import { useSelector, useDispatch } from 'react-redux';

function Tickets() {
    const tickets = GetTickets();

    //Aqui recojo los tickets y los muestro, solo los muestro en console.log porque ya los tengo con el almacenamiento local
    const tickets2 = useSelector((state) => state.tickets.tickets);
    console.log("Tiket Email: " + tickets2.email + ", Ticket Tittle: " + tickets2.title)


    return (
        <div className="max-w-xl mx-auto my-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Mis Tickets</h1>
            {tickets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tickets.map((ticket, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600 mb-2">Nombre: {ticket.title}</p>
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
