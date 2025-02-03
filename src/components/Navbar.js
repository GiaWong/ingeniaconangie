const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 font-sans">
      {/* Logo */}
      <div className="text-4xl font-sans font-bold text-white">Ingenia con Angie</div>


      {/* Menú */}
      <ul className="hidden md:flex space-x-10">
        <li><a href="#" className="text-2xl font-sans text-white hover:text-black">Quien soy</a></li>
        <li><a href="#" className="text-2xl font-sans text-white hover:text-black">Servicios</a></li>
        <li><a href="#" className="text-2xl font-sans text-white hover:text-black">Q&A</a></li>
        <li><a href="#" className="text-2xl font-sans text-white hover:text-black">Contacto</a></li>
      </ul>

      {/* Botón */}
      <button className="text-2xl font-sans bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Escribime por mail
      </button>
    </nav>
  );
};

export default Navbar;
