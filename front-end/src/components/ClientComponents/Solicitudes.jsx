import { useState } from "react"

const servicios = [
  "Instalación",
  "Mantenimiento",
  "Reparación",
  "Consultoría",
  "Actualización de sistema",
  "Soporte técnico",
  "Otro"
]

export const Solicitudes = () => {
  const [email, setEmail] = useState("")
  const [servicio, setServicio] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simula una llamada a la API
    await new Promise(resolve => setTimeout(resolve, 1500))

    alert("Solicitud enviada. Te contactaremos pronto.")

    setEmail("")
    setServicio("")
    setMensaje("")
    setIsSubmitting(false)
  }

  return (
    <>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-xl text-gray-600 font-semibold">Nueva Solicitud</h3>
            <p className="text-gray-600 mt-1">
              Complete el formulario para enviar una nueva solicitud a nuestra compañía.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="p-6 pt-0">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  placeholder="tu@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-gray-600 px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Servicio Deseado
                </label>
                <select
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  required
                  className="w-full text-gray-600 px-3 py-2 border rounded-md"
                >
                  <option value="">Seleccione un servicio</option>
                  {servicios.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Mensaje de la Petición
                </label>
                <textarea
                  placeholder="Describa su solicitud aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  className="w-full text-gray-600 px-3 py-2 border rounded-md h-32"
                />
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}