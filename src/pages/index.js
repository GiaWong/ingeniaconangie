import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Navbar />

       {/* Contenedor del título y la nueva imagen */}
       <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between mt-48 px-6"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {/* Título principal con animación en burbujas */}
        <motion.div className="text-left md:w-1/2">
          <h1 className="text-5xl md:text-4xl font-extrabold font-sans text-gray-200 drop-shadow-lg">
            {["Ingeniería en Informática", "Desarrollo de Software", "Gestión de Proyectos IT", "Product Owner"].map((text, index) => (
              <motion.div
                key={index}
                className="inline-block mx-6 my-6 py-3 px-6 bg-blue-600 text-white rounded-full shadow-lg"
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
                }}
              >
                {text}
              </motion.div>
            ))}
          </h1>
        </motion.div>

        {/* Imagen adicional al costado del título */}
        <motion.div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <motion.img
            src="/ImagenInicial.png" // Cambia esta ruta por la de la imagen que quieras agregar
            alt="Descripción de la imagen"
            className="w-[600px] h-auto animate-move-vertical md:mr-8 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>
      <br />.<br />.<br />

      {/* Contenedor con animación de fade-in al hacer scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center mt-10 px-8"
      >
        {/* Imagen con animación */}
        <motion.img
          src="/ImagenIntermedio.png"
          alt="Descripción de la imagen"
          className="w-[600px] h-auto animate-move-vertical md:mr-8 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Texto con animación */}
        <motion.div
          className="text-center md:text-left max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mt-6 text-lg font-extrabold font-sans text-gray-200">
            Soy Product Owner y estudiante avanzada de Ingeniería en Informática en la UBA.
            Me especializo en colaborar con empresas y dar asesoramiento a estudiantes que recién comienzan en el mundo 
            de la informática. 
            Mi enfoque está en entender las necesidades del negocio y transformar esas 
            ideas en soluciones claras y efectivas. 
            Si estás buscando mejorar o emprender proyectos en el ámbito IT, ¡puedo ayudarte!
          </p>
        </motion.div>
      </motion.div>
      <br />.<br />.<br />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </Layout>
  );
}
