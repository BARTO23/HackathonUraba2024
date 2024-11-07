import React from 'react'

function Clientes() {

    const users = [
        {
            "id": 1,
            "primerNombre": "Juan",
            "segundoNombre": "Pablo",
            "primerApellido": "Pérez",
            "segundoApellido": "García",
            "direccion": "Calle Falsa 123, Ciudad A",
            "contacto": "juan.perez@email.com",
            "detalle": "Ocupación: Ingeniero"
        },
        {
            "id": 2,
            "primerNombre": "María",
            "segundoNombre": "Elena",
            "primerApellido": "Gómez",
            "segundoApellido": "López",
            "direccion": "Avenida Siempre Viva 456",
            "contacto": "maria.gomez@email.com",
            "detalle": "Ocupación: Diseñadora"
        },
        {
            "id": 3,
            "primerNombre": "Carlos",
            "segundoNombre": "",
            "primerApellido": "López",
            "segundoApellido": "Martínez",
            "direccion": "Plaza Central 789, Ciudad B",
            "contacto": "carlos.lopez@email.com",
            "detalle": "Ocupación: Médico"
        },
        {
            "id": 4,
            "primerNombre": "Ana",
            "segundoNombre": "",
            "primerApellido": "Martínez",
            "segundoApellido": "",
            "direccion": "Calle Nueva 321, Ciudad C",
            "contacto": "ana.martinez@email.com",
            "detalle": "Ocupación: Abogada"
        },
        {
            "id": 5,
            "primerNombre": "Luis",
            "segundoNombre": "",
            "primerApellido": "Fernández",
            "segundoApellido": "",
            "direccion": "Avenida Libertad 654",
            "contacto": "luis.fernandez@email.com",
            "detalle": "Ocupación: Estudiante"
        }
    ]



    return (
        <div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Panel de Gestión de Usuarios</h1>
                <form className="mb-8 p-4 bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            name="primerNombre"
                            placeholder="Primer Nombre *"
                            value=""
                            onChange=""
                            className="w-full p-2 rounded"
                            required    
                        />
                        <input
                            name="segundoNombre"
                            placeholder="Segundo Nombre"
                            value=""
                            onChange=""
                            className="w-full p-2 rounded"
                        />
                        <input
                            name="primerApellido"
                            placeholder="Primer Apellido *"
                            value=""
                            onChange=""
                            className="w-full p-2 rounded"
                            required
                        />
                        <input
                            name="segundoApellido"
                            placeholder="Segundo Apellido"
                            value=""
                            onChange=""
                            className="w-full p-2 rounded"
                        />
                        <input
                            name="direccion"
                            placeholder="Dirección *"
                            value=""
                            onChange=""
                            className="w-full p-2 rounded"
                            required
                        />
                        <input
                            name="contacto"
                            placeholder="Contacto *"
                            value=""
                            onChange=""
                            className="w-full p-2 rounded"
                            required
                        />
                        <textarea
                            name="detalle"
                            placeholder="Detalle"
                            value=""
                            onChange=""
                            className="w-full col-span-2 rounded p-2"
                        />
                    </div>
                    <button type="submit" className="mt-4">
                        Añadir Usuario  
                    </button>
                </form>
                <div className="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer Nombre</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segundo Nombre</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primer Apellido</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segundo Apellido</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contacto</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalle</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td class="px-6 py-4 whitespace-nowrap">{user.primerNombre}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{user.segundoNombre}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{user.primerApellido}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{user.segundoApellido}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{user.direccion}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{user.contacto}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{user.detalle}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <button
                                            class="text-blue-600 hover:text-blue-900"
                                            onClick="">
                                                mandar
                                        </button>
                                        <button
                                            class="text-red-600 hover:text-red-900 ml-2"
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