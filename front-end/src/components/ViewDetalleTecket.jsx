import React from 'react';

const ViewDetalleTecket = ({ticket, rol} ) => {

    const statusClasses = {
        open: 'bg-green-100 text-green-800',
        inProgress: 'bg-yellow-100 text-yellow-800',
        closed: 'bg-red-100 text-red-800',
      };
      
      const getRol = {
        admin: 'bg-green-100 text-violet-800',
        user: 'bg-yellow-100 text-green-800',
      };

    return (
        <div className='px-6 bg-white mt-6'>
            <div className="px-4">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold">{ticket.title}</h2>
                    <p className="text-gray-700">{ticket.description}</p>
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${statusClasses[ticket.status]}`}>
                        {ticket.status}
                    </span>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold">Historial de Estado</h3>
                    <ul className="list-disc list-inside">
                        {ticket.history.map((entry, index) => (
                            <li key={index} className="text-gray-700">
                                {entry.date}: {entry.status}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <form action="#" className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Responder
                        </label>
                        <div className="flex items-center">
                            <input type="text" name="message" id="message" className="flex-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Escribe un mensaje..." />
                            <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Enviar</button>
                        </div>
                    </form>
                    <h3 className="text-xl font-semibold">Mensajes</h3>
                    <ul className="space-y-2">
                        {ticket.messages.map((message, index) => (
                            <li key={index} className="p-2 bg-gray-100 rounded-lg">
                                <p className="text-gray-700"><span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${getRol[rol]}`}>.</span><strong>{message.author}:</strong> {message.content}</p>
                                <p className="text-gray-500 text-sm">{message.date}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ViewDetalleTecket;
