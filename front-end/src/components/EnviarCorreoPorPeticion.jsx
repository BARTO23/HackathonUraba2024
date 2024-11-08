import React, { useState } from 'react';

const UpdateStatusForm = () => {
    // Estado para almacenar los datos del formulario
    const [idPeticion, setIdPeticion] = useState('');
    const [nuevoEstado, setNuevoEstado] = useState('');
    const [correoUsuario, setCorreoUsuario] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Datos a enviar a la API
        const data = {
            id_peticion: idPeticion,
            nuevo_estado: nuevoEstado,
            correo_usuario: correoUsuario,
        };

        try {
            // Llamada a la API para actualizar el estado de la petición
            const response = await fetch('http://localhost:5000/api/actualizar-estado', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            // Verificar si la solicitud fue exitosa
            if (result.success) {
                setMensaje('Estado actualizado y correo enviado exitosamente.');
            } else {
                setMensaje('Hubo un error al actualizar el estado.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMensaje('Error al conectar con el servidor.');
        }
    };

    return (
        <div>
            <h2>Actualizar Estado de Petición</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID de la Petición:</label>
                    <input
                        type="text"
                        value={idPeticion}
                        onChange={(e) => setIdPeticion(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nuevo Estado:</label>
                    <input
                        type="text"
                        value={nuevoEstado}
                        onChange={(e) => setNuevoEstado(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Correo del Usuario:</label>
                    <input
                        type="email"
                        value={correoUsuario}
                        onChange={(e) => setCorreoUsuario(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Actualizar Estado</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default UpdateStatusForm;
