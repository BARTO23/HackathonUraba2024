import { useState } from 'react';

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-violet-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="border-2 border-black p-2 flex items-center space-x-2">
            <span className="text-black font-bold">Logo</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-200">Inicio</a>
          <a href="/informacion" className="text-white hover:text-gray-200">Información</a>
          <a href="/pqrs" className="text-white hover:text-gray-200">PQRs</a>
          <a href="/menu" className="text-white hover:text-gray-200">Menú</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Login and Sign In */}
        <div className="flex flex-col items-end">
          <a href="/login" className="text-white text-lg font-thin mb-1">Login</a>
          <a href="/register" className="text-white text-sm">Sign Up</a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-violet-600 p-4 mt-2`}
      >
        <a href="/" className="block text-white py-2">Inicio</a>
        <a href="/informacion" className="block text-white py-2">Información</a>
        <a href="/pqrs" className="block text-white py-2">PQRs</a>
        <a href="/menu" className="block text-white py-2">Menú</a>
        <a href="/login" className="block text-white py-2 mt-2">Login</a>
        <a href="/register" className="block text-white py-2">Sign in</a>
      </div>
    </nav>
  );
}

