import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Simulamos una llamada de red con un retraso de 1.5 segundos
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulamos un error de autenticación
      if (email !== "usuario@ejemplo.com" || password !== "contraseña123") {
        throw new Error("Credenciales inválidas");
      }

      // Si todo va bien, login exitoso
      console.log("Login exitoso");
      // Aquí iría la lógica para redirigir al usuario o manejar el estado de autenticación.
    } catch (err) {
      setError(
        "Email o contraseña incorrectos. Por favor, inténtelo de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Crear un objeto con los datos del usuario
  const userData = {
    email: email,
    password: password
  };

  const verifyUser = (data) => {
    // e.preventDefault(); // Prevent default form submission
    console.log(data);

    axios.post('http://localhost:5000/add_user', { item: userData })
      .then(response => {
        console.log('Data posted:', response.data);
        fetchData(); // Fetch updated data after posting
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Iniciar sesión en su cuenta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={verifyUser}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12c0 1.104-.896 2-2 2s-2-.896-2-2 2-.896 2-2 2-.896 2-2c0 1.104-.896 2-2 2z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.93 12C3.75 7.11 7.64 4 12 4c2.68 0 5.22 1.2 7 3 2.72 2.72 4 6.32 4 9 0 2.21-.74 4.26-2 5.72-2.7 2.61-6.61 2.28-9-1-2.79-3.45-7.99-3.99-10.03-7.28a3.25 3.25 0 00-.01-.01C2.45 14.51 3.2 13.11 2.93 12z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </div>

            {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isLoading}
              >
                {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              ¿No tiene una cuenta?{" "}
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Regístrese
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
