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
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">SisGestión</h1>
        </div>
        <nav className="mt-4">
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-200">
            Inicio
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-200">
            Clientes
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-200">
            Facturas
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-700 bg-gray-200">
            Solicitudes
          </a>
          <a href="#" className="flex items-center px-4 py-2 mt-1 text-gray-600 hover:bg-gray-200">
            Instalaciones
          </a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Barra superior */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Solicitudes</h2>
          <div className="flex items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full mr-2">
              Notificaciones
            </button>
            <div className="relative">
              <button 
                className="flex items-center px-3 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>Usuario</span>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <div className="py-1">
                    <p className="px-4 py-2 text-sm text-gray-700 font-semibold">Mi Cuenta</p>
                    <hr />
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Perfil
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Configuración
                    </button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                      Cerrar Sesión
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Área de contenido */}
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Nueva Solicitud</h3>
              <p className="text-gray-600 mt-1">
                Complete el formulario para enviar una nueva solicitud a nuestra compañía.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-6 pt-0">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tu@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Servicio Deseado
                  </label>
                  <select
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md"
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
                  <label className="block text-sm font-medium mb-1">
                    Mensaje de la Petición
                  </label>
                  <textarea
                    placeholder="Describa su solicitud aquí..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md h-32"
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

        {/* Pie de página */}
        <footer className="bg-white shadow-md p-4 text-center text-sm text-gray-600">
          © 2023 SisGestión. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  )
}