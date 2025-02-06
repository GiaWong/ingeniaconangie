import { useState } from 'react';
import { motion } from 'framer-motion';

const qaData = [
  {
    question: "¿Cómo organizar mis tareas de manera eficiente?",
    answer: "Puedes organizar tus tareas usando listas y asignando prioridades. La clave es dividir las tareas grandes en partes más pequeñas y manejables.",
    icon: "✅",
  },
  {
    question: "¿Cómo mejorar la colaboración en equipo?",
    answer: "Usar herramientas de gestión de proyectos, compartir archivos en la nube y mantener una comunicación constante a través de plataformas como Slack pueden mejorar mucho la colaboración.",
    icon: "🤝",
  },
  {
    question: "¿Qué son los recordatorios inteligentes?",
    answer: "Son notificaciones personalizadas que te recuerdan tus tareas pendientes en momentos claves, evitando que olvides lo más importante.",
    icon: "⏰",
  },
];

const QandA = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % qaData.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + qaData.length) % qaData.length);
  };

  return (
    <section id="qanda" className="mt-10 py-20 text-center py-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white animate-fade-in">
      <h1 className="text-8xl font-bold font-sans">Q&A</h1>
      <br /><br /><br />
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center relative">
        <div className="w-full md:w-2/3 relative mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-transparent rounded-lg shadow-md text-center"
          >
            <h3 className="text-2xl font-bold text-white drop-shadow-md">{qaData[currentIndex].question}</h3>
            <div className="text-5xl mt-4">{qaData[currentIndex].icon}</div>
            <p className="mt-2 text-lg text-white drop-shadow-md">{qaData[currentIndex].answer}</p>
          </motion.div>

          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-pink-200 border-2 border-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-200"
          >
            <span className="text-white text-2xl">&#x276E;</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-pink-200 border-2 border-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-200"
          >
            <span className="text-white text-2xl">&#x276F;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default QandA;
