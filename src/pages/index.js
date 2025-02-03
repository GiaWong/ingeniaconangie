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
      <h1 className="text-center text-3xl font-sans mt-10 text-white-900">
      <br /> <br /> <br />
        <span className="font-bold text-4xl">
          Ingeniería en Informática | Gestión de Proyectos IT | Product Owner | Desarrollo de Software 
        </span>
        <img
          src="/Logo.png" // Ruta de la imagen
          alt="Descripción de la imagen"
          className=" mx-auto mb-8 w-[800px] h-auto animate-move-vertical" 
          
        />
        <br /> 
        Soy Product Owner y estudiante avanzada de Ingeniería en Informática en la UBA, 
        con una gran pasión por la gestión de proyectos tecnológicos y el trabajo en equipo. 
        Me especializo en ayudar a empresas y a estudiantes que recién comienzan en el mundo 
        de la informática, optimizando procesos y gestionando proyectos tecnológicos de manera 
        eficiente. Mi enfoque está en entender las necesidades del negocio y transformar esas 
        ideas en soluciones claras y efectivas, maximizando el impacto de los productos digitales. 
        Si estás buscando mejorar o emprender proyectos en el ámbito IT, ¡puedo ayudarte!
        <br /> <br /> <br /> <br /> <br /> <br /> 
      </h1>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </Layout>
  );
}
