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

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md p-4 fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
    >
      {/* Logo */}
      <div className="text-3xl font-bold text-white">Ingenia con Angie</div>

      {/* Menú en pantallas grandes */}
      <ul className="hidden md:flex space-x-10">
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link 
              to={to} 
              smooth={true} 
              duration={500} 
              className="cursor-pointer text-xl text-white hover:text-black"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Botón menú hamburguesa en móviles */}
      <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-purple-600 text-white flex flex-col items-center py-4 space-y-4 md:hidden"
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
