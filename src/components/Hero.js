import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { title: "Desarrollo de Software", description: "Creamos soluciones a medida con las mejores tecnologías.", image: "/ImagenCarrusel1.png" },
  { title: "Dirección de Proyectos IT", description: "Gestionamos proyectos tecnológicos con metodologías ágiles.", image: "/ImagenCarrusel2.png" },
  { title: "Consultoría de Programación", description: "Asesoramiento experto para optimizar tu código y procesos.", image: "/ImagenCarrusel3.png" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-6xl font-bold font-sans">Servicios</h1>
        <div className="overflow-hidden w-full mt-8 relative flex items-center">
          <button onClick={prevSlide} className="absolute left-4 bg-blue-600 text-white p-3 rounded-full z-10">❮</button>
          <div className="w-full flex justify-center items-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="min-w-[300px] md:min-w-[400px] bg-white text-black p-6 rounded-2xl shadow-lg cursor-pointer flex flex-col items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                whileHover={{ scale: 1.25 }}
              >
                <h2 className="text-2xl font-semibold text-center">{services[currentIndex].title}</h2>
                <p className="mt-2 text-center">{services[currentIndex].description}</p>
                <img src={services[currentIndex].image} alt={services[currentIndex].title} className="mt-4 w-60 h-40 object-contain rounded-2xl" />
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={nextSlide} className="absolute right-4 bg-blue-600 text-white p-3 rounded-full z-10">❯</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
