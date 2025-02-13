import { useState, useEffect  } from 'react';
import { motion,  AnimatePresence } from 'framer-motion';

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
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };

    handleResize(); // Ejecutar al cargar
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= qaData.length ? 0 : prevIndex + itemsPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerSlide < 0
        ? Math.max(0, qaData.length - (qaData.length % itemsPerSlide || itemsPerSlide))
        : prevIndex - itemsPerSlide
    );
  };

  return (
    <section
      id="qanda"
      className="mt-10 py-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white"
    >
      <h1 className="text-7xl md:text-8xl font-bold font-sans text-center">Q&A</h1>

      <div className="mt-32 mb-32 gap-8 max-w-4xl mx-auto px-6 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="flex flex-col md:flex-row gap-6 justify-center items-center transition-all"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {qaData.slice(currentIndex, currentIndex + itemsPerSlide).map((item, index) => (
              <div
                key={index}
                className="w-96 p-6 bg-indigo-900 bg-opacity-30 rounded-lg shadow-lg text-center flex flex-col items-center"
              >
                <h3 className="text-2xl font-bold">{item.question}</h3>
                <div className="text-5xl mt-4">{item.icon}</div>
                <p className="mt-2 text-lg">{item.answer}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-pink-500 border-2 border-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"
        >
          &#x276E;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-pink-500 border-2 border-white rounded-full flex items-center justify-center hover:bg-pink-600 transition-all"
        >
          &#x276F;
        </button>
      </div>
    </section>
  );
};
export default QandA;