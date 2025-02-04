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

      {/* Título principal con animación en cascada */}
<motion.div
  initial="hidden"
  animate="visible"
  className="text-center mt-48 px-6"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }}
>
  <h1 className="text-6xl md:text-6xl font-extrabold font-sans  text-gray-200 drop-shadow-lg">
    {["Ingeniería en Informática", "Desarrollo de Software", "Gestión de Proyectos IT", "Product Owner" ].map((text, index) => (
      <motion.div
        key={index}
        className="block"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        {text}
      </motion.div>
    ))}
  </h1>
</motion.div>



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
          src="/Logo.png"
          alt="Descripción de la imagen"
          className="w-[400px] h-auto animate-move-vertical md:mr-8 mb-6 md:mb-0"
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
          <p className="mt-6 text-lg">
            Soy Product Owner y estudiante avanzada de Ingeniería en Informática en la UBA, 
            con una gran pasión por la gestión de proyectos tecnológicos y el trabajo en equipo. 
            Me especializo en ayudar a empresas y a estudiantes que recién comienzan en el mundo 
            de la informática, optimizando procesos y gestionando proyectos tecnológicos de manera 
            eficiente. Mi enfoque está en entender las necesidades del negocio y transformar esas 
            ideas en soluciones claras y efectivas, maximizando el impacto de los productos digitales. 
            Si estás buscando mejorar o emprender proyectos en el ámbito IT, ¡puedo ayudarte!
          </p>
        </motion.div>
      </motion.div>

      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </Layout>
  );
}
