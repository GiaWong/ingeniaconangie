import { useState } from 'react';
import { motion } from 'framer-motion';

const qaData = [
  {
    question: "¿Cómo organizar mis tareas de manera eficiente?",
    answer: "Puedes organizar tus tareas usando listas y asignando prioridades. La clave es dividir las tareas grandes en partes más pequeñas y manejables.",
    icon: "✅", // Ícono de tarea
  },
  {
    question: "¿Cómo mejorar la colaboración en equipo?",
    answer: "Usar herramientas de gestión de proyectos, compartir archivos en la nube y mantener una comunicación constante a través de plataformas como Slack pueden mejorar mucho la colaboración.",
    icon: "🤝", // Ícono de colaboración
  },
  {
    question: "¿Qué son los recordatorios inteligentes?",
    answer: "Son notificaciones personalizadas que te recuerdan tus tareas pendientes en momentos claves, evitando que olvides lo más importante.",
    icon: "⏰", // Ícono de reloj
  },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navegar a la siguiente tarjeta
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % qaData.length);
  };

  // Navegar a la tarjeta anterior
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + qaData.length) % qaData.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Carrusel a la izquierda */}
        <div className="w-full md:w-2/3 relative mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
          >
            {/* Título de la tarjeta */}
            <h3 className="text-xl font-semibold text-gray-800">{qaData[currentIndex].question}</h3>
            
            {/* Ícono */}
            <div className="text-5xl mt-4">{qaData[currentIndex].icon}</div>

            {/* Respuesta */}
            <p className="mt-2 text-gray-600">{qaData[currentIndex].answer}</p>
          </motion.div>

          {/* Flechas de navegación */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-200"
          >
            <div className="w-4 h-4 border-t-2 border-l-2 transform -rotate-45 text-blue-600"></div>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-200"
          >
            <div className="w-4 h-4 border-t-2 border-l-2 transform -rotate-0 text-blue-600"></div>
          </button>
        </div>

        {/* Imagen fija fuera del carrusel (derecha) */}
        <motion.div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 md:ml-auto">
          <motion.img
            src="/ImagenQ&A.png" 
            alt="Descripción de la imagen"
            className="w-[600px] h-auto animate-move-vertical"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Features;
