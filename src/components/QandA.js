import { useState } from 'react';
import { motion } from 'framer-motion';

const qaData = [
  {
    question: "¿En qué áreas puedes ayudarme?",
    answer: " Desarrollo de software, dirección de proyectos IT, consultoría en programación y gestión de productos digitales como Product Owner.",
    icon: "💡",
  },
  {
    question: "¿Qué tipo de proyectos realizas?",
    answer: "Desde aplicaciones web y sistemas personalizados hasta la planificación y gestión de proyectos IT, adaptándome a las necesidades de cada negocio.",
    icon: "✅",
  },
  {
    question: "¿Cómo puedo contactarte?",
    answer: "Escríbeme un mensaje directo o consulta en mi perfil para más detalles.",
    icon: "🤝",
  },
  {
    question: "¿Ofreces servicios remotos?",
    answer: " ¡Claro! Trabajo tanto de manera remota como híbrida según lo que necesites.",
    icon: "👩‍💻",
  },
  {
    question: "¿Tienes experiencia liderando equipos?",
    answer: "Sí, he dirigido proyectos IT y gestionado equipos asegurando que cada objetivo se cumpla de manera eficiente.",
    icon: "🏆",
  },
  {
    question: "¿Puedes ayudar con la gestión de proyectos IT?",
    answer: "Sí, me encargo de la planificación, organización y seguimiento de proyectos para garantizar su éxito.",
    icon: "🕚",
  },
  {
    question: "¿Qué implica tu rol como Product Owner?",
    answer: " Me encargo de traducir las necesidades del negocio en soluciones estratégicas, priorizando funcionalidades y asegurando el alineamiento con los objetivos del proyecto.",
    icon: "👩‍🏫",
  },
  {
    question: "¿Puedes optimizar procesos dentro de una empresa?",
    answer: "Sí, analizo flujos de trabajo y propongo mejoras para hacer más eficientes los procesos tecnológicos y de gestión.",
    icon: "💯",
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
   
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center relative">
        <div className="w-full md:w-2/3 relative mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-6 bg-indigo-900 bg-opacity-30 rounded-lg shadow-md text-center mt-32  mb-32"
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
