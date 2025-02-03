import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Layout from "../components/Layout"; // Importamos Layout

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <h1 className="text-center text-3xl font-sans mt-10 text-white-900">
      <br />
        <span className="font-bold text-4xl">
          Ingeniería en Informática | Gestión de Proyectos IT | Desarrollo de Software | Product Owner
        </span>
        <br /> <br /> <br />
        Soy Product Owner y estudiante de 4to año de Ingeniería en Informática en la UBA, 
        con una gran pasión por la gestión de proyectos tecnológicos y la dirección de equipos. 
        Mi enfoque está en traducir las necesidades de negocio en soluciones estratégicas, 
        optimizando procesos y maximizando el impacto de los productos digitales.
      </h1>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </Layout>
  );
}
