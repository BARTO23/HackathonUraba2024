import React from 'react';

const TicketItem = ({status}) => {

    // Variables for the ticket item
    const title = 'Ticket Title';
    const description = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    const statusClasses = {
        open: 'bg-green-100 text-green-800',
        inProgress: 'bg-yellow-100 text-yellow-800',
        closed: 'bg-red-100 text-red-800',
      };

    return (
        <div>
            <div className="max-w-sm rounded border border-indigo-200 overflow-hidden shadow-lg p-4 bg-white">
                <button className='p-2'>X</button>
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${statusClasses[status]}`}>
                    {status}
                </span>
            </div>
        </div>
    );
}

export default TicketItem;
