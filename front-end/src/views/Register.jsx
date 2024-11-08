import { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({
    documento: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    correo: "",
    direccion: "",
    contacto: "",
    detalle_cuenta: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula una llamada a la API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(
      "Registro exitoso. Tu cuenta ha sido creada. Bienvenido a nuestro sistema."
    );

    setFormData({
      documento: "",
      primer_nombre: "",
      segundo_nombre: "",
      primer_apellido: "",
      segundo_apellido: "",
      correo: "",
      direccion: "",
      contacto: "",
      detalle_cuenta: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">
            Registro de Usuario
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Complete el formulario para crear su cuenta
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 pt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="documento" className="text-sm font-medium">
                Documento
              </label>
              <input
                id="documento"
                name="documento"
                value={formData.documento}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="primer_nombre" className="text-sm font-medium">
                  Primer Nombre
                </label>
                <input
                  id="primer_nombre"
                  name="primer_nombre"
                  value={formData.primer_nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="segundo_nombre" className="text-sm font-medium">
                  Segundo Nombre (Opcional)
                </label>
                <input
                  id="segundo_nombre"
                  name="segundo_nombre"
                  value={formData.segundo_nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="primer_apellido"
                  className="text-sm font-medium"
                >
                  Primer Apellido
                </label>
                <input
                  id="primer_apellido"
                  name="primer_apellido"
                  value={formData.primer_apellido}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="segundo_apellido"
                  className="text-sm font-medium"
                >
                  Segundo Apellido (Opcional)
                </label>
                <input
                  id="segundo_apellido"
                  name="segundo_apellido"
                  value={formData.segundo_apellido}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="correo" className="text-sm font-medium">
                Correo Electrónico
              </label>
              <input
                id="correo"
                name="correo"
                type="email"
                value={formData.correo}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="direccion" className="text-sm font-medium">
                Dirección
              </label>
              <input
                id="direccion"
                name="direccion"
                value={formData.direccion}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="contacto" className="text-sm font-medium">
                Contacto
              </label>
              <input
                id="contacto"
                name="contacto"
                value={formData.contacto}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="detalle_cuenta" className="text-sm font-medium">
                Detalle de la Cuenta
              </label>
              <textarea
                id="detalle_cuenta"
                name="detalle_cuenta"
                value={formData.detalle_cuenta}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmitting ? "Registrando..." : "Registrar Usuario"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
