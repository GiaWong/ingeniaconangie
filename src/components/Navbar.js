import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Asegúrate de tener instalado lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md p-4 fixed top-0 left-0 right-0 z-50 font-sans flex justify-between items-center"
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-white">Ingenia con Angie</div>

      {/* Menú en pantallas grandes */}
      <ul className="hidden md:flex space-x-10">
        <li><a href="#" className="text-1xl text-white hover:text-black">Quién soy</a></li>
        <li><a href="#" className="text-1xl text-white hover:text-black">Servicios</a></li>
        <li><a href="#" className="text-1xl text-white hover:text-black">Q&A</a></li>
        <li><a href="#" className="text-1xl text-white hover:text-black">Contacto</a></li>
      </ul>

      {/* Botón y menú hamburguesa */}
      <div className="flex items-center space-x-4">
        {/* Botón visible en todas las pantallas */}
        <button className="text-1xl bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Escribime por mail
        </button>

        {/* Menú hamburguesa en móviles */}
        <button 
          className="md:hidden text-white text-3xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-purple-600 text-white flex flex-col items-center py-4 space-y-4 md:hidden"
        >
          <a href="#" className="text-1xl hover:text-black">Quién soy</a>
          <a href="#" className="text-1xl hover:text-black">Servicios</a>
          <a href="#" className="text-1xl hover:text-black">Q&A</a>
          <a href="#" className="text-1xl hover:text-black">Contacto</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
