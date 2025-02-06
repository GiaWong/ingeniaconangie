import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-scroll";

const links = [
  { label: "Quién soy", to: "quien-soy" },
  { label: "Servicios", to: "servicios" },
  { label: "Q&A", to: "qanda" },
  { label: "Contacto", to: "contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir Gmail en una nueva pestaña
  const handleMailClick = () => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=laboral.wong@gmail.com", "_blank");
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="px-14 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md py-10 fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-white">Ingenia con Angie</div>

      {/* Contenedor alineado a la derecha */}
      <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
        {links.map(({ label, to }) => (
          <Link 
            key={to} 
            to={to} 
            smooth={true} 
            duration={500} 
            className="cursor-pointer font-semibold text-1xl text-white hover:text-black"
          >
            {label}
          </Link>
        ))}
        {/* Botón "Escribime por mail" */}
        <button
          onClick={handleMailClick}
          className="bg-white text-pink-600 text-1xl font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Escribime por mail
        </button>
      </div>

      {/* Botón menú hamburguesa en móviles */}
      <button className="md:hidden text-white text-4xl ml-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full bg-purple-600 text-white flex flex-col items-center py-6 space-y-6 md:hidden"
        >
          {links.map(({ label, to }) => (
            <Link 
              key={to} 
              to={to} 
              smooth={true} 
              duration={500} 
              className="cursor-pointer text-xl hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
