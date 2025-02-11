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
    className="flex flex-col md:flex-row items-center justify-between mt-48 px-6"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
    }}
  >
    {/* Título principal con animación en burbujas */}
    <motion.div className="text-center md:w-1/2">
      <h1 className="text-5xl md:text-4xl font-extrabold font-sans text-gray-200 drop-shadow-lg">
        {bubbleTexts.map((text, index) => (
          <motion.div
            key={index}
            className="inline-block mx-6 my-6 py-3 px-6 bg-white text-purple-800 rounded-full shadow-lg"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
            }}
          >
            {text}
          </motion.div>
        ))}
      </h1>
    </motion.div>

    {/* Imagen al costado del título */}
    <motion.div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
      <motion.img
        src="/LogoBlanco.png"
        alt="Descripción de la imagen"
        className="w-[600px] h-auto animate-move-vertical md:mr-8 mb-6 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
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
      className="flex flex-col md:flex-row items-center justify-center mt-32 px-8 mb-32 gap-6"
    >
      {/* Bloque Izquierdo */}
      <motion.div
        className="bg-pink-900 bg-opacity-10 p-6 rounded-lg shadow-lg max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }} // Zoom leve al hacer hover
      >
        {firstHalf.map((line, index) => (
          <p key={index} className="text-xl md:text-2xl font-extrabold font-sans text-gray-200 leading-relaxed">
            {line}
          </p>
        ))}
      </motion.div>

      {/* Bloque Derecho */}
      <motion.div
        className="bg-pink-900 bg-opacity-10 p-6 rounded-lg shadow-lg max-w-lg w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }} // Agregamos un pequeño delay para que aparezca después
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }} // Zoom leve al hacer hover
      >
        {secondHalf.map((line, index) => (
          <p key={index} className="text-xl md:text-2xl font-extrabold font-sans text-gray-200 leading-relaxed">
            {line}
          </p>
        ))}
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
