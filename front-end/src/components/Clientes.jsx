import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Clientes() {

    const [users, setUsers] = useState([]);
    const [newItem, setNewItem] = useState('');

    const fetchData = () => {
        axios.get('http://localhost:5000/get_users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
   
    useEffect(() => {
        fetchData();
    }, []);

    // console.log(users);
    

    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Panel de Gestión de Usuarios</h1>
                <form className="mb-2 p-6 bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            name="primerNombre"
                            placeholder="Primer Nombre *"
                            className="w-full p-2 rounded"
                            required    
                        />
                        <input
                            name="segundoNombre"
                            placeholder="Segundo Nombre"
                            className="w-full p-2 rounded"
                        />
                        <input
                            name="primerApellido"
                            placeholder="Primer Apellido *"
                            className="w-full p-2 rounded"
                            required
                        />
                        <input
                            name="segundoApellido"
                            placeholder="Segundo Apellido"
                            className="w-full p-2 rounded"
                        />
                        <input
                            name="direccion"
                            placeholder="Dirección *"
                            className="w-full p-2 rounded"
                            required
                        />
                        <input
                            name="contacto"
                            placeholder="Contacto *"
                            className="w-full p-2 rounded"
                            required
                        />
                        <input
                            name="contacto"
                            placeholder="Correo *"
                            type="mail"
                            className="w-full p-2 rounded"
                            required
                        />
                        <textarea
                            name="detalle"
                            placeholder="Detalle"
                            className="w-full col-span-2 rounded p-2"
                        />
                    </div>
                    <button type="submit" className="mt-4">
                        Añadir Usuario  
                    </button>
                </form>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">DNI</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.documento}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.primer_nombre} {user.segundo_nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.primer_apellido} {user.segundo_apellido}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.direccion}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.contacto}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.detalle_cuenta}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            className="text-red-600 hover:text-red-900 ml-2"
                                            onClick={() => console.log("boton")}>
                                                 Eliminar
     
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Clientes