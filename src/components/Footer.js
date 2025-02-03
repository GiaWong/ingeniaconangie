
const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-6 animate-fade-in">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4 text-lg font-semibold">
            © {new Date().getFullYear()} ingeniaconangie. Todos los derechos reservados.
          </p>
          <div className="space-x-6">
            <a href="#" className="hover:underline transition-all duration-300">Privacidad</a>
            <a href="#" className="hover:underline transition-all duration-300">Términos</a>
            <a href="#" className="hover:underline transition-all duration-300">Contacto</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  