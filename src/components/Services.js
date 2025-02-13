import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Desarrollo de Software",
    description:
      "Si necesitás una solución digital a medida, te ayudo a hacerla realidad con las mejores tecnologías. Trabajo en frontend, backend y fullstack, así que puedo acompañarte en todo el proceso de desarrollo.",
    image: "/ImagenCarrusel1.png",
    items: [
      "Diseño aplicaciones desde cero, adaptadas a lo que necesitás",
      "Optimizo sistemas existentes para que sean más rápidos, eficientes y fáciles de mantener",
      "Desarrollo bases de datos, páginas web modernas, apps interactivas y soluciones multiplataforma"
    ]
  },
  {
    title: "Dirección de Proyectos IT",
    description:
      "Si tenés un proyecto tecnológico y querés que todo esté bien organizado, te ayudo a planificar y gestionar cada paso con metodologías ágiles.",
    image: "/ImagenCarrusel2.png",
    items: [
      "Te acompaño en la planificación, organización y seguimiento para que tu proyecto avance sin trabas",
      "Como Product Owner, traduzco las necesidades del negocio en soluciones tecnológicas estratégicas",
      "Optimizo procesos y mejoro el impacto de los productos digitales para que logren los mejores resultados"
    ]
  },
  {
    title: "Consultoría de Programación",
    description:
      "Si estás arrancando en la programación y querés mejorar, te ayudo a entender los conceptos clave y a escribir código más limpio y eficiente.",
    image: "/ImagenCarrusel3.png",
    items: [
      "Te explico de manera sencilla Programación Orientada a Objetos (POO) y programación estructurada",
      "Te enseño buenas prácticas para que tu código sea más claro, ordenado y fácil de mantener",
      "Te acompaño con mentoría y capacitaciones para que te sientas seguro programando y puedas encarar proyectos con confianza"
    ]
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="servicios" className="mt-10 py-20 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-7xl md:text-8xl font-bold font-sans text-center">Servicios</h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 mb-32"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-pink-800 bg-opacity-30 text-white rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-32 h-32 object-contain mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.h2
                className="mt-4 text-2xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h2>
              <motion.p
                className="mt-2 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {service.description}
              </motion.p>
            
              <button
                className="mt-4 px-4 py-2 bg-white text-pink-700 font-bold rounded-lg"
                onClick={() => setSelectedService(service)}
              >
                Más info
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg max-w-md text-center relative">
            <h2 className="text-2xl font-bold mb-6 text-pink-700">{selectedService.title}</h2>
           
            <ul className="mt-4 text-left text-lg font-sans list-disc pl-5 leading-relaxed text-gray-800">
              {selectedService.items.map((item, idx) => (
                <li key={idx} className="text-base mb-3">
                  {item}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-pink-700 text-white font-bold rounded-lg"
              onClick={() => setSelectedService(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
