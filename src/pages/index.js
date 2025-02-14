import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import QandA from "../components/QandA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const textLines = [
  "Soy Product Owner y estudiante avanzada de Ingeniería en Informática en la UBA.",
  "Me especializo en colaborar con empresas y dar asesoramiento a estudiantes que recién comienzan en el mundo de la informática.",
  "Mi enfoque está en entender las necesidades del negocio y transformar esas ideas en soluciones claras y efectivas.",
  "Si estás buscando mejorar o emprender proyectos en el ámbito IT, ¡puedo ayudarte!"
];

const bubbleTexts = [
  "Ingeniería en Informática",
  "Desarrollo de Software",
  "Gestión de Proyectos IT",
  "Product Owner"
];

const TitleSection = () => (
  <motion.div
    id="quien-soy"
    initial="hidden"
    animate="visible"
    className="relative flex flex-col md:flex-col items-center justify-center mt-24 px-4 sm:px-6 w-full gap-y-4 md:gap-y-8 max-w-[90vw] mx-auto"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    }}
  >
    <motion.div
      className="relative w-full flex justify-center mt-32 mb-32"
      animate={{
        scale: [1, 1.1, 1],
        transition: { duration: 3, repeat: Infinity }
      }}
      // Ajustamos el tamaño de la imagen para que sea responsiva
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      <img
        src="/LogoBlanco.png"
        alt="Logo"
        className="w-56 h-auto sm:w-64 md:w-80 rounded-full shadow-lg shadow-pink-400"
      />
    </motion.div>

    <motion.div className="relative w-full md:w-1/2 flex flex-col gap-y-4 md:mt-6">
      {bubbleTexts.map((text, index) => (
        <motion.div
          key={index}
          className="font-bold text-lg sm:text-2xl md:text-3xl py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform text-white bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 animate-gradient-move max-w-full mx-auto text-center break-words"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
          }}
        >
          {text}
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);



const AboutSection = () => {
  const firstHalf = textLines.slice(0, Math.ceil(textLines.length / 2));
  const secondHalf = textLines.slice(Math.ceil(textLines.length / 2));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row items-center justify-center mt-16 sm:mt-32 px-4 sm:px-8 mb-16 sm:mb-32 gap-4 sm:gap-6"
    >
      <motion.div
        className="bg-pink-900 bg-opacity-10 p-4 sm:p-6 rounded-lg shadow-lg max-w-full sm:max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-base sm:text-lg md:text-xl font-semibold font-sans text-gray-200 leading-relaxed">
          {firstHalf.join(" ")}
        </p>
      </motion.div>

      <motion.div
        className="bg-pink-900 bg-opacity-10 p-4 sm:p-6 rounded-lg shadow-lg max-w-full sm:max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-base sm:text-lg md:text-xl font-semibold font-sans text-gray-200 leading-relaxed">
          {secondHalf.join(" ")}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <TitleSection />
      <AboutSection />
      <Services />
      <QandA />
      <Contact />
      <Footer />
    </Layout>
  );
}
