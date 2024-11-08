import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';

function Clientes() {

    const [users, setUsers] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const fetchData = () => {
        axios.get('http://localhost:5000/get_users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    const onSubmit = (data) => {
        // e.preventDefault(); // Prevent default form submission
        console.log(data);

        axios.post('http://localhost:5000/add_user', { item: data })
            .then(response => {
                console.log('Data posted:', response.data);
                fetchData(); // Fetch updated data after posting
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    const deleteUser = (documento) => {

        console.log(typeof documento);
        axios.delete(`http://localhost:5000/delete_user/${documento}`)
            .then(response => {
                console.log('User deleted:', response.data);
                fetchData(); // Fetch updated data after deletion
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
        // console.log('User deleted:', response.data);
    };


    useEffect(() => {
        fetchData();
    }, []);

    // console.log(users);


    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Panel de Gestión de Usuarios</h1>
                <form className="mb-2 p-6 bg-gray-100 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <input
                            {...register("documento", { required: true })}
                            placeholder="Documento *"
                            className="w-full p-2 rounded"
                        />
                        {errors.documento && <span className="text-red-500">Este campo es obligatorio</span>}

                        <input
                            {...register("primer_nombre", { required: true })}
                            placeholder="Primer Nombre *"
                            className="w-full p-2 rounded"
                        />
                        {errors.primerNombre && <span className="text-red-500">Este campo es obligatorio</span>}

                        <input
                            {...register("segundo_nombre")}
                            placeholder="Segundo Nombre"
                            className="w-full p-2 rounded"
                        />

                        <input
                            {...register("primer_apellido", { required: true })}
                            placeholder="Primer Apellido *"
                            className="w-full p-2 rounded"
                        />
                        {errors.primerApellido && <span className="text-red-500">Este campo es obligatorio</span>}

                        <input
                            {...register("segundo_apellido")}
                            placeholder="Segundo Apellido"
                            className="w-full p-2 rounded"
                        />

                        <input
                            {...register("direccion", { required: true })}
                            placeholder="Dirección *"
                            className="w-full p-2 rounded"
                        />
                        {errors.direccion && <span className="text-red-500">Este campo es obligatorio</span>}

                        <input
                            {...register("contacto", { required: true })}
                            placeholder="Contacto *"
                            className="w-full p-2 rounded"
                        />
                        {errors.contacto && <span className="text-red-500">Este campo es obligatorio</span>}

                        <input
                            {...register("correo", { required: true })}
                            placeholder="Correo *"
                            type="email"
                            className="w-full p-2 rounded"
                        />
                        {errors.correo && <span className="text-red-500">Este campo es obligatorio</span>}

                        <textarea
                            {...register("detalle_cuenta")}
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
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalle</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.documento}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.primer_nombre} {user.segundo_nombre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.primer_apellido} {user.segundo_apellido}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.correo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.direccion}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.contacto}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.detalle_cuenta}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            className="text-red-600 hover:text-red-900 ml-2"
                                            onClick={() => deleteUser(user.id_cliente)}>
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