import { Link, useLocation, useParams } from 'react-router-dom'; // Importamos Link desde react-router-dom

export const SideBar = () => {
  
  const url = useLocation();

  const valueStr = url.pathname.substring(1);
  console.log(valueStr);

  
  
  
  return (
    <nav className="mt-4">
      <Link to="/"className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 bg-gray-200 dark:bg-gray-700">
        <h3 className="mr-3 h-5 w-5" />
        Inicio
      </Link>
      <Link
        to="/clientes" // Ruta a la página de clientes (puedes configurarla si es necesario)
        className="flex items-center px-4 py-2 mt-1 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <h3 className="mr-3 h-5 w-5" />
        Clientes
      </Link>
      <Link
        to="/facturas" // Ruta a las facturas
        className="flex items-center px-4 py-2 mt-1 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <h3 className="mr-3 h-5 w-5" />
        Facturas
      </Link>
      <Link
        to="/pqr" // Ruta a la página de PQR (si es necesario)
        className="flex items-center px-4 py-2 mt-1 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <h3 className="mr-3 h-5 w-5" />
        PQR
      </Link>
      <Link
        to="/instalaciones" // Ruta a las instalaciones (si es necesario)
        className="flex items-center px-4 py-2 mt-1 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <h3 className="mr-3 h-5 w-5" />
        Instalaciones
      </Link>
    </nav>
  );
};
